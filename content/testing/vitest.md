---
title: Vitest
summary: Vitest — быстрый test runner на Vite: API совместим с Jest, нативный ESM и TypeScript.
---

## Для чего

Чтобы тестировать код с тем же пайплайном трансформации, что и dev/build на Vite.

## Пример

```ts
import { describe, it, expect } from 'vitest';
it('works', () => expect(1 + 1).toBe(2));
```

## Примечание

Почти drop-in вместо Jest в современных TS-репо. Для тяжёлого Nest/legacy CJS Jest всё ещё частый дефолт.
