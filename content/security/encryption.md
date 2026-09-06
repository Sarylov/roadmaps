---
title: encryption
summary: "encryption: Encryption at rest/in transit (TLS). Важно на собесе и в проде в контексте «Security Engineering»."
---

## Зачем нужно

База уровня CORE. Безопасное хранение секретов и обработка пользовательского ввода. Кратко держите threat model: кто атакующий и что получает.

## Как работает

**encryption**: Encryption at rest/in transit (TLS).

Ключи отдельно от данных; KMS.

Не писать свой crypto протокол.

Ориентир: [OWASP Top 10](https://owasp.org/www-project-top-ten/).

## Что спрашивают

- Объясните encryption своими словами на примере из «Security Engineering».
- Какие ошибки и edge cases связаны с encryption?
- Какие альтернативы encryption и когда они лучше?

## Ответы

### Объясните encryption своими словами на примере из «Security Engineering».

Encryption at rest/in transit (TLS). Держите структуру: проблема → механизм → пример. Не писать свой crypto протокол.

### Какие ошибки и edge cases связаны с encryption?

Ключи отдельно от данных; KMS. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы encryption и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Не писать свой crypto протокол.
