---
title: Test (CI)
summary: Test в CI — автоматический прогон unit/integration/e2e на пайплайне до merge/deploy.
---

## Для чего

Чтобы ломать сборку на регрессиях раньше продакшена.

## Пример

Job `test`: install → lint → unit → integration с Testcontainers. Красный PR не мержат.

## Примечание

Долгие e2e — отдельный job/nightly. Флейки чините, не маскируйте бесконечным retry.
