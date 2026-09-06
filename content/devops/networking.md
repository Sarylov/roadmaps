---
title: networking
summary: "networking: VPC, subnet, security groups, LB. Важно на собесе и в проде в контексте «Linux»."
---

## Зачем нужно

База уровня CORE. ОС-основа большинства production backend-сред. Операции, rollback и безопасность поставки.

## Как работает

**networking**: VPC, subnet, security groups, LB.

Публичные vs private endpoints.

Egress контроль.

## Что спрашивают

- Объясните networking своими словами на примере из «Linux».
- Какие ошибки и edge cases связаны с networking?
- Какие альтернативы networking и когда они лучше?

## Ответы

### Объясните networking своими словами на примере из «Linux».

VPC, subnet, security groups, LB. Держите структуру: проблема → механизм → пример. Egress контроль.

### Какие ошибки и edge cases связаны с networking?

Публичные vs private endpoints. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы networking и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Egress контроль.
