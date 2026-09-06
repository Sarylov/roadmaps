---
title: input validation
summary: "input validation: Валидация/нормализация всех входов на границе. Важно на собесе и в проде в контексте «Security Engineering»."
---

## Зачем нужно

База уровня CORE. Безопасное хранение секретов и обработка пользовательского ввода. Кратко держите threat model: кто атакующий и что получает.

## Как работает

**input validation**: Валидация/нормализация всех входов на границе.

Whitelist > blacklist.

Размер лимиты против DoS.

Ориентир: [OWASP Top 10](https://owasp.org/www-project-top-ten/).

## Что спрашивают

- Объясните input validation своими словами на примере из «Security Engineering».
- Какие ошибки и edge cases связаны с input validation?
- Какие альтернативы input validation и когда они лучше?

## Ответы

### Объясните input validation своими словами на примере из «Security Engineering».

Валидация/нормализация всех входов на границе. Держите структуру: проблема → механизм → пример. Размер лимиты против DoS.

### Какие ошибки и edge cases связаны с input validation?

Whitelist > blacklist. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы input validation и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Размер лимиты против DoS.
