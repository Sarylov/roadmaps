---
title: Rebase
summary: Rebase — перенос коммитов вашей ветки на новый базовый tip: линейная история вместо merge-коммита.
---

## Для чего

Чтобы влить свежий `main` и держать историю читаемой перед PR.

## Пример

`git fetch && git rebase origin/main` → решить конфликты → `git push --force-with-lease` (своя feature-ветка).

## Примечание

Не ребейзьте shared/public ветки без договорённости. `--force-with-lease` безопаснее голого `--force`.
