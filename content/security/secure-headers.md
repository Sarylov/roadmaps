---
title: secure headers
summary: "secure headers: Helmet: CSP, HSTS, X-Content-Type-Options… Важно на собесе и в проде в контексте «Security Engineering»."
---

## Зачем нужно

База уровня CORE. Безопасное хранение секретов и обработка пользовательского ввода. Кратко держите threat model: кто атакующий и что получает.

## Как работает

**secure headers**: Helmet: CSP, HSTS, X-Content-Type-Options…

Заголовки — слой защиты, не панацея.

HSTS только когда HTTPS стабилен.

Ориентир: [OWASP Top 10](https://owasp.org/www-project-top-ten/).

## Что спрашивают

- Объясните secure headers своими словами на примере из «Security Engineering».
- Какие ошибки и edge cases связаны с secure headers?
- Какие альтернативы secure headers и когда они лучше?

## Ответы

### Объясните secure headers своими словами на примере из «Security Engineering».

Helmet: CSP, HSTS, X-Content-Type-Options… Держите структуру: проблема → механизм → пример. HSTS только когда HTTPS стабилен.

### Какие ошибки и edge cases связаны с secure headers?

Заголовки — слой защиты, не панацея. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы secure headers и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. HSTS только когда HTTPS стабилен.
