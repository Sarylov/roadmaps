---
title: Store
summary: Store — централизованное клиентское состояние (Redux, Zustand): один (или модульный) контейнер вне дерева компонентов.
---

## Для чего

Чтобы делить сложный client state между далёкими частями дерева без бесконечного props drilling.

## Пример

Zustand: `useCart(s => s.items)`. Redux Toolkit slice + `useSelector`. Подписка только на нужный кусок — меньше ререндеров.

## Примечание

Не складывайте туда ответы API без стратегии (часто лучше React Query). Keep store thin.
