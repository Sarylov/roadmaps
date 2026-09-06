---
title: storage
summary: "storage: Где хранить токены: memory vs sessionStorage vs cookie. Важно на собесе и в проде в контексте «Capacity Estimation»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Оценка нагрузки, ресурсов и роста системы. Цифры, bottleneck и явные trade-offs.

## Как работает

**storage**: Где хранить токены: memory vs sessionStorage vs cookie.

XSS читает JS-storage; cookie нужен Secure/SameSite.

Refresh rotation и revocation — must-have.

## Что спрашивают

- Объясните storage своими словами на примере из «Capacity Estimation».
- Какие ошибки и edge cases связаны с storage?
- Какие альтернативы storage и когда они лучше?

## Ответы

### Объясните storage своими словами на примере из «Capacity Estimation».

Где хранить токены: memory vs sessionStorage vs cookie. Держите структуру: проблема → механизм → пример. Refresh rotation и revocation — must-have.

### Какие ошибки и edge cases связаны с storage?

XSS читает JS-storage; cookie нужен Secure/SameSite. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы storage и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Refresh rotation и revocation — must-have.
