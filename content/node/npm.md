---
title: npm
summary: npm — менеджер пакетов Node: установка зависимостей по package.json/lockfile, scripts, публикация.
---

## Для чего

Чтобы воспроизводимо собирать дерево зависимостей локально и в CI.

## Пример

```bash
npm ci          # строго по lockfile (CI)
npm run test
```

## Примечание

`npm install` может обновлять lockfile — в CI обычно `npm ci`. Phantom dependencies (импорт того, чего нет в package.json) хрупки при обновлениях.
