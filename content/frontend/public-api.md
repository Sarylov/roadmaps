---
title: Public API
summary: Public API слайса — единственная точка экспорта (`index.ts`): снаружи импортируют только её, не глубокие пути.
---

## Для чего

Чтобы внутренности слайса можно было рефакторить, не ломая полпроекта, и явно видеть контракт модуля.

## Пример

Плохо: `import { Button } from '@/features/auth/ui/Button'`.  
Хорошо: `import { LoginForm } from '@/features/auth'`.

## Примечание

В `index` экспортируйте минимум. ESLint `no-internal-path` / steiger для FSD усиливают правило.
