---
title: Lazy routes
summary: Lazy routes — подгрузка кода страницы/секции по маршруту через `import()` / `React.lazy`, а не в initial bundle.
---

## Для чего

Чтобы первый экран не ждал JS админки, настроек и редких разделов.

## Пример

`const Settings = lazy(() => import('./Settings'))` + Suspense.  
В роутере — отдельный chunk на `/settings`.

## Примечание

Не дробите слишком мелко (waterfall). Prefetch по hover/viewport ускоряет следующий переход.
