---
title: Descriptors
summary: Property descriptor — метаданные свойства: `value`/`get`/`set`, `writable`, `enumerable`, `configurable`.
---

## Для чего

Чтобы тонко контролировать свойства объекта (скрыть из for…in, запретить перезапись).

## Пример

```js
Object.defineProperty(obj, 'id', { value: 1, writable: false, enumerable: false });
```

## Примечание

`Object.freeze` опирается на descriptors. Геттеры — computed свойства без поля «в лоб».
