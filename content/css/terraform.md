---
title: Terraform
summary: "Terraform: IaC декларативно; plan/apply. Важно на собесе и в проде в контексте «Infrastructure as Code»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Описание инфраструктуры в виде кода. Упор на каскад, layout и доступность.

## Как работает

**Terraform**: IaC декларативно; plan/apply.

State — критичный артефакт (lock в remote).

Модули и blast radius.

MDN: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

## Что спрашивают

- Что такое Terraform и какую задачу закрывает?
- Какие ключевые абстракции Terraform нужно знать на собесе?
- Какие operational pitfalls у Terraform?

## Ответы

### Что такое Terraform и какую задачу закрывает?

IaC декларативно; plan/apply. Опишите место в стеке «Infrastructure as Code». Модули и blast radius.

### Какие ключевые абстракции Terraform нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. State — критичный артефакт (lock в remote).

### Какие operational pitfalls у Terraform?

State — критичный артефакт (lock в remote). Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
