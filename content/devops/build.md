---
title: Build
summary: Build в CI — шаг превращения исходников в артефакт: bundle, Docker image, бинарник с версией.
---

## Для чего

Чтобы артефакт был воспроизводим и тем же, что уйдёт в тест/прод.

## Пример

`docker build -t api:$GIT_SHA` → push в ECR. Или `npm run build` → upload artifact.

## Примечание

Собирайте один раз, продвигайте тот же артефакт по env (не rebuild «на проде»). Pin зависимостей.
