---
title: Pipeline
summary: CI/CD pipeline — цепочка стадий: install → quality → build → (deploy) с артефактами и окружениями.
---

## Для чего

Чтобы доставка фронта была повторяемой: от коммита до staging/prod без ручных шагов.

## Пример

PR pipeline: lint/test/build. Main: build → upload static на S3/CDN или image → deploy preview/prod.

## Примечание

Секреты — в CI secrets. Один артефакт промоутится по env, а не «пересобрали на проде иначе».
