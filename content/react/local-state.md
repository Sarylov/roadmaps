---
title: Local state
summary: Local state — состояние, живущее в компоненте (`useState`/`useReducer`), не обязательно в глобальном store.
---

## Для чего

Чтобы держать UI-состояние рядом с местом использования: открыт ли модал, текст инпута.

## Пример

`const [open, setOpen] = useState(false)` в `DialogTrigger`. Подъём state — когда нужен нескольким siblings.

## Примечание

Не тащите всё в Redux. Серверные данные — чаще server state библиотека, не «ещё один useState + fetch».
