---
title: Multi-stage builds
summary: Multi-stage build — несколько `FROM` в одном Dockerfile: собираете в builder-образе, в финальный копируете только артефакт.
---

## Для чего

Чтобы итоговый image был меньше и без компиляторов/devDependencies.

## Пример

Stage `build`: `npm ci` + `npm run build`.  
Stage `runner`: `COPY --from=build /app/dist` + prod deps → маленький runtime image.

## Примечание

Меньше attack surface и быстрее pull. Не тащите исходники и `.git` в финальный слой.
