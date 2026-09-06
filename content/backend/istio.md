---
title: Istio
summary: "Istio: Istio — service mesh на Envoy. Важно на собесе и в проде в контексте «Service Mesh»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Инфраструктурный слой для трафика между сервисами. Слои приложения, DI и границы транзакций.

## Как работает

**Istio**: Istio — service mesh на Envoy.

mTLS, traffic split, observability.

Операционная сложность высокая.

## Что спрашивают

- Что такое Istio и какую задачу закрывает?
- Какие ключевые абстракции Istio нужно знать на собесе?
- Какие operational pitfalls у Istio?

## Ответы

### Что такое Istio и какую задачу закрывает?

Istio — service mesh на Envoy. Опишите место в стеке «Service Mesh». Операционная сложность высокая.

### Какие ключевые абстракции Istio нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. mTLS, traffic split, observability.

### Какие operational pitfalls у Istio?

mTLS, traffic split, observability. Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
