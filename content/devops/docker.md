---
title: Docker
summary: "Docker: Docker упаковывает app+deps в image/container. Важно на собесе и в проде в контексте «CI/CD / Docker»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Сборка, пакеты, качество кода и delivery pipeline. Операции, rollback и безопасность поставки.

## Как работает

**Docker**: Docker упаковывает app+deps в image/container.

Толстые images и root-процесс — риски.

multi-stage и non-root — база.

## Что спрашивают

- Что такое Docker и какую задачу закрывает?
- Какие ключевые абстракции Docker нужно знать на собесе?
- Какие operational pitfalls у Docker?

## Ответы

### Что такое Docker и какую задачу закрывает?

Docker упаковывает app+deps в image/container. Опишите место в стеке «CI/CD / Docker». multi-stage и non-root — база.

### Какие ключевые абстракции Docker нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. Толстые images и root-процесс — риски.

### Какие operational pitfalls у Docker?

Толстые images и root-процесс — риски. Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
