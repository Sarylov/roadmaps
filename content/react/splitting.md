---
title: Code splitting в React
summary: Code splitting делит JavaScript на chunks и загружает код маршрута или функции только перед использованием, уменьшая initial bundle.
---

## Зачем нужно

Меньше стартового JavaScript сокращает download, parse и execution, особенно на слабых устройствах. Слишком мелкие chunks создают network waterfall.

## Как работает

Статический `import()` задаёт bundler split point. `React.lazy` превращает Promise модуля с default component в отложенный компонент, а `Suspense` показывает fallback. Route-level splitting обычно даёт крупные устойчивые границы.

Chunk нужно предзагружать по вероятному намерению: hover, viewport или router prefetch. Ошибка загрузки после deploy требует Error Boundary и стратегии retry/reload. Общие зависимости bundler может вынести в shared chunk; результат проверяют bundle analyzer и network trace.

## Что спрашивают

- Где лучше ставить split points?
- Чем preload отличается от prefetch?
- Как обработать ошибку загрузки chunk?

## Ответы

### Где лучше ставить split points?

На маршрутах и тяжёлых редко используемых функциях: редакторе, графике, modal workflow. Разделение каждого малого компонента увеличивает запросы и fallback-мигание.

### Чем preload отличается от prefetch?

Preload сообщает, что ресурс нужен текущей навигации с высоким приоритетом. Prefetch — низкоприоритетная загрузка вероятного будущего ресурса; точное поведение зависит от браузера и фреймворка.

### Как обработать ошибку загрузки chunk?

Поймать её Error Boundary, предложить retry или reload и логировать версию asset. При несовместимости старого HTML с новым deploy кеширование должно сохранять доступность versioned chunks.
