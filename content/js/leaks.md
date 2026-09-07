---
title: Leaks
summary: Memory leak на фронте — рост памяти из-за забытых ссылок: слушатели, таймеры, кэши, detached DOM.
---

## Для чего

Чтобы длинные SPA-сессии не деградировали и вкладка не умирала.

## Пример

Подписались в `useEffect` без cleanup; положили данные в глобальный Map; оставили `setInterval`.

## Примечание

Ищите в Performance/Memory heap snapshots. Detached nodes — частый DOM-leak.
