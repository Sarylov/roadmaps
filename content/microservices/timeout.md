---
title: timeout
summary: "timeout: Timeouts на каждом hop. Важно на собесе и в проде в контексте «Resilience Patterns»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Как сервис выживает при отказах соседей и сети. Сеть, частичные сбои и eventual consistency.

## Как работает

**timeout**: Timeouts на каждом hop.

Нет timeout = зависание тредпулов.

Дедлайныpropagated (context).

## Что спрашивают

- Объясните timeout своими словами на примере из «Resilience Patterns».
- Какие ошибки и edge cases связаны с timeout?
- Какие альтернативы timeout и когда они лучше?

## Ответы

### Объясните timeout своими словами на примере из «Resilience Patterns».

Timeouts на каждом hop. Держите структуру: проблема → механизм → пример. Дедлайныpropagated (context).

### Какие ошибки и edge cases связаны с timeout?

Нет timeout = зависание тредпулов. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы timeout и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Дедлайныpropagated (context).
