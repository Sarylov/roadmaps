---
name: roadmap-article
description: >-
  Writes interview roadmap cheat-sheet articles under content/**/*.md and wires
  item refs in public/roadmaps/*.json. Use when creating or updating roadmap
  articles, content/*.md, or when rewriting a roadmap level step by step.
---

# Roadmap articles

## Workflow

1. Prefer CORE/KILLER items; keep stable `ref` = `area/slug`.
2. Rewrite **one roadmap level at a time** when the user asks — never bulk-rewrite all levels in one go.
3. Create/update `content/{ref}.md` with the template below.
4. Wire `{ "label", "ref" }` in roadmap JSON; reuse shared refs across FE/BE when the topic is the same.
5. `npm run content:status` — 0 missing / 0 orphans.
6. Do **not** rely on `content:fill` for final quality; fill stubs are drafts only.

## File template

```markdown
---
title: Short topic name
summary: Idempotency — повторный одинаковый HTTP-запрос приводит к тому же результату на сервере, что и один запрос.
---

## Для чего

Чтобы безопасно повторять запросы при retry, сетевых сбоях или таймаутах, не создавая побочный эффект несколько раз.

## Пример

PUT /users/123 — отправили 3 раза → у пользователя одно и то же состояние.

DELETE /users/123 — повторный DELETE не удаляет «ещё раз».

## Примечание

GET, PUT, DELETE — по HTTP идемпотентны. POST — по умолчанию нет.

Ключевая мысль: retry безопасен → повторение не должно дополнительно менять состояние сервера.

## Вопросы и ответы

### Чем idempotency отличается от safety?

Safety — без побочных эффектов (GET). Idempotency — повтор даёт тот же эффект, что один вызов (PUT/DELETE могут менять состояние, но повтор безопасно).

### Зачем это на собесе и в проде?

Чтобы объяснить, почему retry очередей/клиента не плодит дубликаты заказов и как проектировать API под повторную доставку.
```

`summary` = **определение** (показывается в UI как вступление). Отдельного `## Определение` в markdown **нет**.

`## Примечание` — опционально (только если нюанс реально важен).

## Вопросы и ответы (обязательно для уровня 0)

Для **всех тем уровня 0** любого roadmap секция `## Вопросы и ответы` **обязательна**.

- Только `###` вопрос + ответ (без списка «Что спрашивают»).
- 2–4 типичных вопроса собеса по теме.
- Ответы короткие, как на собесе: можно произнести вслух.
- При переписывании уровня 0 **не удалять** Q&A: обновить под новый текст статьи.
- Для уровней выше 0 — желательно для CORE/KILLER, не блокер.

Парсер UI: `## Вопросы и ответы` или `## Ответы` → сворачиваемый блок в модалке.

## Эталон формулировок (обязательно)

Краткая подсказка для технического собеседования:

1. **Определение** → поле `summary` — простыми точными словами  
2. **Для чего** → `## Для чего` — какую проблему решает  
3. **Пример** → `## Пример` — минимальный практический пример  
4. **Примечание** → `## Примечание` — только важный нюанс, если есть  
5. **Вопросы и ответы** → `## Вопросы и ответы` — обязательно на уровне 0  

**Стиль:** коротко, по делу, без воды, легко запомнить и произнести вслух.

### Good vs bad

BAD summary: `Callback — функция продолжения; ад вложенности.`  
GOOD summary: `Callback — это функция, которую передают другой функции, чтобы та вызвала её позже.`

BAD purpose: `Нужен, чтобы промисы/async обычно читаемее. Иначе на практике…`  
GOOD purpose: `Чтобы не зашивать действие внутрь функции, а передавать его снаружи.`

BAD Q&A: шаблон «объясните X из блока Y» без сути.  
GOOD Q&A: конкретный вопрос собеса + ответ в 1–3 предложениях по теме статьи.

### Hard rules

- Never write `## Определение` — definition lives only in `summary`.
- Level 0 articles **must** keep `## Вопросы и ответы` with real interview Q&A.
- No “важно на собесе”, “база CORE”, “KILLER-вопрос”, telegram `;`-lists.
- No textbook padding, emoji, fake video IDs.
- Russian prose; English terms where natural (`Promise`, `PUT`, `retry`).
- Prefer spoken interview length: a few sentences per section, not pages.

## Gold content example (HTTP Idempotency)

1. **summary:** Idempotency — повторный одинаковый HTTP-запрос приводит к тому же результату на сервере, что и один запрос.  
2. **Для чего:** Чтобы безопасно повторять запросы при retry / сбоях / таймаутах, не создавая побочный эффект несколько раз.  
3. **Пример:** `PUT`/`DELETE` можно повторять без доп. эффекта.  
4. **Примечание:** GET/PUT/DELETE идемпотентны по HTTP; POST — нет.  
5. **Q&A:** чем отличается от safety; зачем retry без дубликатов.
