/**
 * Assign stable refs to every roadmap item and generate missing content/{ref}.md.
 * Skips hand-written articles; regenerates only auto-stub files from older runs.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(root, 'content')
const roadmapsDir = path.join(root, 'public', 'roadmaps')

const ALIASES = new Map(
  Object.entries({
    closure: 'js/closures',
    closures: 'js/closures',
    'prototype chain': 'js/prototypes',
    prototypes: 'js/prototypes',
    'then/catch': 'js/promise',
    promise: 'js/promise',
    'async/await': 'js/async-await',
    microtasks: 'js/event-loop-microtasks',
    macrotasks: 'js/event-loop-macrotasks',
    // Do NOT alias bare "constraints" — TS / Postgres / system-design are different topics
    backpressure: 'node/backpressure',
    'status codes': 'http/status-codes',
    acid: 'db/acid',
    jwt: 'auth/jwt',
    claims: 'auth/jwt',
    xss: 'security/xss',
    csrf: 'security/csrf',
    cors: 'http/cors',
    origin: 'http/cors',
    cookies: 'auth/cookies',
    'transactional outbox': 'microservices/transactional-outbox',
    'idempotency key': 'microservices/idempotency-key',
    useeffect: 'react/use-effect',
  }),
)

const STUB_MARKERS = [
  'это конкретный навык/механизм',
  'уверенно объяснять механизм, типичные ошибки и trade-offs',
  'Важно на собесе',
  'База уровня CORE',
  'Частый KILLER-вопрос',
  'KILLER-вопрос на собесе',
  'OPT-тема: отличает глубину',
  'Назовите симптом в проде',
  'чаще всего ловят на собесе',
  'нужно уметь объяснить механизм, риск и альтернативы',
  'Нужен, чтобы',
  'Иначе на практике часто получают',
  'функция продолжения; ад вложенности',
  'Чтобы явно выразить и переиспользовать поведение, связанное с',
  '— это это ',
  'Какие ключевые абстракции',
]

const CYR = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z',
  и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r',
  с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch',
  ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
}

function translit(s) {
  return [...s]
    .map((ch) => {
      const lower = ch.toLowerCase()
      const t = CYR[lower]
      if (t === undefined) return ch
      return ch === lower ? t : t.charAt(0).toUpperCase() + t.slice(1)
    })
    .join('')
}

function slugify(label) {
  return (
    translit(label)
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[+/]/g, '-')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .replace(/-{2,}/g, '-')
      .slice(0, 60) || 'topic'
  )
}

function areaFor(topicId, file, label) {
  const t = `${topicId} ${label}`.toLowerCase()
  const f = file.toLowerCase()

  if (/react|hydration|rsc|jsx|fiber|hooks|nextjs|csr|ssr|ssg/.test(t)) return 'react'
  if (/html|css|flex|grid|semantic|a11y|position|transition|cascade|box model|landmark|aria|keyboard|focus|screen reader|z-index|responsive|headings|labels|autocomplete|opacity|transform|stacking/.test(t) && !/cssom|critical-render|reflow|web-vital|lcp|inp|cls/.test(t)) {
    if (/form|validation|label|autocomplete/.test(t) && /topic-forms|topic-a11y|topic-semantics|topic-html|topic-flex|topic-position|topic-transition/.test(topicId)) return 'css'
    if (/topic-html|topic-flex|topic-semantic|topic-a11y|topic-position|topic-transition|topic-forms/.test(topicId)) return 'css'
  }
  if (/^topic-ts|typescript|generics|utility|narrowing|interfaces|unions|mapped|conditional|infer|pick|omit|partial|required|record|returntype/.test(t)) return 'ts'
  if (/topic-event-loop|topic-async-js|topic-js-core|topic-types|topic-functions|topic-objects|topic-prototypes|topic-arrays|topic-dom|topic-memory|topic-classes|topic-fp|coercion|equality|closure|prototype|promise|microtask|macrotask|bind\/call|this\b|iterable|weakmap|garbage/.test(t)) return 'js'
  if (/topic-node|libuv|stream|worker_threads|child_process|cluster|backpressure|readable|writable|duplex|fs\b|commonjs|package\.json/.test(t)) return 'node'
  if (/fastify|nestjs|backend-arch|orm|prisma|drizzle|typeorm|controller|provider|decorator|interceptor|dto\b|query builder/.test(t)) return 'backend'
  if (/topic-http|topic-rest|api-design|api-gateway|websocket|grpc|status code|preflight|multipart|content.type|http\/2|http\/3|quic/.test(t)) return 'http'
  if (/authentication|authorization|oauth|jwt|session|password|refresh token|access token|pkce|id token|claims/.test(t)) return 'auth'
  if (/security|xss|csrf|cors|sql injection|ssrf|csp|sanitiz|escaping|rbac|abac|secret|encrypt|hashing|path traversal|secure header/.test(t)) {
    if (/cors|origin|preflight/.test(t) && /topic-cors|topic-web-security/.test(topicId)) return /cors|origin|preflight/.test(label.toLowerCase()) ? 'http' : 'security'
    return 'security'
  }
  if (/sql|data-model|index|transaction|postgres|n\+1|repository|unit of work|connection pool|jsonb|migration|schema|select|join|cte|window|explain|deadlock|acid|orm/.test(t) && !/terraform|docker/.test(t)) {
    if (/fastify|nestjs|backend-arch|topic-orm|topic-query-builder|topic-data-patterns/.test(topicId) && /prisma|drizzle|typeorm|repository|n\+1|unit of work|connection pool|dto|controller|service/.test(t)) {
      if (/n\+1|repository|unit of work|connection pool|prisma|drizzle|typeorm|migration|schema|relation|transaction/.test(t)) return /prisma|drizzle|typeorm|dto|controller|service|decorator|hook|plugin|pipe|guard|interceptor|filter|validation|serialization/.test(label.toLowerCase()) || /topic-fastify|topic-nestjs|topic-backend|topic-orm|topic-query/.test(topicId) ? (/n\+1|repository|unit of work|connection pool|query builder|join|aggregat/.test(label.toLowerCase()) || /topic-data-patterns|topic-query|topic-sql|topic-index|topic-transaction|topic-postgres|topic-data-model|topic-query-opt/.test(topicId) ? 'db' : 'backend') : 'backend'
    }
    if (/topic-sql|topic-data-model|topic-indexes|topic-transactions|topic-postgresql|topic-query-opt|topic-data-patterns/.test(topicId)) return 'db'
  }
  if (/redis|cach|ttl|stampede|cache-aside|cdn|elastica/.test(t)) return 'cache'
  if (/queue|broker|kafka|rabbit|event-driven|outbox|message|pub\/sub|consumer group|dead letter/.test(t)) return 'messaging'
  if (/test|jest|vitest|rtl|cypress|playwright|testcontainer|mock|spy|fixture|test pyramid|flaky|contract testing/.test(t)) return 'testing'
  if (/docker|compose|kubernetes|k8s|linux|aws|cloud|cicd|github action|ec2|s3|rds|terraform|helm|nginx|iam|sqs|cloudwatch/.test(t)) return 'devops'
  if (/log|metric|trac|observ|opentelemetry|correlation|span/.test(t) && !/topic-observers/.test(topicId)) return 'observability'
  if (/topic-observers|intersection|resize|mutation observer/.test(t)) return 'frontend'
  if (/micro|saga|outbox|gateway|bff|resilience|circuit|bulkhead|service-communication|choreography|orchestration|2pc/.test(t)) return 'microservices'
  if (/solid|ddd|clean-architecture|domain|aggregate|bounded|factory|strategy|observer pattern|facade|adapter/.test(t) && /topic-solid|topic-ddd|topic-clean|topic-design-patterns/.test(topicId)) return 'architecture'
  if (/system|scalab|capacit|distribut|reliab|requirement|sharding|replication|partition|load balanc|url shortener|news feed|chat|payment|notification|file storage|cap theorem|leader/.test(t)) return 'system-design'
  if (/git|branch|rebase|bisect|code-review/.test(t)) return 'git'
  if (/bundle|webpack|vite|npm|yarn|pnpm|eslint|prettier|lint|lockfile|semver|tree-shaking|chunks/.test(t)) return 'tooling'
  if (/fsd|feature-sliced|component-arch|api-layer|critical-render|reflow|repaint|web-vital|lcp|inp|cls|paint|composite|lazy-load|image-opt|service-worker|worker/.test(t)) return 'frontend'
  if (/star|teamwork|situation|task|action|result|handoff|alignment|ownership/.test(t) && /topic-star|topic-teamwork|topic-code-review/.test(topicId)) return 'frontend'
  if (f.includes('frontend')) return 'frontend'
  return 'backend'
}

function classify(label) {
  const l = label.toLowerCase()
  if (/n\+1|leak|deadlock|stampede|mismatch|flaky|injection|traversal|blocking$/.test(l)) return 'problem'
  if (/\bvs\b|\//.test(l) && /saga|sync|async|micro|mono|2pc|csr|ssr/.test(l)) return 'comparison'
  if (/^(promise\.|fs|path|url|select|where|join|group by|having|pick|omit|partial|required|record|returntype)/i.test(l)) return 'api'
  if (/docker|kafka|redis|nginx|prisma|jest|vite|webpack|kubernetes|terraform|rabbitmq|drizzle|typeorm|vitest|eslint|prettier|helm|istio|linkerd|opentelemetry|testcontainers/.test(l)) return 'tech'
  if (/circuit breaker|cache-aside|outbox|saga|repository|factory|adapter|facade|strategy|bulkhead|retry|backoff|choreography|orchestration|unit of work|bff|gateway/.test(l)) return 'pattern'
  if (/^(srp|ocp|lsp|isp|dip)$/i.test(l)) return 'principle'
  if (/^(lcp|inp|cls|rps|latency|throughput|bandwidth|saturation|error rate)$/i.test(l)) return 'metric'
  return 'concept'
}

/** Compact curated facts: def, pitfall, tradeoff/extra interview angle */
const FACTS = {
  html5: [
    'HTML5 — это современный стандарт разметки с семантическими тегами, формами и multimedia API.',
    'Чтобы структура страницы была понятна браузеру, поисковикам и вспомогательным технологиям.',
    'Замена landmark-тегов голыми div ломает навигацию скринридеров и ухудшает SEO.',
  ],
  cascade: [
    'Cascade — это алгоритм CSS, который выбирает победившее правило по origin, специфичности и порядку в коде.',
    'Чтобы конфликты стилей разрешались предсказуемо, а не случайным порядком подключений.',
    'Злоупотребление !important и «войны специфичности» делают Cascading-стили почти неподдерживаемыми.',
  ],
  'box model': [
    'Box model — это модель размера элемента: content, padding, border и снаружи margin.',
    'Чтобы ширины и отступы во всех компонентах считались одинаково.',
    'Путаница content-box и border-box ломает сетку: width начинает включать или не включать padding/border.',
  ],
  responsive: [
    'Responsive — это раскладка, которая подстраивается под viewport через media queries и гибкие единицы.',
    'Чтобы один интерфейс нормально работал на телефоне и десктопе без отдельного «мобильного сайта».',
    'Фиксированные px-ширины и отсутствие meta viewport делают страницу неюзабельной на мобильных.',
  ],
  flex: [
    'Flexbox — это одномерная раскладка, которая распределяет элементы вдоль главной оси и выравнивает по поперечной.',
    'Чтобы собирать ряды и колонки компонентов без ручного расчёта отступов.',
    'Путают justify-content и align-items, а flex-shrink неожиданно сжимает элементы.',
  ],
  grid: [
    'CSS Grid — это двумерная раскладка по строкам и колонкам с tracks, areas и gap.',
    'Чтобы задавать каркас страницы и сложные сетки без вложенных костылей.',
    'Неверное понимание fr и auto-placement ставит элементы не в те ячейки, которые ожидали.',
  ],
  alignment: [
    'Alignment — это выравнивание элементов по осям во flex/grid и содержимого внутри ячеек.',
    'Чтобы управлять позицией относительно свободного пространства, а не подпирать margin’ами.',
    'stretch по умолчанию растягивает детей и ломает ожидания фиксированных размеров.',
  ],
  layout: [
    'Layout (reflow) — это этап, на котором браузер считает геометрию элементов в потоке.',
    'Чтобы понимать стоимость изменений размеров и позиций и не устраивать лишние пересчёты.',
    'Чередование чтения геометрии и записи стилей в цикле вызывает layout thrashing и jank.',
  ],
  landmarks: [
    'Landmarks — это регионы страницы (header, nav, main, aside, footer) для карты документа во вспомогательных технологиях.',
    'Чтобы пользователь скринридера прыгал к основному содержимому и навигации без обхода всей вёрстки.',
    'Несколько main или отсутствие main путает навигацию по регионам.',
  ],
  headings: [
    'Иерархия h1–h6 — это оглавление документа для людей и вспомогательных технологий.',
    'Чтобы смысл разделов читался из структуры тегов, а не только из размера шрифта.',
    'Пропуск уровней и несколько несвязанных h1 разрушают структуру оглавления.',
  ],
  aria: [
    'ARIA — это роли, состояния и свойства, которые дополняют HTML, когда нативной семантики не хватает.',
    'Чтобы кастомные виджеты оставались понятными скринридерам так же, как нативные контролы.',
    'ARIA на неклавиатурном «див-кнопке» хуже button; не используйте ARIA, если хватает HTML.',
  ],
  labels: [
    'label — это подпись, связанная с контролом через for/id или обёртку и дающая полю доступное имя.',
    'Чтобы клик по тексту фокусировал поле, а скринридер объявлял назначение ввода.',
    'Placeholder вместо label пропадает после ввода и плохо заменяет настоящую подпись.',
  ],
  validation: [
    'Валидация — это проверка входа по правилам (HTML constraints и/или схема) на клиенте и обязательно на сервере.',
    'Чтобы рано отсекать мусор для UX и никогда не доверять только браузеру в вопросах безопасности.',
    'Только клиентская проверка обходится прямым запросом к API.',
  ],
  autocomplete: [
    'autocomplete — это атрибут, который подсказывает браузеру семантику поля (email, current-password и т.д.).',
    'Чтобы автозаполнение логина и платежных данных работало предсказуемо.',
    'Неверные токены ломают менеджеры паролей и ухудшают security UX.',
  ],
  keyboard: [
    'Клавиатурный доступ — это полное управление интерфейсом через Tab, Enter/Space, Esc и стрелки по паттерну виджета.',
    'Чтобы интерактив работал без мыши и соответствовал a11y-паттернам.',
    'Сломанный tab order и отсутствие focus trap/restore в модалке делают диалог неуправляемым с клавиатуры.',
  ],
  focus: [
    'Focus — это элемент, который сейчас получает клавиатурный ввод; :focus-visible показывает индикатор, когда это уместно.',
    'Чтобы пользователь всегда видел, где находится фокус, в том числе после закрытия оверлеев.',
    'outline: none без видимой замены делает клавиатурную навигацию слепой.',
  ],
  'screen readers': [
    'Screen reader — это программа, которая озвучивает доступное имя, роль и состояние элементов.',
    'Чтобы интерфейс был пригоден для пользователей, которые не опираются на визуальную вёрстку.',
    'Иконки-кнопки без accessible name «молчат» и не объявляют действие.',
  ],
  stacking: [
    'Stacking context — это изолированный слой, внутри которого сравнивается порядок перекрытия потомков.',
    'Чтобы контролировать, что рисуется поверх чего, без хаотичных глобальных z-index.',
    'Новый context (opacity < 1, transform, filter, position + z-index) часто объясняет, почему «z-index не работает».',
  ],
  'z-index': [
    'z-index — это порядок отрисовки внутри одного stacking context, а не глобальный приоритет по всей странице.',
    'Чтобы локально управлять перекрытием соседних элементов в одном контексте.',
    'Гигантские z-index — запах неправильной модели слоёв: элемент сравнивается не с тем соседом.',
  ],
  'containing block': [
    'Containing block — это прямоугольник предка, относительно которого считаются проценты и смещения absolute/fixed.',
    'Чтобы правильно позиционировать оверлеи, sticky и процентную геометрию.',
    'transform на предке делает его containing block для fixed — элемент «прилипает» не к viewport.',
  ],
  transform: [
    'transform — это визуальное смещение, масштаб или поворот элемента, часто на композитном слое без пересчёта layout.',
    'Чтобы анимировать движение дешевле, чем через top/left, и не форсировать reflow на каждый кадр.',
    'transform создаёт новый containing block и stacking context и ломает ожидания про fixed и z-index.',
  ],
  opacity: [
    'opacity — это непрозрачность элемента целиком; значение меньше 1 создаёт новый stacking context.',
    'Чтобы плавно показывать и скрывать UI без перестройки геометрии.',
    'opacity: 0 не убирает элемент из hit-testing и фокуса так же, как visibility или inert.',
  ],
  'reduced motion': [
    'prefers-reduced-motion — это медиафича, которой система просит снизить анимации.',
    'Чтобы уважать vestibular и accessibility-настройки и не навязывать декоративный motion.',
    'Полный игнор вреден; обычно оставляют короткие смысловые переходы и отключают декоративные.',
  ],
  primitives: ['Примитивы JS: string, number, boolean, null, undefined, symbol, bigint.', 'typeof null === "object" — исторический баг.', 'Обёртки String/Number редко нужны явно.'],
  coercion: ['Coercion — приведение типов (ToPrimitive/ToNumber/ToString/ToBoolean).', '== включает coercion; [] + {} и странные сравнения — классика собеса.', 'В API предпочитайте === и явные Number/String/Boolean.'],
  equality: ['== vs === vs Object.is: разные правила равенства.', 'NaN === NaN false, Object.is(NaN,NaN) true; +0/−0.', 'Для бизнес-логики почти всегда === или Object.is.'],
  this: ['this зависит от способа вызова (не от места определения), кроме arrow.', 'Потеря this в колбэке (map, setTimeout) — частый баг.', 'arrow захватывает lexical this; bind/call/apply задают явно.'],
  'bind/call/apply': ['call/apply вызывают с this и аргументами; bind возвращает обёртку.', 'bind не «перебиндить» повторно уже bound функцию.', 'apply удобен для массива аргументов; rest/spread чаще современнее.'],
  new: ['new создаёт объект, ставит [[Prototype]], вызывает конструктор с this.', 'Без new this в non-strict может утечь в global — баг.', 'class constructor нельзя без new.'],
  inheritance: ['Наследование в JS — делегирование по prototype chain.', 'Глубокие иерархии классов хрупки; композиция часто лучше.', 'super и порядок инициализации полей — частые вопросы.'],
  'class syntax': ['class — сахар над прототипами + TDZ для класса.', 'Методы в prototype, поля экземпляра — по месту записи.', 'Hoisting иной, чем function declaration.'],
  'private fields': ['#field — жёсткая приватность на уровне языка.', 'Слабая «приватность» _underscore не защищает.', 'Приватные поля не видны снаружи и в подклассах без # доступа.'],
  extends: ['extends связывает [[Prototype]] ctor и prototype.', 'Можно extends от expression (mixin-фабрики).', 'Ошибки при неправильном super() до this.'],
  'map/reduce': ['map/filter/reduce — ядро трансформаций массивов.', 'reduce злоупотребляют до нечитаемости; мутация в map — баг.', 'Для простых сумм reduce ок; сложная логика — явный цикл/хелпер.'],
  iterables: ['Iterable: Symbol.iterator → iterator { next }.', 'for..of, spread, деструктуризация работают через iterable.', 'Генераторы удобно реализуют кастомные iterable.'],
  'sets/maps': ['Set/Map — коллекции с reference/SameValueZero семантикой ключей.', 'Object как карта путает ключи-строки и прототип.', 'WeakSet/WeakMap не мешают GC ключей-объектов.'],
  events: ['DOM events: capture → target → bubble; Event object.', 'preventDefault vs stopPropagation — разные цели.', 'Пассивные listeners для scroll/touch важны для perf.'],
  delegation: ['Делегирование: слушатель на предке + event.target/closest.', 'Выгодно для списков и динамических узлов.', 'Не подходит, если событие не всплывает (focus — focusin).'],
  'layout reads': ['Чтение layout (offset*, getBoundingClientRect) может форсировать reflow.', 'Чередование write/read в цикле = layout thrashing.', 'Батчить чтения, потом записи; или rAF.'],
  'render tick': ['Кадр: JS → style → layout → paint → composite.', 'Долгий JS или layout на main thread роняет FPS.', 'requestAnimationFrame для визуальных обновлений.'],
  errors: ['Ошибки в async: try/catch вокруг await; .catch на промисах.', 'Необработанный rejection — событие process/browser.', 'Нормализуйте доменные ошибки vs сетевые.'],
  immutability: ['Иммутабельность — новые значения вместо мутаций in-place.', 'В React мутация state «тихо» ломает рендеры.', 'structuredClone/immer vs ручной spread — trade-off.'],
  compose: ['Композиция функций: f(g(x)), pipe/compose.', 'Чистые маленькие функции проще тестировать.', 'Слишком глубокая композиция ухудшает стектрейсы.'],
  'custom methods': ['Кастомные методы на прототипах/хелперах расширяют API.', 'Грязнить Array.prototype — конфликт и сюрпризы.', 'Лучше утилиты модуля, чем monkey-patch.'],
  'tree-shaking': ['Tree-shaking удаляет неиспользуемый ESM при бандле.', 'CommonJS и side-effects в module ломают shaking.', 'sideEffects в package.json и чистые ESM-экспорты.'],
  'dynamic import': ['import() — ленивая загрузка модуля → Promise.', 'Нужен для code splitting маршрутов.', 'Ошибки сети/чанка надо обрабатывать UI fallback.'],
  reachability: ['GC собирает объекты, недостижимые из roots.', 'Случайные ссылки в замыканиях/кэшах держат память.', 'DevTools Heap snapshot ищет retainers.'],
  leaks: ['Утечки: слушатели, таймеры, кэши, detached DOM.', 'Рост heap между интеракциями — симптом.', 'Слабые ссылки (WeakMap) для метаданных объектов.'],
  WeakMap: ['WeakMap: ключи-объекты weakly held, не итерируется.', 'Идеален для приватных метаданных без утечек.', 'Нельзя использовать примитивы как ключи.'],
  WeakRef: ['WeakRef даёт слабую ссылку; FinalizationRegistry — уведомление.', 'Не для обычной бизнес-логики — GC недетерминирован.', 'Кэши/WASM мосты — редкие кейсы.'],
  interfaces: ['interface в TS описывает форму значения (структурная типизация).', 'Declaration merging у interface vs type alias.', 'Для объектов часто interface; для union — type.'],
  unions: ['Union A | B — значение одного из вариантов.', 'Narrowing через typeof/in/discriminant обязателен.', 'Избыточные union раздувают API — лучше дискриминант.'],
  narrowing: ['Narrowing сужает union control-flow анализом.', 'Type guard и assert помогают компилятору.', 'После mutate/alias narrowing может сброситься.'],
  conditional: ['T extends U ? X : Y — ветвление на уровне типов.', 'distributive conditional по naked type param.', 'Основа многих utility types.'],
  mapped: ['Mapped types: { [K in keyof T]: ... } трансформируют форму.', 'key remapping via as; -readonly/-? модификаторы.', 'Полезно для Derive API типов из модели.'],
  infer: ['infer извлекает тип внутри conditional extends.', 'Типичный паттерн: ReturnType, параметры функций.', 'Ошибка — infer вне extends-ветки.'],
  variance: ['Variance: ко/контра/инвариантность generic-параметров.', 'В TS параметры функций контравариантны в strictFunctionTypes.', 'Неверная variance ломает безопасную подстановку.'],
  'API design': ['Дизайн generic API: defaults, constraints, понятные имена параметров.', 'Слишком умные типы ухудшают DX ошибок.', 'Публичный API типизируйте консервативнее внутренностей.'],
  'Pick/Omit': ['Pick/Omit выбирают/исключают ключи из типа.', 'Omit неглубокий; nested нужно вручную.', 'Часто для DTO и публичных проекций сущностей.'],
  Pick: ['Pick<T,K> берёт подмножество ключей.', 'K должен быть keyof T.', 'Удобно для create/update input типов.'],
  Omit: ['Omit<T,K> исключает ключи.', 'Together with Partial — паттерн update DTO.', 'Не заменяет runtime валидацию.'],
  Record: ['Record<K,V> — объект с ключами K и значениями V.', 'Часто Record<string, T> вместо index signature.', 'Ключи-литералы дают точные карты.'],
  ReturnType: ['ReturnType<typeof fn> извлекает тип возврата.', 'Нужна typeof на value; на тип функции — иначе.', 'Связка с typeof + satisfies в конфиг-объектах.'],
  Partial: ['Partial делает все поля optional.', 'Для deep partial нужен рекурсивный utility.', 'Не забывайте required поля на runtime.'],
  Required: ['Required делает optional поля обязательными.', 'Обратный Partial для финализации конфигов.', 'Полезно после merge defaults.'],
  guards: ['Type guard (x is T) сужает тип в ветке true.', 'Ложный guard = дыра в type safety.', 'Предпочитайте discriminants вместо слабых typeof.'],
  discriminants: ['Discriminated union: общее literal-поле kind/type.', 'switch по discriminant — exhaustive check.', 'Эталон моделирования состояний UI/API.'],
  asserts: ['asserts x is T — assertion function кидает или сужает.', 'После вызова тип считается гарантированным.', 'Используйте для инвариантов на границе.'],
  JSX: ['JSX — синтаксис под React.createElement/jsx runtime.', 'Атрибуты ≠ HTML 1-в-1 (className, htmlFor).', 'Компиляция зависит от jsx/jsxImportSource.'],
  props: ['Props — входные данные компонента (immutable сверху).', 'Мутация props — антипаттерн; поднимайте state.', 'Discriminated props лучше boolean-комбинаторики.'],
  composition: ['Composition: дети, slots, маленькие компоненты вместо наследования.', 'children и render-props как точки расширения.', 'Избегайте god-component с 20 props.'],
  memoization: ['useMemo/useCallback/React.memo кэшируют вычисления/идентичность.', 'Преждевременная мемоизация шумит и ошибается в deps.', 'Мемите при реальном дорогом расчёте или стабильности deps.'],
  'custom hooks': ['Custom hook — переиспользуемая stateful-логика с use*.', 'Условный вызов хуков запрещён.', 'Возвращайте стабильный API (объект/кортеж) осознанно.'],
  reconciliation: ['Reconciliation сравнивает VDOM/Fiber и планирует обновления.', 'type+key решают, переиспользовать ли fiber.', 'Смена type сбрасывает state поддерева.'],
  keys: ['key идентифицирует элемент в списке между рендерами.', 'index как key вреден при insert/reorder.', 'Стабильный id из данных — правило.'],
  fiber: ['Fiber — единица работы React: прерывание, приоритеты.', 'Объясняет concurrent features и повторные render в Strict Mode.', 'Не путать с «виртуальным DOM как массив» упрощением.'],
  'local state': ['Local state — useState/useReducer в компоненте.', 'Дублирование серверного state локально — рассинхрон.', 'Поднимайте state до ближайшего общего предка.'],
  'server state': ['Server state — кэш удалённых данных (React Query и т.п.).', 'Нужны staleTime, invalidation, retries.', 'Не храните «источник истины» только в useState.'],
  store: ['Глобальный store (Zustand/Redux) для кросс-дерева UI state.', 'Всё в глобальный store — лишние ререндеры и связность.', 'Серверные данные — в библиотеку запросов, UI — локально/селективно.'],
  compound: ['Compound components делят UI через неявный контекст.', 'Гибкий API (<Select><Option/>), сложнее типы.', 'Документируйте обязательную вложенность.'],
  'render props': ['Render prop: функция-дети для кастомизации вывода.', 'Частично вытеснены hooks.', 'Всё ещё встречаются в libs и legacy.'],
  controlled: ['Controlled: значение и onChange снаружи; source of truth — parent.', 'Смешение controlled/uncontrolled даёт warning и баги.', 'Для форм часто controlled + схема валидации.'],
  memo: ['React.memo мемоизирует результат render по props.', 'Бесполезен, если children/props новые каждый раз.', 'Профилируйте до массового memo.'],
  virtualization: ['Виртуализация рендерит только видимые строки списка.', 'Сложность: динамическая высота, a11y, scroll restore.', 'Обязательна на тысячах узлов DOM.'],
  splitting: ['Code splitting режет бандл на чанки (lazy routes).', 'Водяные водопады запросов после split — новая проблема.', 'Prefetch по hover/intent улучшает UX.'],
  routes: ['Маршруты связывают URL и UI-дерево.', 'Вложенные routes + layout outlets.', 'Авторизационные loaders/guards на границе.'],
  loaders: ['Loaders подгружают данные до/вокруг рендера маршрута.', 'Ошибки и pending — часть контракта роутера.', 'Не дублируйте тот же fetch в useEffect без нужды.'],
  navigation: ['Клиентская навигация без полной перезагрузки.', 'Scroll restoration и pending UI важны для UX.', 'Внешние ссылки vs router Link — разные поведения.'],
  CSR: ['CSR: HTML-оболочка + рендер в браузере.', 'Худший FCP/SEO без доп. мер.', 'Простые кабинеты/SPA часто ок на CSR.'],
  SSR: ['SSR: HTML на сервере, затем hydration.', 'TTFB vs CPU сервера — trade-off.', 'Нужна изоморфность кода (window-guards).'],
  SSG: ['SSG: HTML на билде.', 'Отлично для контента; плохо для персонализации в билде.', 'ISR/on-demand revalidate смягчают свежесть.'],
  ISR: ['ISR — ревалидация статики по времени/запросу.', 'Кратковременно возможна устаревшая страница.', 'Модель кэша CDN+framework важна.'],
  routing: ['Файловый/конфиг routing фреймворка.', 'Conflict static vs dynamic segments.', 'Layouts и parallel routes — продвинутые паттерны.'],
  'data fetching': ['Где фетчить: server component, loader, client query.', 'Водопады и дубли запросов — главные perf-баги.', 'Кэш и дедуп на фреймворк-уровне.'],
  cache: ['HTTP/app/framework cache слои отличаются семантикой.', 'Неверные Cache-Control = stale или no-store боль.', 'Явно разделяйте CDN cache и client cache.'],
  mismatch: ['Hydration mismatch — серверный HTML ≠ клиентский первый render.', 'Date.now, random, locale-only markup — причины.', 'suppressHydrationWarning — точечно, не ковёр.'],
  streaming: ['Streaming SSR/RSC постепенно отдаёт HTML/chunks.', 'Улучшает TTFB perception; сложнее ошибки посреди потока.', 'Suspence boundaries режут поток.'],
  islands: ['Islands: гидратировать только интерактивные островки.', 'Меньше JS на контентных страницах.', 'Границы островков — ключ дизайна.'],
  'server components': ['RSC выполняются на сервере, не включают client JS bundle по умолчанию.', 'Нельзя использовать hooks/browser API.', 'Client boundaries через "use client".'],
  boundaries: ['Границы server/client и error/suspense boundaries.', 'Слишком широкая client-boundary убивает выгоду RSC.', 'Error boundary ловит render errors, не все async.'],
  actions: ['Server Actions/mutations с серверным выполнением.', 'Нужны authz и валидация на сервере.', 'Идемпотентность и progressive enhancement формы.'],
  methods: ['HTTP методы: семантика GET/POST/PUT/PATCH/DELETE.', 'GET безопасный/идемпотентный; POST — не всегда.', 'Небезопасная семантика ломает кэш и ретраи.'],
  headers: ['Заголовки — метаданные запроса/ответа (Content-Type, Cache-Control, Auth).', 'Hop-by-hop vs end-to-end.', 'Не логируйте Authorization/Cookie целиком.'],
  resources: ['REST resource — существительное URL + манипуляции методами.', 'Глаголы в URL (/doSomething) — запах RPC-over-HTTP.', 'Стабильные идентификаторы и гипермедиа опциональны.'],
  pagination: ['Pagination: offset/limit vs cursor.', 'Offset деградирует на больших страницах; cursor стабильнее.', 'Total count дорогой — часто приближают.'],
  connection: ['WebSocket connection lifecycle: open/message/close/error.', 'Нужен backoff reconnect и auth refresh.', 'Sticky sessions/load balancer для scale.'],
  reconnect: ['Reconnect с exponential backoff + jitter.', 'Без jitter — thundering herd.', 'Идемпотентность сообщений после reconnect.'],
  heartbeat: ['Heartbeat/ping выявляет мёртвые half-open соединения.', 'Таймауты прокси должны быть согласованы.', 'Слишком частый ping — лишний трафик.'],
  escaping: ['Escaping контекстно: HTML/attr/JS/URL/CSS.', 'Один encode «на всё» не работает.', 'В React текстовые children экранируются; dangerouslySetInnerHTML — риск.'],
  CSP: ['Content-Security-Policy ограничивает источники скриптов/ресурсов.', 'unsafe-inline ослабляет защиту от XSS.', 'nonce/hash для inline; report-uri для мониторинга.'],
  sanitization: ['Sanitize HTML белым списком тегов/атрибутов (DOMPurify и т.п.).', 'После sanitize всё равно думайте о контексте вставки.', 'Лучше не принимать HTML, если можно Markdown/структуру.'],
  preflight: ['Preflight — OPTIONS перед «непростым» cross-origin запросом.', 'Кастомные headers/Content-Type вызывают preflight.', 'Кэшируется Access-Control-Max-Age.'],
  credentials: ['credentials: include отправляет cookie cross-origin при разрешении.', 'Нельзя совмещать Allow-Origin: * с credentials.', 'CSRF актуален при cookie-сессиях.'],
  storage: ['Где хранить токены: memory vs sessionStorage vs cookie.', 'XSS читает JS-storage; cookie нужен Secure/SameSite.', 'Refresh rotation и revocation — must-have.'],
  refresh: ['Refresh token обновляет access token без re-login.', 'Reuse detection при краже refresh.', 'Короткий access + длинный refresh — обычный компромисс.'],
  DOM: ['DOM — дерево документа; работа дорога на больших списках.', 'Лишние layout thrash и reflow.', 'Абстракции (React) не отменяют стоимость DOM.'],
  CSSOM: ['CSSOM — объектная модель стилей вместе с DOM для render.', 'Блокирующие CSS задерживают first paint.', 'Критический CSS и порядок link/script важны.'],
  paint: ['Paint заполняет пиксели слоёв.', 'Частые paint по большим областям дорогие.', 'will-change только точечно.'],
  composite: ['Composite собирает слои на GPU.', 'transform/opacity часто остаются на composite.', 'Лишние слои едят память.'],
  layout: ['Layout/reflow считает геометрию.', 'Изменение width/height/top триггерит layout.', 'Читайте layout batch-ом.'],
  LCP: ['LCP — largest contentful paint, метрика загрузки.', 'Герой-картинка без размеров и поздний CSS портят LCP.', 'Priority hints/preload для LCP-ресурса.'],
  INP: ['INP — responsiveness на взаимодействиях.', 'Долгий JS на main thread ухудшает INP.', 'Разбивайте задачи, откладывайте тяжёлое.'],
  CLS: ['CLS — визуальная стабильность.', 'Картинки/реклама без размеров сдвигают layout.', 'reserve space, font-display стратегия.'],
  Intersection: ['IntersectionObserver — видимость элемента относительно viewport/корня.', 'Ленивые картинки, infinite scroll, analytics impression.', 'rootMargin порога важны.'],
  Resize: ['ResizeObserver — изменения размера элемента.', 'Замена window.resize для компонент.', 'Избегайте циклов observe→resize→observe.'],
  Mutation: ['MutationObserver следит за изменениями DOM-дерева.', 'Тяжело на частых мутациях — фильтруйте.', 'Интеграции с legacy/widget-кодом.'],
  threads: ['Web Worker — фоновый поток без DOM.', 'Обмен postMessage/structured clone (или transferable).', 'Не для маленьких задач — накладные расходы.'],
  messages: ['Сообщения worker↔main через postMessage.', 'Transferable ArrayBuffer отдаёт владение.', 'Ошибки сериализации неочевидны.'],
  offload: ['Offload CPU-задач в worker, чтобы не блокировать UI.', 'Не всё ускоряется — накладные copy.', 'Профилируйте до усложнения.'],
  offline: ['Service Worker кэш для offline/ускорения.', 'Стратегии cache-first vs network-first.', 'Версии кэша и skipWaiting аккуратно.'],
  updates: ['Обновление SW: install → waiting → activate.', 'Застрявший waiting SW путает пользователей.', 'UX «есть обновление — обновить».'],
  prefetch: ['Prefetch заранее тянет вероятный следующий ресурс.', 'Слишком агрессивный prefetch жрёт сеть/батарею.', 'Intent-based (hover) часто лучше.'],
  formats: ['Современные форматы изображений: AVIF/WebP + fallback.', 'Неверный format negotiation раздувает вес.', 'CDN image pipeline упрощает.'],
  sizes: ['srcset/sizes дают подходящую плотность/ширину.', 'Один огромный PNG для всех viewport — антипаттерн.', 'CLS: width/height или aspect-ratio.'],
  lazy: ['loading=lazy / lazy routes откладывают работу.', 'LCP-элемент не должен быть lazy.', 'Порог ленивости зависит от UX.'],
  chunks: ['Chunks — куски бандла после splitting.', 'Слишком мелкие/крупные chunks = waterfall или вес.', 'analyze помогает увидеть дубли вендоров.'],
  analyze: ['Bundle analyzer показывает состав чанков.', 'Ищите дубли React и тяжёлые libs.', 'Сравнивайте before/after оптимизации.'],
  Vite: ['Vite: dev native ESM + Rollup/esbuild prod.', 'Быстрый HMR; нюансы CJS-зависимостей.', 'env-префикс VITE_ и безопасность.'],
  Webpack: ['Webpack — зрелый бандлер с огромной экосистемой.', 'Сложный конфиг; code splitting через splitChunks.', 'В новых проектах часто Vite/Rspack, но знание Webpack ценят.'],
  plugins: ['Плагины расширяют bundler/framework хуками.', 'Порядок плагинов влияет на результат.', 'Пишите тонкие плагины с понятными side-effects.'],
  lockfile: ['Lockfile фиксирует дерево зависимостей.', 'Коммитить lockfile в apps — must.', 'Расхождения CI vs local из-за игнора lockfile.'],
  semver: ['Semver: MAJOR.MINOR.PATCH и ranges (^,~).', 'Major ломает API; caret пропускает minor.', 'Dependabot + тесты спасают от сюрпризов.'],
  scripts: ['npm scripts — единообразный DX/CI вход.', 'Тонкие скрипты лучше «магических» бинарников без доков.', 'Не прячьте секреты в скриптах.'],
  ESLint: ['ESLint — статические правила и фиксы.', 'Доля шума убивает сигнал; тюньте конфиг.', 'typescript-eslint для TS-семантики.'],
  Prettier: ['Prettier — opinionated formatting, без логики.', 'Конфликты с ESLint решают eslint-config-prettier.', 'Формат в CI/pre-commit снижает bike-shedding.'],
  branches: ['Ветвление: trunk-based vs long-lived feature.', 'Долгие ветки = ад merge.', 'Защищённый main + PR reviews.'],
  rebase: ['rebase переписывает историю поверх нового base.', 'Не rebase публичные ветки без договорённости.', 'conflict resolution те же, что у merge.'],
  bisect: ['git bisect бинарным поиском ищет виновный коммит.', 'Нужен воспроизводимый тест/скрипт.', 'Экономит часы на регрессиях.'],
  pipeline: ['CI pipeline: build → test → scan → deploy.', 'Хрупкие flaky тесты подрывают доверие к CI.', 'Кэш зависимостей и артефакты ускоряют.'],
  Docker: ['Docker упаковывает app+deps в image/container.', 'Толстые images и root-процесс — риски.', 'multi-stage и non-root — база.'],
  deploy: ['Deploy стратегии: rolling, blue/green, canary.', 'Без rollback плана деплой опасен.', 'Миграции БД отдельно продумайте совместимость.'],
  layers: ['Слои архитектуры (UI/domain/data) с правилом зависимостей.', 'Нарушение «внутрь» рождает цикли и тестируемость↓.', 'FSD/Clean — разные школы тех же идей.'],
  slices: ['FSD slices группируют фичи по бизнесу.', 'Публичный API слайса запрещает глубокие импорты.', 'Cross-import между features — запах.'],
  'public API': ['Public API модуля — единственная точка импорта.', 'Deep import ломает инкапсуляцию.', 'ESLint boundaries помогают.'],
  SRP: ['Single Responsibility — один повод для изменения.', 'God-component/service нарушает SRP.', 'Делите по акторам/причинам изменений, не по строкам.'],
  DIP: ['Dependency Inversion: зависеть от абстракций.', 'Прямые new Infra внутри domain мешают тестам.', 'DI/конструктор injection на бэке; ports/adapters.'],
  OCP: ['Open/Closed: расширение без ломки существующего.', 'Бесконечные if/switch по типам — сигнал.', 'Полиморфизм/стратегии/плагины.'],
  LSP: ['Liskov: подтип применим там, где базовый.', 'Усиливать предусловия в наследнике нельзя.', 'Наследование ради шаринга кода часто ломает LSP.'],
  ISP: ['Interface Segregation — узкие интерфейсы.', 'Жирные props/ports заставляют заглушать лишнее.', 'Роли клиента важнее «одной большой дыры».'],
  adapter: ['Adapter приводит чужой API к вашему порту.', 'Антикоррупционный слой над легаси/вендором.', 'Не протекать типы вендора наружу.'],
  facade: ['Facade упрощает подсистему одним входом.', 'Толстый facade становится новым god-object.', 'Держите тонким orchestration.'],
  state: ['State pattern: объект меняет поведение по состоянию.', 'Явная модель состояний лучше флагов.', 'В UI — state machine (XState) для сложных флоу.'],
  factory: ['Factory инкапсулирует создание объектов.', 'Нужна, когда создание ветвистое/дорогое.', 'Не путать с DI-контейнером целиком.'],
  strategy: ['Strategy подменяет алгоритм за общим интерфейсом.', 'Убирает ветвления из вызывающего кода.', 'Сочетается с DIP.'],
  observer: ['Observer/pub-sub уведомляет подписчиков о событии.', 'Утечки подписок и порядок доставки — риски.', 'В UI — события домена, не всё через глобальный bus.'],
  tradeoffs: ['Явные trade-offs: latency/consistency/cost/complexity.', 'Собес ждёт «что жертвуем и почему».', 'Фиксируйте NFR до выбора технологии.'],
  constraints: ['Ограничения (время, бюджет, легаси, compliance) формируют дизайн.', 'Игнор constraints = нереализуемый дизайн.', 'Проговаривайте их в начале system design.'],
  scope: ['Scope требований: что in/out.', 'Scope creep убивает оценки.', 'MVP vs nice-to-have явно.'],
  client: ['API client инкапсулирует HTTP, ошибки, auth headers.', 'Размазанный fetch по компонентам — боль.', 'Централизуйте retry/error mapping.'],
  ownership: ['Ownership данных/компонента: кто источник истины.', 'Два владельца одного state → рассинхрон.', 'Документируйте границы команд/модулей.'],
  slots: ['Slots/composition points для кастомизации UI.', 'Named slots vs children.', 'Ограничивайте, чтобы не протекала внутренняя вёрстка.'],
  contracts: ['Контракт API: схема, ошибки, идемпотентность, версия.', 'Breaking change без versioning ломает клиентов.', 'Consumer-driven contracts в микросервисах.'],
  unit: ['Unit-тест — узкий, быстрый, с моками границ.', 'Хрупкие тесты реализации vs поведения.', 'Пирамида: много unit, меньше e2e.'],
  mocks: ['Mock/stub/spy подменяют зависимость.', 'Over-mocking тестирует сказку.', 'Мокайте I/O, не чистую логику.'],
  timers: ['Фейковые таймеры (vi.useFakeTimers) ускоряют тесты.', 'Неочищенные таймеры = flaky/hang.', 'Всегда advance/runAll и restore.'],
  queries: ['RTL queries: get/find/query + роли/текст.', 'Предпочитайте role/label, не test-id без нужды.', 'find* для async.'],
  'user events': ['user-event ближе к реальному вводу, чем fireEvent.', 'Асинхронность ввода — await.', 'pointer/keyboard последовательности важны.'],
  a11y: ['a11y-тесты: роли, имена, клавиатура, axe.', 'Визуально ок ≠ доступно.', 'Включайте в CI точечно.'],
  flows: ['E2E flow — критический пользовательский путь.', 'Минимизируйте e2e: они медленные/хрупкие.', 'Стабильные селекторы и тестовые данные.'],
  fixtures: ['Fixtures — детерминированные тестовые данные.', 'Общий mutable fixture = flaky.', 'Фабрики данных лучше статичных гигантов.'],
  flakiness: ['Flaky: зависимость от времени, порядка, сети, анимаций.', 'Карантин без фикса маскирует проблему.', 'Ретраи — временная мера, не стратегия.'],
  situation: ['STAR: Situation — контекст задачи.', 'Коротко и по делу, без биографии компании.', 'Готовьте 3–5 историй заранее.'],
  task: ['STAR: Task — ваша цель/роль.', 'Отличайте личный вклад от командного «мы».', 'Метрика успеха задачи.'],
  action: ['STAR: Action — что сделали вы.', 'Конкретные шаги, решения, компромиссы.', 'Технические детали уровня вашей роли.'],
  result: ['STAR: Result — эффект (метрики, риски↓).', 'Честный провал с выводом тоже ценят.', 'Свяжите результат с бизнесом.'],
  diffs: ['Code review читает diff на риски и ясность.', 'Нитрайп по стилю, если есть форматтер.', 'Маленькие PR повышают качество ревью.'],
  risks: ['Риски в PR: security, data loss, perf, rollback.', 'Миграции и фичефлаги отдельно проговорить.', 'Чеклист > память.'],
  feedback: ['Фидбек в ревью — о коде, не о личности.', 'Предлагайте альтернативу, не только «нет».', 'SLA ревью влияет на throughput команды.'],
  handoff: ['Handoff: контекст, ссылки, риски, next steps.', 'Устный «в голове» не масштабируется.', 'Короткий письменный handoff экономит дни.'],
  alignment: ['Alignment — общее понимание цели/ограничений.', 'Расхождение PM/engineering ловится рано на RFC.', 'Архитектурные ADR фиксируют решения.'],
  callbacks: [
    'Callback — это функция, которую передают другой функции, чтобы та вызвала её позже.',
    'Чтобы не зашивать действие внутрь функции, а передавать его снаружи.',
    'Глубокая вложенность и Node-style (err, data) легко превращаются в проглоченные ошибки; обычно поверх ставят Promise/async.',
  ],
  'Promise.all': [
    'Promise.all — это метод, который принимает набор промисов и возвращает один промис с массивом результатов, когда все завершатся успешно.',
    'Чтобы запустить независимые асинхронные операции параллельно и дождаться всех перед следующим шагом.',
    'Если один промис падает, Promise.all сразу reject’ится (fail-fast); для частичного успеха используют Promise.allSettled.',
  ],
  'Promise.race': [
    'Promise.race — это метод, который завершается результатом первого settled-промиса из набора (успех или ошибка).',
    'Чтобы ограничить ожидание по времени или взять самый быстрый из конкурирующих источников.',
    'Проигравшие промисы продолжают выполняться — отмена/AbortController нужна отдельно.',
  ],
  Promise: [
    'Promise — это объект, который представляет результат асинхронной операции: pending, fulfilled или rejected.',
    'Чтобы композировать асинхронные шаги без глубокой вложенности колбэков и с единым каналом ошибок.',
    'Необработанный reject легко «потерять»; цепочку нужно завершать catch или try/catch вокруг await.',
  ],
  filtering: [
    'Filtering — это сужение списка ресурсов через query-параметры по заранее разрешённым полям и операторам (whitelist).',
    'Чтобы клиент отфильтровывал выдачу без зоопарка отдельных эндпоинтов, а сервер безопасно строил WHERE только из allow-list.',
    'Свободный filter-DSL без whitelist открывает SQL injection и тяжёлые неиндексируемые запросы.',
  ],
  sorting: [
    'Sorting — это упорядочивание выдачи API по полям (и направлению) со стабильным tie-breaker, обычно по id.',
    'Чтобы страницы списка не «прыгали» при одинаковых значениях сортировки и совпадали с индексами в БД.',
    'Сортировка без уникального tie-breaker ломает pagination при вставках и равных ключах.',
  ],
  pagination: [
    'Pagination — это отдача выборки порциями: через offset/limit или через cursor/keyset.',
    'Чтобы не отдавать всю таблицу целиком и держать latency и память под контролем.',
    'Глубокий offset на больших таблицах дорожает; cursor обычно стабильнее при частых вставках.',
  ],
  closure: [
    'Closure (замыкание) — это функция, которая сохраняет доступ к переменным внешней области даже после выхода из неё.',
    'Чтобы прятать состояние и собирать фабрики/колбэки без глобальных переменных.',
    'В цикле с var все колбэки делят одну переменную; долгоживущее замыкание может удерживать лишнюю память.',
  ],
  closures: [
    'Closure (замыкание) — это функция, которая сохраняет доступ к переменным внешней области даже после выхода из неё.',
    'Чтобы прятать состояние и собирать фабрики/колбэки без глобальных переменных.',
    'В цикле с var все колбэки делят одну переменную; долгоживущее замыкание может удерживать лишнюю память.',
  ],
  this: [
    'this — это ссылка на объект-контекст вызова функции (кроме стрелочных, где this лексический).',
    'Чтобы методы объекта работали с его данными, а колбэки можно было явно привязать через bind/call/apply.',
    'Передача метода как колбэка без bind теряет this; у стрелок this нельзя перебиндить.',
  ],
  coercion: [
    'Coercion — это неявное приведение типов в JavaScript (к строке, числу или boolean) в операциях и сравнениях.',
    'Чтобы понимать, почему == и арифметика с разными типами дают неочевидный результат, и писать явные преобразования.',
    'Оператор == включает coercion и порождает сюрпризы; в прикладном коде обычно берут === и явный Number/String/Boolean.',
  ],
  equality: [
    'Сравнение на равенство в JS бывает через == (с coercion), === (без coercion) и Object.is (ещё строже к NaN и ±0).',
    'Чтобы выбирать семантику сравнения осознанно и не ловить баги на NaN, null/undefined и приведении типов.',
    'NaN === NaN даёт false, а Object.is(NaN, NaN) — true; для бизнес-логики почти всегда достаточно ===.',
  ],
  'error propagation': [
    'Error propagation — это путь ошибки от места сбоя до границы, где её обрабатывают (лог, ответ API, retry).',
    'Чтобы сбой не терялся молча и вызывающий код мог решить: повторить, отдать 5xx или показать доменную ошибку.',
    'Пустой catch/then без return/throw глотает сигнал; в async нужен единый mapper на границе HTTP.',
  ],
  'call stack': [
    'Call stack — это стек кадров синхронных вызовов функций, который JS выполняет прямо сейчас.',
    'Чтобы понимать порядок выполнения и почему долгий синхронный код блокирует остальное.',
    'Бесконечная рекурсия даёт stack overflow; тяжёлый CPU на стеке блокирует event loop.',
  ],
  'event loop': [
    'Event loop — это цикл, который забирает задачи из очередей (macrotasks/microtasks) и исполняет их, когда стек пуст.',
    'Чтобы объяснять порядок таймеров, промисов и I/O и не блокировать обработку новым синхронным кодом.',
    'Путают setTimeout(0) с microtask: Promise.then выполняется раньше таймера.',
  ],
  blocking: [
    'Blocking — это когда код занимает поток выполнения так долго, что другие задачи (запросы, таймеры, UI) ждут.',
    'Чтобы не класть sync fs, гигантский JSON.parse или тяжёлый CPU в горячий путь обработки запроса.',
    'В Node один занятый event-loop поток задерживает почти всё в процессе; CPU выносят в worker или очередь.',
  ],
  'non-blocking': [
    'Non-blocking I/O — это модель, где операция регистрируется и завершается позже через колбэк/промис, не удерживая поток на ожидании.',
    'Чтобы один поток обслуживал много соединений, пока ждёт сеть или диск.',
    'Non-blocking ≠ параллельный CPU: тяжёлый sync-код всё равно блокирует loop.',
  ],
  callbacks: [
    'Callback — это функция, которую передают другой функции, чтобы та вызвала её позже.',
    'Чтобы не зашивать действие внутрь функции, а передавать его снаружи.',
    'Глубокая вложенность и Node-style (err, data) легко превращаются в проглоченные ошибки; обычно поверх ставят Promise/async.',
  ],
  heap: ['Heap — динамическая память объектов.', 'Рост heap + GC pauses.', 'Снапшоты ищут retainers.'],
  stack: ['Stack — кадры вызовов и примитивы активации.', 'Stack overflow vs heap OOM — разные симптомы.', 'Хвост рекурсии в JS не оптимизируется гарантированно.'],
  'garbage collection': ['GC находит недостижимое и освобождает.', 'Паузы GC влияют на latency.', 'Избегайте короткоживущего alloc churn в hot path.'],
  'memory leaks': ['Утечки в Node: глобальные кэши, слушатели, uncleared timers.', 'clinic/heap snapshots.', 'Ограничивайте размер кэшей (LRU).'],
  intersections: ['A & B — значение удовлетворяет обоим типам.', 'Пересечение для объединения ограничений props.', 'never при несовместимых пересечениях.'],
  'type aliases': ['type — алиас любой формы типов.', 'Не мерджится, в отличие от interface.', 'Для union/tuple/mapped удобнее type.'],
  enums: ['enum (особенно numeric) спорный в TS.', 'Numeric enum добавляет runtime и reverse mapping.', 'Часто лучше union литералов.'],
  'function types': ['Типы функций: параметры контравариантны (strict), return ковариантен.', 'callable + construct signatures.', 'Предпочитайте явные typedef для колбэков публичного API.'],
  'optional properties': ['?: — свойство может отсутствовать (не всегда = undefined явно).', 'exactOptionalPropertyTypes меняет семантику.', 'Документируйте разницу absent vs undefined.'],
  readonly: ['readonly запрещает присвоение поля/массива на уровне типов.', 'Глубокий freeze — отдельно (Readonly<T> мелкий).', 'Помогает ловить мутации props/state.'],
  'generic functions': ['<T> на функции связывает вход/выход.', 'Infer из аргументов — DX.', 'Лишние параметры типов усложняют вызов.'],
  'generic classes': ['Класс с <T> параметризует поля/методы.', 'Variance полей влияет на подстановку.', 'Фабрики часто проще классов с generics.'],
  'conditional types': ['Условные типы ветвят по extends.', 'distributive behavior на union.', 'Тяжёлые типы замедляют tsc — мера.'],
  'mapped types': ['Mapped types строят новые объектные типы из ключей.', 'Шаблон для Partial/Pick-подобных.', 'key remapping — мощный инструмент.'],
  'template literal types': ['Шаблонные литеральные типы склеивают string unions.', 'API роутов/событий типизируют точно.', 'Не злоупотреблять — ошибки становятся «простынями».'],
  'runtime architecture': ['Node: один JS thread + libuv + пулы.', 'CPU-bound блокирует все запросы процесса.', 'Кластер/worker_threads для CPU; горизонталь для I/O.'],
  libuv: ['libuv — event loop и async I/O бэкенд Node.', 'Threadpool для части операций (fs, crypto, dns).', 'UV_THREADPOOL_SIZE иногда тюнят.'],
  process: ['process — env, argv, signals, exit codes.', 'Не глотайте необработанные rejections.', 'Graceful shutdown по SIGTERM.'],
  environment: ['Конфиг через env; секреты не в образ.', '12-factor: явный env.', 'Валидация env на старте (zod).'],
  signals: ['SIGTERM/SIGINT для graceful shutdown.', 'Kubernetes шлёт SIGTERM перед kill.', 'Закрывайте сервер и пул БД.'],
  fs: ['fs/promises для async файловых операций.', 'Sync fs в request path — зло.', 'Потоки для больших файлов.'],
  path: ['path.join/pathURL учитывают платформу.', 'Не клеить пути строками с слэшами вслепую.', 'path.normalize не заменяет security checks traversal.'],
  URL: ['URL/URLSearchParams — стандартный парсинг.', 'Не парсите regex’ом.', 'WHATWG URL в Node — тот же API, что в браузере.'],
  crypto: ['crypto для хешей/HMAC/random/JWT verify.', 'Math.random не для security.', 'timingSafeEqual для сравнения секретов.'],
  timers: ['setTimeout/setImmediate/setInterval в Node связаны с фазами loop.', 'unref таймеры, если не должны держать процесс.', 'Очистка обязательна.'],
  CommonJS: ['CJS: require/module.exports, синхронная загрузка.', 'Смешение с ESM — friction.', 'Двойные пакеты и exports map.'],
  ESM: ['ESM: import/export, async load, статический анализ.', 'require в ESM не работает без createRequire.', 'type:module и .mjs/.cjs нюансы.'],
  'package.json': ['Манифест пакета: deps, exports, scripts, engines.', 'exports защищает public API пакета.', 'private:true для приложений.'],
  'exports/imports': ['exports/imports conditional maps.', 'Неверный exports ломает deep import клиентов.', 'Тестируйте require и import потребителей.'],
  npm: ['npm install по lockfile; audit/ci.', 'phantom dependencies — риск.', 'workspaces для монорепо.'],
  readable: ['Readable stream — источник данных chunks.', 'paused vs flowing mode.', 'Ошибки и backpressure через pipe.'],
  writable: ['Writable — сток; cork/uncork, write false → drain.', 'Игнор backpressure = рост памяти.', 'end() vs destroy().'],
  duplex: ['Duplex — readable+writable (сокет).', 'Две стороны независимы по buffer.', 'net.Socket — пример.'],
  transform: ['Transform — duplex, где выход из входа (zlib).', 'objectMode для объектных стримов.', 'Ошибки трансформов надо прокидывать.'],
  'CPU-bound tasks': ['CPU-bound нельзя «async-ить» магией на одном потоке.', 'worker_threads/child_process/queue.', 'Батчинг и алгоритмы важнее микрооптимизаций.'],
  worker_threads: ['worker_threads делят память через SharedArrayBuffer/MessageChannel.', 'Тяжёлый CPU вне event loop.', 'Стартовый overhead — пул воркеров.'],
  child_process: ['child_process — отдельный OS процесс.', 'Изоляция сильнее threads; IPC тяжелее.', 'shell:true — риск injection.'],
  cluster: ['cluster форкает процессы на портах shared.', 'Нет shared memory JS-куч.', 'В k8s чаще несколько pod replicas, не cluster.'],
  cookies: ['Cookie: Set-Cookie, flags Secure/HttpOnly/SameSite.', 'Session vs token-in-cookie trade-offs.', 'CSRF при cookie-auth.'],
  'content types': ['Content-Type определяет парсинг тела.', 'Неверный тип → 415/тихие баги.', 'JSON vs multipart границы.'],
  caching: ['HTTP caching: Cache-Control, ETag, Vary.', 'персонализированный контент + public cache = утечки.', 'Валидация vs expiration модель.'],
  multiplexing: ['HTTP/2 multiplexing много потоков в одном TCP.', 'Head-of-line на TCP всё ещё возможен.', 'H/3/QUIC уходит от TCP HOL.'],
  streams: ['HTTP/2 streams — независимые потоки кадров.', 'Приоритеты и flow control.', 'Не путать с Node Stream API.'],
  QUIC: ['QUIC — UDP транспорт для HTTP/3.', 'Быстрее handshake, миграция соединения.', 'Операционные нюансы UDP/firewall.'],
  CRUD: ['CRUD — create/read/update/delete над ресурсами.', 'Не все действия — CRUD (команды/workflow).', 'Идемпотентность PUT/DELETE важна.'],
  versioning: ['Versioning API: URL/header/media type.', 'Параллельная поддержка N версий дорога.', 'Tolerate & deprecate политика.'],
  idempotency: ['Идемпотентность: повтор = тот же эффект.', 'Ключи идемпотентности для POST платежей.', 'at-least-once доставка требует идемпотентных handlers.'],
  'error format': ['Единый формат ошибок (type/title/status/detail).', 'Не светить stack клиенту.', 'Коды домена vs HTTP status.'],
  'rate limiting': ['Rate limit защищает от abuse и штормов.', 'Token bucket/leaky; где хранить — Redis.', 'Ответ 429 + Retry-After.'],
  'API contracts': ['Контракт: OpenAPI/JSON Schema + примеры.', 'Контракт-тесты ловят дрейф.', 'Breaking vs non-breaking изменения.'],
  scaling: ['WebSocket scale: sticky, pub-sub backplane (Redis).', 'Горизонталь без bus не шарит сообщения.', 'Fallback long-polling редко нужен явно.'],
  SELECT: ['SELECT проекция столбцов; избегайте SELECT * в проде.', 'Покрывающие индексы под SELECT list.', 'Только нужные поля снижают IO.'],
  WHERE: ['WHERE фильтрует строки до группировки.', 'SARGable предикаты (не wrapping колонки функцией).', 'Порядок условий не заменяет индексы.'],
  JOIN: ['JOIN связывает таблицы по ключам.', 'Неверный тип join размножает/теряет строки.', 'Индексы на join-ключах критичны.'],
  'GROUP BY': ['GROUP BY агрегирует; SELECT только группируемые/агрегаты.', 'В PG строгость зависит от настроек.', 'Частая ошибка — «лишние» колонки.'],
  HAVING: ['HAVING фильтрует уже агрегаты.', 'WHERE vs HAVING путают новички.', 'Иногда subquery читаемее.'],
  subqueries: ['Подзапросы в FROM/WHERE/SELECT.', 'Коррелированные могут быть медленными.', 'Часто переписывают в JOIN/CTE.'],
  CTE: ['CTE (WITH) — именованный подзапрос.', 'В PG иногда optimization fence (зависит от версии).', 'Читаемость vs план — проверить EXPLAIN.'],
  'window functions': ['Window: OVER (PARTITION BY … ORDER BY …).', 'ROW_NUMBER/RANK для пагинации/дедупа.', 'Не коллапсируют строки как GROUP BY.'],
  entities: ['Сущность — объект с идентичностью в модели данных.', 'Путать entity и table — нормально на старте, но не в DDD.', 'Ключи и жизненный цикл важны.'],
  relations: ['1:1, 1:N, N:M связи и FK.', 'Неверная кардинальность плодит дубли.', 'Связующие таблицы для N:M.'],
  'primary keys': ['PK уникально идентифицирует строку.', 'Natural vs surrogate (uuid/bigserial) trade-offs.', 'Менять PK больно — лучше стабильный surrogate.'],
  'foreign keys': ['FK обеспечивает referential integrity.', 'ON DELETE CASCADE опасен без понимания.', 'Индекс на FK часто нужен.'],
  normalization: ['Нормализация убирает аномалии обновления.', '3NF обычная цель OLTP.', 'Овернормализация усложняет read.'],
  denormalization: ['Денормализация ускоряет read ценой sync.', 'Нужны инварианты обновления.', 'Материализованные проекции/кэш как варианты.'],
  'B-tree': ['B-tree — основной индекс Postgres.', 'Хорош для equality/range.', 'Не идеален для JSON path/trigram — другие типы.'],
  'composite indexes': ['Составной индекс (a,b) и правило leftmost prefix.', 'Порядок колонок критичен.', 'Избыточные индексы замедляют write.'],
  'unique indexes': ['Unique гарантирует уникальность (и даёт индекс).', 'NULL семантика в unique — нюанс PG.', 'Частичные unique indexes полезны.'],
  'covering indexes': ['Index Only Scan, когда все нужные колонки в индексе.', 'INCLUDE в PG расширяет covering без ключа сортировки.', 'Платить местом на диске.'],
  selectivity: ['Селективность — доля строк по предикату.', 'Низкая селективность → seq scan может быть лучше.', 'Статистика ANALYZE влияет на выбор.'],
  'isolation levels': ['Read Committed/Repeatable Read/Serializable.', 'Аномалии: dirty/nonrepeatable/phantom.', 'Выше изоляция — больше конфликтов/latency.'],
  locks: ['Row/table locks; явные FOR UPDATE.', 'Долгие транзакции держат locks.', 'Порядок блокировок против deadlocks.'],
  deadlocks: ['Deadlock — цикл ожидания locks; СУБД убивает одну tx.', 'Повторяемый retry на deadlock.', 'Стабильный порядок захвата ресурсов.'],
  commit: ['COMMIT фиксирует изменения durably (с оговорками).', 'Работа после commit должна учитывать видимость другим.', 'Долгая tx до commit — зло.'],
  rollback: ['ROLLBACK откатывает незафиксированное.', 'Не все side-effects (внешние API) откатятся — нужен saga.', 'Savepoints для частичного отката.'],
  schema: ['Схема: таблицы, типы, ограничения.', 'Миграции назад/вперёд совместимы с деплоем.', 'Expand/contract паттерн.'],
  migrations: ['Миграции версионируют схему.', 'Локовые миграции на больших таблицах опасны.', 'Zero-downtime: добавить nullable → backfill → constrain.'],
  JSONB: ['JSONB — бинарный JSON с индексами GIN.', 'Удобно для гибких атрибутов; легко превратить в свалку.', 'Частые поля лучше колонок.'],
  arrays: ['Массивы PG — не замена связям.', 'Индексация и нормализация запросов специфичны.', 'Иногда проще junction table.'],
  extensions: ['Расширения: pgcrypto, uuid-ossp, pg_trgm…', 'В managed PG список ограничен.', 'Миграции должны создавать extension явно.'],
  EXPLAIN: ['EXPLAIN показывает план без выполнения.', 'Читайте nodes: Seq/Index/Nested Loop/Hash.', 'Сравнивайте гипотезы до оптимизации.'],
  'EXPLAIN ANALYZE': ['EXPLAIN ANALYZE выполняет запрос и пишет actual timings/rows.', 'Опасно на тяжёлых write-запросах в проде.', 'Расхождение estimate vs actual — сигнал статистики/параметров.'],
  'query plans': ['План — дерево операторов оптимизатора.', 'Параметры work_mem/enable_* влияют.', 'Не тюнить вслепую по «ощущениям».'],
  'sequential scan': ['Seq scan читает всю таблицу.', 'Нормален на маленьких/неселективных.', 'Проблема на больших таблицах с селективным WHERE без индекса.'],
  'index scan': ['Index scan/bitmap/index only — разные пути.', 'Lookup + heap fetch стоимость.', 'Корреляция порядка индекса и таблицы влияет.'],
  server: ['HTTP server слушает порт, принимает соединения.', 'Keep-alive, timeouts, max connections.', 'Graceful close при деплое.'],
  routes: ['Маршруты связывают method+path с handler.', 'Порядок регистрации и параметры path.', 'Валидация входа на границе.'],
  hooks: ['Хуки lifecycle (onRequest, preHandler…) в Fastify.', 'Порядок хуков критичен для auth.', 'Не тащите тяжёлую логику в слишком ранние хуки.'],
  decorators: ['Decorate добавляет поля к request/server.', 'Типизация декораторов в TS отдельная боль.', 'Избегайте скрытых глобальных зависимостей.'],
  serialization: ['Быстрая сериализация ответов (schemas Fastify).', 'Лишние поля → утечки данных.', 'Стабильный JSON контракт.'],
  modules: ['Nest modules группируют providers/controllers.', 'Circular imports — частая ловушка.', 'Тонкие модули по доменам.'],
  controllers: ['Controllers — HTTP-адаптеры, тонкие.', 'Бизнес-логика в services/use-cases.', 'Dtos на входе/выходе.'],
  providers: ['Providers/services — инъектируемые зависимости.', 'scopes (singleton/request) влияют на state.', 'Не храните request state в singleton без caution.'],
  'dependency injection': ['DI собирает граф зависимостей.', 'Упрощает тесты подменой.', 'Service locator антипаттерн vs constructor DI.'],
  guards: ['Guards решают доступ (authn/authz) до handler.', 'Должны быть быстрыми и явными.', 'Не путать с pipes валидации.'],
  pipes: ['Pipes трансформируют/валидируют вход.', 'class-validator + DTO.', 'Единый формат ошибок валидации.'],
  interceptors: ['Interceptors — AOP вокруг handler (кэш, map, timing).', 'Скрытая магия усложняет дебаг.', 'Прозрачность важнее «умности».'],
  filters: ['Exception filters мапят ошибки в HTTP.', 'Доменные ошибки ≠ 500 по умолчанию.', 'Логируйте с correlation id.'],
  controller: ['Controller слой принимает input и зовёт application service.', 'Толстые controllers — запах.', 'HTTP детали не протекают в domain.'],
  service: ['Application service оркестрирует use-case.', 'Транзакции часто здесь или в Unit of Work.', 'Не превращать в свалку helpers.'],
  repository: ['Repository скрывает персистентность за коллекционным API.', 'Утечка ORM-сущностей наружу ломает границы.', 'Запросы, специфичные к UI, иногда лучше query-сервис.'],
  DTO: ['DTO — данные через границу (не обязательно домен).', 'Отделяйте от entity, чтобы не overexpose.', 'Валидация на DTO.'],
  domain: ['Domain слой — бизнес-правила без фреймворка.', 'Анемичная модель vs rich model.', 'Инфраструктура зависит inward.'],
  Prisma: ['Prisma — type-safe ORM/client + migrations.', 'N+1 через include/select тюнинг.', 'Тяжёлые query лучше raw/SQL views.'],
  Drizzle: ['Drizzle — SQL-like schema/query builder ближе к SQL.', 'Контроль SQL выше, магии меньше.', 'Миграции и реляционные хелперы — знать.'],
  TypeORM: ['TypeORM — Active Record/Data Mapper гибрид.', 'Декораторы и сюрпризы lazy relations.', 'Аккуратно с synchronize в проде (выкл).'],
  'N+1 problem': ['N+1: 1 запрос списка + N запросов на связанные сущности.', 'Симптом: много одинаковых SELECT в логах.', 'Фикс: join/include, dataloader, денормализация.'],
  'connection pooling': ['Пул ограничивает число соединений к БД.', 'Pool exhaustion → таймауты API.', 'В serverless — внешний pooler (PgBouncer).'],
  'unit of work': ['Unit of Work копит изменения и коммитит атомарно.', 'Связан с транзакцией/ORM identity map.', 'Границы UoW = границы use-case.'],
  'dynamic queries': ['Динамический query builder по фильтрам.', 'Риск SQL injection при строковой склейке.', 'Whitelist колонок/операторов.'],
  aggregations: ['Агрегации: SUM/COUNT/GROUP BY.', 'Тяжёлые агрегаты — выносить в rollup/MV.', 'Индексы и precompute.'],
  sessions: ['Server session: id в cookie, данные на сервере.', 'Sticky/session store (Redis) для scale.', 'Инвалидация при logout/компрометации.'],
  'access tokens': ['Access token (часто JWT) короткоживущий для API.', 'Не класть чувствительные данные в payload.', 'Проверка aud/iss/exp/подписи.'],
  'refresh tokens': ['Refresh — длиннее, хранить надёжно, ротация.', 'Кража refresh = долгий доступ без детекта reuse.', 'Семейства токенов и revoke list.'],
  'password hashing': ['Хешировать пароли argon2/bcrypt, не MD5/SHA.', 'Уникальный salt; параметры стоимости.', 'Never encrypt passwords reversibly.'],
  roles: ['Роли группируют права.', 'Только роли без прав → роль-взрыв.', 'Роль ≠ атрибут статуса пользователя вслепую.'],
  permissions: ['Permission — атомарное действие на ресурс.', 'Проверка на сервере каждый раз.', 'UI-скрытие не security boundary.'],
  RBAC: ['RBAC: пользователи → роли → permissions.', 'Просто начать; сложно для тонких правил.', 'Дополняют resource ownership checks.'],
  ABAC: ['ABAC: решения по атрибутам user/resource/env.', 'Гибко, но сложнее аудитить.', 'Policy engine (OPA) иногда оправдан.'],
  'SQL injection': ['SQLi: вход попадает в SQL как код.', 'Параметризованные запросы/ORM обязательны.', 'Даже «внутренняя» админка уязвима.'],
  SSRF: ['SSRF: сервер запросами лезет во внутреннюю сеть по URL жертвы.', 'Whitelist схем/хостов; запрет metadata IP.', 'Опасно в webhook/preview-url фичах.'],
  'path traversal': ['../ в пути файла уходит вне директории.', 'Нормализация + root jail + запрет абсолютных.', 'Не склеивать user input с fs путём.'],
  secrets: ['Секреты в secret manager/env, не в git.', 'Ротация и least privilege.', 'Скан репозитория на утечки.'],
  encryption: ['Encryption at rest/in transit (TLS).', 'Ключи отдельно от данных; KMS.', 'Не писать свой crypto протокол.'],
  hashing: ['Хеш — односторонняя функция; для паролей — KDF.', 'HMAC для целостности.', 'Выбор алгоритма по threat model.'],
  'secure headers': ['Helmet: CSP, HSTS, X-Content-Type-Options…', 'Заголовки — слой защиты, не панацея.', 'HSTS только когда HTTPS стабилен.'],
  'input validation': ['Валидация/нормализация всех входов на границе.', 'Whitelist > blacklist.', 'Размер лимиты против DoS.'],
  'authorization code': ['OAuth code flow: code → token на бэке.', 'Нельзя implicit для новых приложений.', 'State/PKCE против CSRF/перехвата.'],
  PKCE: ['PKCE защищает public clients от code interception.', 'code_verifier/challenge обязателен для SPA/mobile.', 'Сейчас рекомендуют и confidential clients.'],
  scopes: ['Scopes ограничивают делегированные права токена.', 'Слишком широкие scopes = риск.', 'Минимально необходимые.'],
  'ID token': ['ID token (OIDC) про пользователя для клиента.', 'Не использовать вместо access для API без аудита дизайна.', 'Проверка подписи и nonce.'],
  'cache-aside': ['Cache-aside: app читает cache→miss→DB→fill.', 'Просто; риск stampede.', 'TTL + soft TTL/lock.'],
  TTL: ['TTL ограничивает жизнь кэша.', 'Короткий TTL↑ load DB; длинный↑ stale.', 'Инвалидация по событию точнее слепого TTL.'],
  invalidation: ['Инвалидация — самая сложная часть кэша.', 'Забыть invalidate = баги консистентности.', 'Версионирование ключей иногда проще точечных delete.'],
  'cache stampede': ['Stampede: много запросов одновременно miss → бьют DB.', 'Singleflight/lock, early refresh, stale-while-revalidate.', 'Особенно на горячих ключах.'],
  'cache warming': ['Warming прогревает кэш до пика.', 'Может прогреть не то и потратить бюджет.', 'Грейте по реальной популярности.'],
  strings: ['Redis STRING — значения/счётчики/биткарты.', 'SETNX для простых локов (осторожно).', 'Память и eviction policy.'],
  hashes: ['Redis HASH — поля объекта.', 'Удобно для частичных апдейтов профиля.', 'Большие hash vs много ключей trade-off.'],
  sets: ['Redis SET — уникальные члены.', 'Пересечения/разности для фич.', 'Большие set операции дорогие.'],
  'sorted sets': ['ZSET — score+member, лидерборды/очереди delay.', 'Диапазоны по score.', 'Память выше обычных set.'],
  'Pub/Sub': ['Pub/Sub: fire-and-forget fanout, без persistence.', 'Не для критичных событий (нужны Streams/Kafka).', 'Потеря при offline subscriber.'],
  Streams: ['Redis Streams — лог сообщений с consumer groups.', 'Персистнее Pub/Sub; свой offset.', 'Не замена Kafka на огромных объёмах, но силён.'],
  'distributed locks': ['Распределённый лок (Redlock спорен) для взаимного исключения.', 'TTL лока обязателен против dead lock.', 'Идемпотентность часто лучше лока.'],
  jobs: ['Фоновые jobs: вынести из request path.', 'Идемпотентность и ретраи обязательны.', 'Visibility timeout/ack семантика.'],
  retries: ['Ретраи с backoff+jitter на временных ошибках.', 'На non-idempotent опасно без ключей.', 'Ограничьте attempts → DLQ.'],
  delays: ['Delayed jobs через ETA/visibility.', 'Не крутить sleep в воркере.', 'Планировщик/queue native delay.'],
  'dead letter queue': ['DLQ для ядовитых сообщений после N попыток.', 'Нужен процесс разбора DLQ.', 'Метрики роста DLQ — алерт.'],
  concurrency: ['Параллелизм воркеров vs лимиты DB/API.', 'Prefetch слишком большой → шторм.', 'Per-queue concurrency тюнинг.'],
  RabbitMQ: ['Брокер очередей: exchanges/queues/bindings.', 'ack/nack/requeue семантика.', 'Потеря сообщений при неверной durability/ack.'],
  Kafka: ['Лог партиций, высокий throughput, replay.', 'Ordering внутри партиции.', 'Consumer group и offset commit аккуратность.'],
  producers: ['Producer пишет события; нужен ключ партиции.', 'at-least-once на продюсере → дубли.', 'Схемы (Avro/JSON Schema) эволюционируют.'],
  consumers: ['Consumer читает и обрабатывает идемпотентно.', 'Автокоммит offset маскирует баги.', 'Backpressure и slow consumer.'],
  partitions: ['Партиции — единица параллелизма Kafka.', 'Ключ → партиция; ребаланс групп.', 'Увеличивать партиции проще, чем уменьшать.'],
  'consumer groups': ['Группа делит партиции между членами.', 'Ребаланс стопорит обработку.', 'Статические membership иногда.'],
  ordering: ['Порядок гарантирован в рамках партиции/ключа.', 'Глобальный порядок масштабируется плохо.', 'Проектируйте ключи под нужный порядок.'],
  replay: ['Replay из лога для восстановления/новой проекции.', 'Компакция и retention ограничивают историю.', 'Идемпотентность на replay.'],
  'delivery semantics': ['at-most-once / at-least-once / exactly-once (ограниченно).', 'Exactly-once = комбо продюсер+лог+консьюмер/транзакции.', 'Практически часто at-least-once + идемпотентность.'],
  'delivery guarantees': ['Гарантии доставки определяются брокером и клиентом.', 'Дубли — норма в at-least-once.', 'Проектируйте эффект операции под дубли.'],
  events: ['Событие — факт прошлого в прошедшем времени.', 'Толстые vs тонкие события trade-off.', 'Схема и версия события.'],
  'monolith vs microservices': ['Монолит проще consistency; микро — независимый deploy ценой distributed pain.', 'Не сплить до product/org готовности.', 'Modular monolith как промежуточный шаг.'],
  'service boundaries': ['Границы по бизнес-capabilities/bounded context.', 'Сплит по техническим слоям — антипаттерн.', 'Чересчур мелкие сервисы = distributed monolith.'],
  granularity: ['Гранулярность сервиса влияет на chatty I/O и транзакции.', 'Начинайте крупнее, дробите по боли.', 'Метрика: независимые релизы и данные.'],
  'trade-offs': ['Любое решение распределёнки — компромисс.', 'Назовите стоимость операции (сеть, ops, latency).', 'Свяжите с NFR.'],
  REST: ['REST поверх HTTP с ресурсами.', 'Не путать с «JSON over POST /rpc».', 'Кэш и идемпотентность методов — сила.'],
  gRPC: ['gRPC: HTTP/2 + protobuf, стриминг.', 'Жёстче контракт; сложнее браузеру без gateway.', 'Дедлайны и статус-коды.'],
  'message-based': ['Асинхронные сообщения развязывают сервисы.', 'Eventual consistency и наблюдаемость сложнее.', 'Контракты событий + DLQ.'],
  'sync vs async': ['Sync проще UX/ошибки; async — устойчивость и масштаб.', 'Не делать async ради моды.', 'Таймауты на sync обязательны.'],
  aggregation: ['BFF/Gateway агрегирует несколько бэков для UI.', 'Chatty UI→много API лечится агрегацией.', 'Кэш и partial failure политики.'],
  auth: ['Auth на gateway: terminate TLS, проверить токен, прокинуть identity.', 'Gateway не единственная authz точка.', 'Сервис всё равно проверяет права на свои данные.'],
  BFF: ['BFF — backend for frontend под конкретный клиент.', 'Избегает overfetch и болтливых вызовов.', 'Не превратить BFF в новый монолит.'],
  choreography: ['Saga choreography: сервисы реагируют на события.', 'Меньше центра; сложнее увидеть процесс.', 'Нужен трейсинг саги.'],
  orchestration: ['Оркестратор явно ведёт шаги саги.', 'Проще понять поток; оркестратор — точка отказа/логики.', 'Компенсации явны.'],
  compensation: ['Компенсирующая операция отменяет эффект шага.', 'Не всегда обратная — «отмена» бизнесом.', 'Идемпотентные компенсации.'],
  '2PC vs saga': ['2PC блокирует и плохо масштабируется cross-service.', 'Saga — долгие бизнес-транзакции с компенсациями.', 'Выбирают saga для распределённых use-case.'],
  'eventual consistency': ['Данные сойдутся не сразу; UI/правила это учитывают.', 'Читать «свои записи» после записи — sticky/read-after-write трюки.', 'Идемпотентность и дедуп.'],
  'transactional outbox': ['Outbox: событие в той же TX, что и данные; реле публикует.', 'Лечит dual-write проблему.', 'Нужен poller/CDC и дедуп на consumer.'],
  'at-least-once': ['Доставка ≥1 раза ⇒ возможны дубли.', 'Consumer идемпотентен.', 'Дедуп-ключи/уникальные ограничения.'],
  'dedup keys': ['Ключ дедупа хранит факт обработки.', 'TTL/уникальный индекс.', 'Выбор ключа = бизнес-идемпотентность.'],
  'circuit breaker': ['Circuit breaker размыкает вызовы к больному депенденси.', 'Fail-fast + recovery half-open.', 'Fallback/деградация обязательны в дизайне.'],
  'retry with backoff': ['Backoff+jitter на transient errors.', 'Не ретраить 400 без смысла.', 'Бюджет ретраев и дедлайн.'],
  timeout: ['Timeouts на каждом hop.', 'Нет timeout = зависание тредпулов.', 'Дедлайныpropagated (context).'],
  bulkhead: ['Bulkhead изолирует ресурсы (пулы) по типам вызовов.', 'Один шторм не топит весь процесс.', 'Очереди/пулы per dependency.'],
  fallback: ['Fallback — запасной ответ при отказе.', 'Устаревший кэш лучше 500 иногда.', 'Явно маркируйте деградированный ответ.'],
  'command/query split': ['CQRS: раздельные модели записи/чтения.', 'Сложность оправдана разной нагрузкой/формой данных.', 'Не нужен «везде».'],
  projections: ['Проекции строят read-модель из событий.', 'Rebuild из event store.', 'Лаг проекции = eventual.'],
  'event store': ['Хранилище событий как источник истины.', 'Сложнее обычной CRUD БД.', 'Снапшоты для ускорения rehydrate.'],
  'read models': ['Read model оптимизирован под запросы UI.', 'Может быть денормализован.', 'Инвалидация/обновление из событий.'],
  'service registry': ['Реестр сервисов для discovery.', 'DNS/k8s Service часто достаточно.', 'Health и stale records.'],
  DNS: ['DNS discovery простое и привычное.', 'TTL и кэш клиентов.', 'Не мгновенный failover без health checks.'],
  'health checks': ['Liveness vs readiness разные.', 'Readiness ложный green пускает трафик рано.', 'Проверяйте зависимости осторожно (каскады).'],
  'config service': ['Централизованный конфиг с динамикой.', 'Секреты отдельно от обычного конфига.', 'Аудитируйте изменения.'],
  sidecar: ['Sidecar рядом с app (proxy, agent).', 'Service mesh так работает.', 'Ресурсы/latency overhead.'],
  Istio: ['Istio — service mesh на Envoy.', 'mTLS, traffic split, observability.', 'Операционная сложность высокая.'],
  Linkerd: ['Linkerd — более «лёгкий» mesh.', 'Те же идеи sidecar/mTLS.', 'Выбор mesh = ops зрелость.'],
  mTLS: ['mTLS — взаимная TLS-аутентификация сервисов.', 'Шифрование east-west.', 'Ротация сертификатов.'],
  'traffic policies': ['Retry/timeout/canary на уровне mesh/gateway.', 'Дубли политик в app и mesh путают.', 'Единый слой правил.'],
  'functional requirements': ['FR — что система делает.', 'Путать FR и реализацию («нужен Kafka»).', 'Критерии приёмки.'],
  'non-functional requirements': ['NFR: latency, availability, security, cost.', 'Без цифр NFR бесполезны.', 'Драйвят архитектуру сильнее фич.'],
  RPS: ['RPS — запросов в секунду; оцените пик и средний.', 'Считайте per endpoint.', 'Ошибка в порядке величины ломает дизайн.'],
  traffic: ['Модель трафика: read/write ratio, дневные пики.', 'Гео и мобильные сети.', 'Рост x10 — отдельный сценарий.'],
  bandwidth: ['Bandwidth — объём данных по сети.', 'Толстые payload и медиа упираются сюда.', 'CDN/compression.'],
  growth: ['Growth plan: как масштабировать через 12–24 мес.', 'Запас по партициям/шардам.', 'Скрытые лимиты managed сервисов.'],
  'vertical scaling': ['Вертикаль: больше CPU/RAM на инстанс.', 'Просто до потолка железа.', 'Single host risk.'],
  'horizontal scaling': ['Горизонталь: больше реплик.', 'Нужна statelessness или sticky/shared state.', 'Лицензии/лимиты БД часто bottleneck.'],
  'stateless services': ['Stateless app не хранит сессию локально.', 'Проще rolling deploy и scale-out.', 'State в DB/Redis/object storage.'],
  'load balancing': ['LB распределяет трафик (L4/L7).', 'Health checks и algorithm (RR, EWMA).', 'Таймауты и draining.'],
  consistency: ['Consistency модели: strong vs eventual.', 'Цена strong — latency/availability.', 'Выбор по домену (деньги vs лайки).'],
  availability: ['Availability % → бюджет даунтайма.', 'SPOF и dependency fan-out.', 'Multi-AZ минимум для серьёзных SLA.'],
  'partition tolerance': ['В CAP сеть может разделиться.', 'Реально выбирают между C и A при P.', 'Практика — компромиссы и таймауты.'],
  replication: ['Репликация: копии данных.', 'Async replica lag; sync — latency.', 'Failover и split-brain риски.'],
  'leader/follower': ['Лидер принимает записи, фолловеры читают/реплицируют.', 'Выборы лидера (Raft/ Pal).', 'Read-your-writes при лаге.'],
  CDN: ['CDN кэширует статику у края.', 'Неверный cache key/headers — утечки/промахи.', 'Purge/invalidations.'],
  'application cache': ['Кэш в app/Redis перед DB.', 'Локальный in-process не шарится между репликами.', 'Согласованность ключей.'],
  'database cache': ['Кэш планов/buffer pool СУБД vs внешний кэш.', 'Не путать уровни.', 'Тюнинг shared_buffers отдельно от Redis.'],
  partitioning: ['Партиционирование таблицы по ключу.', 'Упрощает purge старых данных.', 'Плохой ключ — hot partition.'],
  sharding: ['Шардирование данных по шардам.', 'Resharding дорог; выбирайте ключ осторожно.', 'Кросс-шард запросы боль.'],
  'read replicas': ['Реплики для read-scale.', 'Лаг → stale reads.', 'Миграции/DDL на primary.'],
  'graceful degradation': ['Деградация фич при отказе зависимостей.', 'Важнее «всё упало».', 'Явные fallback UX.'],
  timeouts: ['Таймауты + дедлайны на всех вызовах.', 'Цепочка без бюджета = каскад.', 'Отдельно connect vs read timeout.'],
  'circuit breakers': ['Размыкание цепей вызовов при деградации.', 'Общий паттерн resilience.', 'Метрики state open/half-open.'],
  'URL shortener': ['Короткий id → длинный URL; write/read path, 301/302.', 'Коллизии id, кастомные алиасы, аналитика кликов.', 'Кэш горячих ключей + durable store.'],
  chat: ['Чат: online presence, фанаут сообщений, история, порядок.', 'WebSocket + pub/sub; push offline.', 'Групповые чаты усложняют fanout.'],
  'notification service': ['Уведомления: email/push/sms, шаблоны, предпочтения.', 'Очереди, ретраи, dedup.', 'Quiet hours и unsubscribe — compliance.'],
  'file storage': ['Object storage (S3), presigned URL, вирус-скан.', 'Метаданные в БД, байты в object store.', 'Multipart и CDN.'],
  'news feed': ['Лента: fan-out on write/read, ранжирование.', 'Тяжёлый celebrity problem.', 'Кэш таймлайнов.'],
  'payment service': ['Платежи: идемпотентность, ledger, PCI границы.', 'Точная арифметика денег, статусы, вебхуки PSP.', 'Аудит и reconcile.'],
  compute: ['Compute: VM/containers/functions.', 'Холодные старты и лимиты serverless.', 'Right-sizing CPU/RAM.'],
  networking: ['VPC, subnet, security groups, LB.', 'Публичные vs private endpoints.', 'Egress контроль.'],
  IAM: ['IAM: роли, политики least privilege.', 'Долгоживущие ключи — риск.', 'Аудит доступа.'],
  EC2: ['EC2 — VM в AWS.', 'ASG + LB типичный паттерн.', 'IMDSv2 и роли инстанса.'],
  S3: ['S3 — object storage.', 'Классы хранения и lifecycle.', 'Публичные bucket — классическая утечка.'],
  RDS: ['Managed SQL; бэкапы, multi-AZ.', 'Не превратить в SPOF без реплик.', 'Параметры и maintenance windows.'],
  ElastiCache: ['Managed Redis/Memcached.', 'Eviction и failover behavior знать.', 'Не хранить единственную критичную истину без persistence стратегии.'],
  SQS: ['SQS — очередь AWS; standard vs FIFO.', 'Visibility timeout и DLQ.', 'at-least-once.'],
  CloudWatch: ['Метрики/логи/алерты AWS.', 'Cardinality и cost логов.', 'Алерты на SLI, не на «всё подряд».'],
  'GitHub Actions': ['CI в GitHub: workflows, runners, secrets.', 'Supply chain: pin actions, least privilege tokens.', 'Матрицы и кэш.'],
  build: ['Сборка артефакта должна быть воспроизводимой.', 'Версии toolchain фиксируйте.', 'Артефакты в registry.'],
  test: ['Тесты в CI gate для merge/deploy.', 'Шумные тесты → люди обходят gate.', 'Параллель и шардирование сюит.'],
  rollback: ['Откат релиза быстрее «фиксим вперёд» иногда.', 'Миграции БД усложняют rollback.', 'Canary уменьшает радиус поражения.'],
  pods: ['Pod — минимальная единица k8s, 1+ контейнеров.', 'Эпhemeral; state во volumes.', 'Один процесс в контейнере предпочтителен.'],
  deployments: ['Deployment управляет ReplicaSet и rolling update.', 'maxUnavailable/maxSurge.', 'Пробы влияют на rollout.'],
  services: ['Service — стабильный VIP/DNS к подам.', 'ClusterIP/NodePort/LoadBalancer.', 'Голова/ready endpoints.'],
  ingress: ['Ingress — L7 вход (TLS, path/host routing).', 'Аннотации контроллера специфичны.', 'Сертификаты и WAF рядом.'],
  'ConfigMap/Secret': ['Конфиг и секреты в k8s объектах.', 'Секреты base64 ≠ шифрование; нужен KMS/sealed.', 'Обновление не всегда автоматически в процессе.'],
  probes: ['liveness/readiness/startup probes.', 'Liveness на тяжёлую зависимость = рестарт-шторм.', 'Разделяйте смыслы проб.'],
  autoscaling: ['HPA по CPU/custom metrics.', 'Правильные метрики важнее «автоскейла ради»', 'Cold start и scale-to-zero нюансы.'],
  'rolling update': ['Постепенная замена подов новой версией.', 'Совместимость API/схемы на время двух версий.', 'Readiness мешает слать трафик неготовым.'],
  'resource limits': ['requests/limits CPU/RAM.', 'Throttle CPU vs OOMKill RAM.', 'Завышенные requests = низкая утилизация кластера.'],
  HPA: ['Horizontal Pod Autoscaler.', 'Метрики стабилизируют флаппинг.', 'Сочетать с PDB.'],
  'logs & debug': ['kubectl logs/exec/port-forward для дебага.', 'Эфемерные контейнеры/debug profiles.', 'Не дебажить только в проде без политики.'],
  Helm: ['Helm — пакеты чартов k8s.', 'values и hooks; сложность шаблонов.', 'Версионирование чартов/релизов.'],
  Terraform: ['IaC декларативно; plan/apply.', 'State — критичный артефакт (lock в remote).', 'Модули и blast radius.'],
  state: ['Terraform state хранит mapping ресурсов.', 'Потеря state опасна.', 'Разделяйте state по окружениям.'],
  // continue common overlaps
  origin: ['Origin = scheme+host+port; база для CORS.', 'localhost≠127.0.0.1 для браузера.', 'Credentials требуют точный Allow-Origin.'],
  claims: ['JWT claims: registered (iss,sub,aud,exp) + custom.', 'Не доверять unverified payload.', 'Минимальный набор claims.'],
  'prototype chain': [
    'Prototype chain — это цепочка [[Prototype]], по которой JS ищет свойства, если их нет на самом объекте.',
    'Чтобы переиспользовать поведение между экземплярами без копирования методов в каждый объект.',
    'Путают obj.__proto__ и Function.prototype; Object.create(null) даёт объект без прототипа.',
  ],
  prototypes: [
    'Прототипы — это модель делегирования поведения в JavaScript через цепочку [[Prototype]].',
    'Чтобы разделять методы между экземплярами и понимать class/new как сахар над этой моделью.',
    'Мутация F.prototype влияет на все инстансы; глубокие цепочки усложняют рассуждение.',
  ],
  'then/catch': [
    'then/catch — это методы промиса для обработки успеха и ошибки и для построения цепочки асинхронных шагов.',
    'Чтобы последовательно обрабатывать async-результат и централизовать ошибки в конце цепочки.',
    'В then легко забыть return; ошибка без catch становится unhandled rejection.',
  ],
  Promise: [
    'Promise — это объект, который представляет результат асинхронной операции: pending, fulfilled или rejected.',
    'Чтобы композировать асинхронные шаги без глубокой вложенности колбэков и с единым каналом ошибок.',
    'Необработанный reject легко «потерять»; цепочку нужно завершать catch или try/catch вокруг await.',
  ],
  'async/await': [
    'async/await — это синтаксис над промисами: await приостанавливает async-функцию до результата, не блокируя поток.',
    'Чтобы писать асинхронный код линейно и ловить ошибки через try/catch.',
    'Несколько await подряд дают водопад; для параллели нужен Promise.all (или старт промисов до await).',
  ],
  microtasks: [
    'Microtasks — это очередь задач (Promise.then, queueMicrotask), которая полностью опустошается перед следующей macrotask.',
    'Чтобы понимать, почему Promise.then выполняется раньше setTimeout(0), и не устраивать starvation macrotasks.',
    'Бесконечное постановление новых microtasks блокирует таймеры, I/O и render.',
  ],
  macrotasks: [
    'Macrotasks (tasks) — это задачи «крупного» цикла: таймеры, I/O, UI-события; между ними успевают microtasks и (в браузере) render.',
    'Чтобы объяснять отложенное выполнение и не ждать, что setTimeout(0) сделает тяжёлую работу «незаметно».',
    'Тяжёлая macrotask всё равно блокирует поток на время своего синхронного тела.',
  ],
  backpressure: [
    'Backpressure — это сигнал «замедли производителя», когда потребитель не успевает обрабатывать данные.',
    'Чтобы стримы и пайплайны не раздували буферы и RAM при разной скорости сторон.',
    'Игнор write===false / отсутствие pause в flowing mode приводит к росту памяти.',
  ],
  'status codes': [
    'HTTP status codes — это трёхзначные коды ответа, которые сообщают класс результата: успех, редирект, ошибка клиента или сервера.',
    'Чтобы клиент, кэш и мониторинг одинаково понимали исход запроса без парсинга тела.',
    'Маскировать всё под 200 ломает клиентов и алерты; путают 401 и 403.',
  ],
  ACID: [
    'ACID — это набор гарантий транзакции: Atomicity, Consistency, Isolation, Durability.',
    'Чтобы несколько изменений в БД применялись как одно целое и переживали сбои после commit.',
    'Длинные транзакции и слишком высокая изоляция увеличивают блокировки и конфликты.',
  ],
  JWT: [
    'JWT — это подписанный токен с claims (header.payload.signature), который сервер может проверить без хранения сессии.',
    'Чтобы передавать факт аутентификации между сервисами/запросами без обязательного session store на каждый hit.',
    'Отзыв до exp сложнее, чем у server-side session; нужен короткий TTL и стратегия refresh/denylist.',
  ],
  XSS: [
    'XSS — это внедрение чужого скрипта в страницу жертвы, где он выполняется в контексте вашего сайта.',
    'Чтобы понимать, почему нельзя вставлять пользовательский HTML/JS без экранирования и CSP.',
    'Stored/Reflected/DOM XSS; HttpOnly cookie не лечит XSS полностью.',
  ],
  CSRF: [
    'CSRF — это атака, когда браузер жертвы сам отправляет запрос на ваш сайт с cookies, хотя пользователь открыл другой сайт.',
    'Чтобы защищать cookie-based сессии токеном, SameSite и проверкой Origin на mutate-запросах.',
    'CORS не заменяет CSRF-защиту; XSS может обойти CSRF-токен.',
  ],
  CORS: [
    'CORS — это браузерный механизм, который решает, может ли JS страницы origin A читать ответ с origin B.',
    'Чтобы безопасно открывать API фронту на другом origin через явные Allow-* заголовки.',
    'Allow-Origin: * нельзя с credentials; CORS не защищает сервер от curl и не отменяет CSRF.',
  ],
  'idempotency key': [
    'Idempotency key — это клиентский ключ повтора, по которому сервер выполняет побочный эффект один раз и на повтор отдаёт тот же результат.',
    'Чтобы ретраи сети/клиента не создавали двойные платежи и дубли сущностей на POST.',
    'Нужны атомарное хранение ключа, TTL и одинаковый ответ (или конфликт) на повтор.',
  ],
  useEffect: [
    'useEffect — это хук для синхронизации компонента с внешним миром: подписки, таймеры, императивный DOM.',
    'Чтобы запускать побочные эффекты после commit, а не во время render, и снимать их через cleanup.',
    'Неверные deps и отсутствие cleanup дают циклы запросов и утечки; не заменяйте им вычисления во время render.',
  ],
}

