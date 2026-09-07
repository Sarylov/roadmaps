---
title: GitHub Actions
summary: GitHub Actions — CI/CD в репозитории: workflows на события (push/PR) из YAML runners.
---

## Для чего

Чтобы на каждый PR автоматически собирать, тестировать и деплоить без ручного «у меня локально ок».

## Пример

`on: pull_request` → `npm test` + lint. На `main` → build image → push registry → deploy.

## Примечание

Секреты — в GitHub Secrets, не в логах. Кеш зависимостей ускоряет. Self-hosted runners — для private сети/особых нужд.
