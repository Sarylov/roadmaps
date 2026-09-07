---
title: FSD layers
summary: FSD layers — слои Feature-Sliced Design сверху вниз: app → processes → pages → widgets → features → entities → shared; зависимости только вниз.
---

## Для чего

Чтобы фронт масштабировался по фичам, а не превращался в «components/ + utils/на 500 файлов».

## Пример

`features/auth` не импортирует `pages/profile`.  
`entities/user` может использовать `shared/ui` и `shared/api`. Обратно — нельзя.

## Примечание

Слой выше знает о нижележащем API через public API слайса. Нарушение импортов ловят eslint-boundaries.
