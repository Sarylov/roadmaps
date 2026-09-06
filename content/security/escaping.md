---
title: escaping
summary: "escaping: Escaping контекстно: HTML/attr/JS/URL/CSS. Важно на собесе и в проде в контексте «XSS/CSRF»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. HTTP, realtime, auth и защита клиентского периметра. Кратко держите threat model: кто атакующий и что получает.

## Как работает

**escaping**: Escaping контекстно: HTML/attr/JS/URL/CSS.

Один encode «на всё» не работает.

В React текстовые children экранируются; dangerouslySetInnerHTML — риск.

Ориентир: [OWASP Top 10](https://owasp.org/www-project-top-ten/).

## Что спрашивают

- Объясните escaping своими словами на примере из «XSS/CSRF».
- Какие ошибки и edge cases связаны с escaping?
- Какие альтернативы escaping и когда они лучше?

## Ответы

### Объясните escaping своими словами на примере из «XSS/CSRF».

Escaping контекстно: HTML/attr/JS/URL/CSS. Держите структуру: проблема → механизм → пример. В React текстовые children экранируются; dangerouslySetInnerHTML — риск.

### Какие ошибки и edge cases связаны с escaping?

Один encode «на всё» не работает. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы escaping и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. В React текстовые children экранируются; dangerouslySetInnerHTML — риск.
