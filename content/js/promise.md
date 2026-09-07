---
title: Promise
summary: Promise — объект результата асинхронной операции: pending → fulfilled или rejected.
---

## Для чего

Чтобы композировать асинхронные шаги без пирамиды колбэков и с единым каналом ошибок через `.catch` / `try/catch`.

## Пример

```js
fetch('/api')
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
```

## Примечание

Колбэки `.then` попадают в microtask queue — после текущего синхронного кода, но обычно раньше `setTimeout(0)`. Необработанный reject — отдельная проблема (`unhandledRejection`).

## Вопросы и ответы

### Какие состояния у Promise?

`pending` → потом либо `fulfilled` (значение), либо `rejected` (ошибка). Состояние меняется один раз и дальше неизменно.

### Чем Promise лучше колбэков?

Цепочки `.then` без пирамиды, ошибки собираются в `.catch`, результат можно вернуть/передать дальше как значение. Композиция асинхронных шагов проще.

### Когда сработает `.then` относительно `setTimeout(0)`?

После текущего синхронного кода `.then` идёт в microtasks и обычно раньше macrotask от `setTimeout(0)`. Необработанный reject — `unhandledRejection`.
