---
title: service boundaries
summary: "service boundaries: Границы по бизнес-capabilities/bounded context. Важно на собесе и в проде в контексте «Микросервисы: основы»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Когда монолит стоит делить и по каким границам. Сеть, частичные сбои и eventual consistency.

## Как работает

**service boundaries**: Границы по бизнес-capabilities/bounded context.

Сплит по техническим слоям — антипаттерн.

Чересчур мелкие сервисы = distributed monolith.

## Что спрашивают

- Объясните service boundaries своими словами на примере из «Микросервисы: основы».
- Какие ошибки и edge cases связаны с service boundaries?
- Какие альтернативы service boundaries и когда они лучше?

## Ответы

### Объясните service boundaries своими словами на примере из «Микросервисы: основы».

Границы по бизнес-capabilities/bounded context. Держите структуру: проблема → механизм → пример. Чересчур мелкие сервисы = distributed monolith.

### Какие ошибки и edge cases связаны с service boundaries?

Сплит по техническим слоям — антипаттерн. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы service boundaries и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Чересчур мелкие сервисы = distributed monolith.
