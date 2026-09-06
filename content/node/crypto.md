---
title: crypto
summary: "crypto: crypto для хешей/HMAC/random/JWT verify. Важно на собесе и в проде в контексте «Node.js APIs»."
---

## Зачем нужно

База уровня CORE. Базовые модули runtime, необходимые для backend-разработки. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**crypto**: crypto для хешей/HMAC/random/JWT verify.

Math.random не для security.

timingSafeEqual для сравнения секретов.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните crypto своими словами на примере из «Node.js APIs».
- Какие ошибки и edge cases связаны с crypto?
- Какие альтернативы crypto и когда они лучше?

## Ответы

### Объясните crypto своими словами на примере из «Node.js APIs».

crypto для хешей/HMAC/random/JWT verify. Держите структуру: проблема → механизм → пример. timingSafeEqual для сравнения секретов.

### Какие ошибки и edge cases связаны с crypto?

Math.random не для security. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы crypto и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. timingSafeEqual для сравнения секретов.
