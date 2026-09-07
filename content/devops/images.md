---
title: Images
summary: Docker image — неизменяемый шаблон слоёв (FS + metadata + entrypoint), из которого создают контейнеры.
---

## Для чего

Чтобы одинаково упаковать приложение для любого хоста с Docker/K8s.

## Пример

`docker build -t api:1.2 .` → `docker run api:1.2`. Один image — много контейнеров.

## Примечание

Слои кэшируются: порядок Dockerfile влияет на скорость сборки. Теги (`:latest`) удобны локально, в проде лучше digest/semver.