function factFor(label) {
  const k = label.toLowerCase()
  if (FACTS[k]) return FACTS[k]
  if (FACTS[label]) return FACTS[label]
  for (const [key, val] of Object.entries(FACTS)) {
    if (key.toLowerCase() === k) return val
  }
  return null
}

function areaFlavor(area) {
  const map = {
    js: 'Упор на event loop, this, coercion и практические ловушки runtime.',
    ts: 'Упор на систему типов, inference и дизайн публичного API.',
    react: 'Упор на ререндеры, ключи, эффекты и Strict Mode.',
    css: 'Упор на каскад, layout и доступность.',
    http: 'Упор на семантику метода/статуса/заголовков и кэш.',
    security: 'Кратко держите threat model: кто атакующий и что получает.',
    auth: 'Связка login → хранение секрета → refresh/logout и XSS/CSRF риски.',
    db: 'Где уместно — Postgres, планы EXPLAIN и индексы.',
    node: 'Событийный цикл Node, backpressure и блокировки потока.',
    cache: 'Инвалидация, TTL и stampede — частые темы.',
    messaging: 'Delivery guarantees, порядок и идемпотентность consumer’а.',
    microservices: 'Сеть, частичные сбои и eventual consistency.',
    'system-design': 'Цифры, bottleneck и явные trade-offs.',
    devops: 'Операции, rollback и безопасность поставки.',
    testing: 'Границы unit/integration/e2e и борьба с flaky.',
    observability: 'Сигнал → алерт → кого пейджить; correlation.',
    architecture: 'Границы модулей и направление зависимостей.',
    backend: 'Слои приложения, DI и границы транзакций.',
    frontend: 'UX, bundle и архитектурные границы UI.',
    tooling: 'DX и ловля ошибок до прода.',
    git: 'Безопасная история и командный workflow.',
  }
  return map[area] || 'Связывайте ответ с требованиями и ограничениями.'
}

