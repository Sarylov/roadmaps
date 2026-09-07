---
title: Jest
summary: Jest — test runner для JS/TS: describe/it, assertions, моки модулей, coverage из коробки.
---

## Для чего

Чтобы быстро писать unit/integration тесты Node и фронта в одном знакомом API.

## Пример

```ts
test('adds', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## Примечание

Умеет mock'ать `node_modules` через `jest.mock`. В чистом ESM/Vite-проектах часто предпочитают Vitest с тем же API.
