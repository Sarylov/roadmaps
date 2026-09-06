---
title: Prettier
summary: "Prettier: Prettier — opinionated formatting, без логики. Важно на собесе и в проде в контексте «ESLint / Prettier»."
---

## Зачем нужно

База уровня CORE. Сборка, пакеты, качество кода и delivery pipeline. DX и ловля ошибок до прода.

## Как работает

**Prettier**: Prettier — opinionated formatting, без логики.

Конфликты с ESLint решают eslint-config-prettier.

Формат в CI/pre-commit снижает bike-shedding.

## Что спрашивают

- Что такое Prettier и какую задачу закрывает?
- Какие ключевые абстракции Prettier нужно знать на собесе?
- Какие operational pitfalls у Prettier?

## Ответы

### Что такое Prettier и какую задачу закрывает?

Prettier — opinionated formatting, без логики. Опишите место в стеке «ESLint / Prettier». Формат в CI/pre-commit снижает bike-shedding.

### Какие ключевые абстракции Prettier нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. Конфликты с ESLint решают eslint-config-prettier.

### Какие operational pitfalls у Prettier?

Конфликты с ESLint решают eslint-config-prettier. Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