function escapeYaml(s) {
  if (s == null) return '""'
  if (/[:#"'\n{|}\[\]]/.test(s) || s.trim() !== s) return JSON.stringify(s)
  return s
}

/** FACTS triple: [definition, why, pitfall]. Legacy rows were [def, pitfall, tip]. */
function normalizeFact(label, triple) {
  const [a, b, c] = triple.map((x) => stripMd(x))
  // \\b is unreliable with Cyrillic — match "Чтобы " / "Чтобы…" explicitly
  if (/^Чтобы(?:\s|$)/i.test(b)) {
    return [ensureDefinition(label, a), ensureSentence(b), ensureSentence(c)]
  }
  return [ensureDefinition(label, a), purposeFromLegacy(label, c), ensureSentence(b)]
}

function ensureSentence(s) {
  if (!s) return s
  return s.endsWith('.') ? s : `${s}.`
}

function ensureDefinition(label, def) {
  const main = def.split(';')[0].trim()
  // Avoid "— это это …" (Cyrillic + \\b is unreliable without /u)
  if (/—\s*это(?:\s|$|[.,:;])/i.test(main)) return ensureSentence(main)
  if (/—/.test(main)) {
    const parts = main.split('—')
    const right = (parts.slice(1).join('—') || '').trim()
    if (/^это(?:\s|$|[.,:;])/i.test(right)) return ensureSentence(main)
    return ensureSentence(main.replace(/—\s*/, '— это '))
  }

  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const labelRe = new RegExp(`^${escaped}\\s*`, 'i')
  if (labelRe.test(main)) {
    const rest = main.replace(labelRe, '').trim()
    if (!rest) return ensureSentence(`${label} — это понятие, которое стоит уметь объяснить своими словами`)
    if (/^(это|метод|функция|паттерн|механизм|тип|заголовок|уровень)\b/i.test(rest)) {
      return ensureSentence(`${label} — ${rest}`)
    }
    return ensureSentence(`${label} — это ${rest.charAt(0).toLowerCase()}${rest.slice(1)}`)
  }
  return ensureSentence(`${label} — это ${main.charAt(0).toLowerCase()}${main.slice(1)}`)
}

function purposeFromLegacy(label, tip) {
  if (/^Чтобы(?:\s|$)/i.test(tip)) return ensureSentence(tip)
  // Do not promote “what replaces it” tips into the purpose line
  return `Чтобы явно выразить и переиспользовать поведение, связанное с «${label}», а не держать его зашитым в одном месте.`
}

function stripMd(s) {
  return String(s || '')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** FACTS triple: [definition, why, pitfall] */
function buildArticle(meta) {
  const { label, topicTitle } = meta
  const curated = factFor(label)
  const [defRaw, whyRaw, pitRaw] = curated
    ? normalizeFact(label, curated)
    : [
        `${label} — это понятие из блока «${topicTitle}», которое стоит уметь объяснить своими словами.`,
        `Чтобы решать задачи блока «${topicTitle}» явно и предсказуемо, а не обходными костылями.`,
        `Частая ошибка — применять ${label} «по привычке», не понимая границ и failure modes.`,
      ]

  const definition = stripMd(defRaw)
  const why = stripMd(whyRaw)
  const pitfall = stripMd(pitRaw)

  const whyBlock = why.startsWith('Чтобы') || why.startsWith('Нужен') || why.startsWith('Позволяет')
    ? why
    : `Чтобы ${why.charAt(0).toLowerCase()}${why.slice(1)}`

  return `---
title: ${escapeYaml(label)}
summary: ${escapeYaml(definition)}
---

## Для чего

${whyBlock}

## Пример

Краткий сценарий использования «${label}» в контексте «${topicTitle}».

## Примечание

${pitfall ? ensureSentence(pitfall) : 'Нюанс зависит от контекста использования — уточняйте на практике.'}
`
}

function areaDocs(area) {
  const links = {
    js: 'MDN: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).',
    ts: 'Документация: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).',
    react: 'Документация: [react.dev](https://react.dev/).',
    http: 'MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).',
    db: 'Документация: [PostgreSQL](https://www.postgresql.org/docs/current/).',
    node: 'Документация: [Node.js](https://nodejs.org/docs/latest/api/).',
    security: 'Ориентир: [OWASP Top 10](https://owasp.org/www-project-top-ten/).',
    auth: 'Ориентир: [OWASP Auth Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).',
    css: 'MDN: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).',
  }
  return links[area] || ''
}

function buildQA(label, kind, area, topicTitle, def, why, pitfall) {
  const L = label
  return [
    [`Что такое ${L} простыми словами?`, def],
    [`Зачем в коде нужен ${L}?`, why],
    [
      `Какие ошибки и ограничения связаны с ${L}?`,
      `${pitfall} Имеет смысл сравнить с ближайшей альтернативой и понять, когда механизм избыточен.`,
    ],
  ]
}

function listRoadmapFiles() {
  return fs
    .readdirSync(roadmapsDir)
    .filter((f) => f.endsWith('.json') && f !== 'manifest.json')
}

function walkExistingArticles(dir = contentDir, base = '') {
  if (!fs.existsSync(dir)) return new Set()
  const out = new Set()
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name
    if (entry.isDirectory()) {
      for (const x of walkExistingArticles(path.join(dir, entry.name), rel)) out.add(x)
    } else if (entry.name.endsWith('.md')) {
      out.add(rel.replace(/\.md$/, '').replace(/\\/g, '/'))
    }
  }
  return out
}

function isStubArticle(filePath) {
  if (!fs.existsSync(filePath)) return false
  const text = fs.readFileSync(filePath, 'utf8')
  if (STUB_MARKERS.some((m) => text.includes(m))) return true
  // "**filtering**: Filtering — …" leftover from older generator
  if (/\*\*([^*]+)\*\*: \1\s*[—–-]/.test(text)) return true
  return false
}

// Pass 1: seed maps from existing refs, then aliases win
const labelRef = new Map()
const refOwner = new Map()

for (const file of listRoadmapFiles()) {
  const data = JSON.parse(fs.readFileSync(path.join(roadmapsDir, file), 'utf8'))
  for (const level of data.levels) {
    for (const topic of level.topics) {
      for (const raw of topic.items) {
        if (typeof raw === 'object' && raw.ref && raw.label) {
          const key = raw.label.toLowerCase()
          labelRef.set(key, raw.ref)
          refOwner.set(raw.ref, key)
        }
      }
    }
  }
}

for (const [k, ref] of ALIASES) {
  labelRef.set(k, ref)
  refOwner.set(ref, k)
}

function allocateRef(label, topicId, file) {
  const key = label.toLowerCase()
  if (labelRef.has(key)) return labelRef.get(key)

  const area = areaFor(topicId, file, label)
  let slug = slugify(label)
  let ref = `${area}/${slug}`
  let n = 2
  while (refOwner.has(ref) && refOwner.get(ref) !== key) {
    const suffix = topicId.replace(/^topic-/, '').slice(0, 12)
    ref = `${area}/${slug}-${suffix || n++}`
    if (refOwner.has(ref) && refOwner.get(ref) !== key) {
      ref = `${area}/${slug}-${n++}`
    } else break
  }
  labelRef.set(key, ref)
  refOwner.set(ref, key)
  return ref
}

const allMeta = []
for (const file of listRoadmapFiles()) {
  const data = JSON.parse(fs.readFileSync(path.join(roadmapsDir, file), 'utf8'))
  for (const level of data.levels) {
    for (const topic of level.topics) {
      for (const raw of topic.items) {
        const label = typeof raw === 'string' ? raw : raw.label
        const ref =
          typeof raw === 'object' && raw.ref
            ? raw.ref
            : allocateRef(label, topic.id, file)
        labelRef.set(label.toLowerCase(), ref)
        if (!refOwner.has(ref)) refOwner.set(ref, label.toLowerCase())
        allMeta.push({
          file,
          label,
          ref,
          topicId: topic.id,
          topicTitle: topic.title,
          topicDescription: topic.description || '',
          priority: topic.priority,
          area: ref.split('/')[0],
        })
      }
    }
  }
}

let itemsUpdated = 0
for (const file of listRoadmapFiles()) {
  const full = path.join(roadmapsDir, file)
  const data = JSON.parse(fs.readFileSync(full, 'utf8'))
  for (const level of data.levels) {
    for (const topic of level.topics) {
      topic.items = topic.items.map((raw) => {
        // Keep explicit refs — same label can mean different articles in different topics
        // (e.g. constraints in TS vs PostgreSQL vs system design).
        if (typeof raw === 'object' && raw.ref && raw.label) {
          return { label: raw.label, ref: raw.ref }
        }
        const label = typeof raw === 'string' ? raw : raw.label
        const ref = allocateRef(label, topic.id, file)
        itemsUpdated++
        return { label, ref }
      })
    }
  }
  fs.writeFileSync(full, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

const existing = walkExistingArticles()
const unique = new Map()
for (const m of allMeta) {
  if (!unique.has(m.ref)) unique.set(m.ref, m)
}

let created = 0
let regenerated = 0
let skipped = 0
for (const [ref, meta] of unique) {
  const filePath = path.join(contentDir, ...`${ref}.md`.split('/'))
  const exists = existing.has(ref) || fs.existsSync(filePath)
  if (exists && !isStubArticle(filePath)) {
    skipped++
    continue
  }
  const wasStub = exists && isStubArticle(filePath)
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, buildArticle(meta), 'utf8')
  if (wasStub) regenerated++
  else created++
}

for (const name of ['_article-plan.json', '_topics-dump.json', '_meta.json']) {
  const p = path.join(root, 'scripts', name)
  if (fs.existsSync(p)) fs.unlinkSync(p)
}

console.log(`unique refs: ${unique.size}`)
console.log(`items updated (ref changes): ${itemsUpdated}`)
console.log(`articles created: ${created}`)
console.log(`articles regenerated from stubs: ${regenerated}`)
console.log(`articles skipped (existing non-stub): ${skipped}`)
