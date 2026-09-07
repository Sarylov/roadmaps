---
title: CI (frontend)
summary: CI — автоматический прогон lint/test/build на каждый PR/push, чтобы ломать merge раньше прода.
---

## Для чего

Чтобы «у меня локально ок» не было единственной проверкой качества.

## Пример

GitHub Actions: install → lint → unit → `vite build`. Красный PR не мержат. Кэш pnpm store ускоряет.

## Примечание

Держите CI детерминированным (`ci`/`frozen-lockfile`). Тяжёлые e2e — отдельный job/nightly.
