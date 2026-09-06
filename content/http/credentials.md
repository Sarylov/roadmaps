---
title: credentials
summary: "credentials: credentials: include отправляет cookie cross-origin при разрешении. Важно на собесе и в проде в контексте «CORS»."
---

## Зачем нужно

База уровня CORE. HTTP, realtime, auth и защита клиентского периметра. Упор на семантику метода/статуса/заголовков и кэш.

## Как работает

**credentials**: credentials: include отправляет cookie cross-origin при разрешении.

Нельзя совмещать Allow-Origin: * с credentials.

CSRF актуален при cookie-сессиях.

MDN: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).

## Что спрашивают

- Объясните credentials своими словами на примере из «CORS».
- Какие ошибки и edge cases связаны с credentials?
- Какие альтернативы credentials и когда они лучше?

## Ответы

### Объясните credentials своими словами на примере из «CORS».

credentials: include отправляет cookie cross-origin при разрешении. Держите структуру: проблема → механизм → пример. CSRF актуален при cookie-сессиях.

### Какие ошибки и edge cases связаны с credentials?

Нельзя совмещать Allow-Origin: * с credentials. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы credentials и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. CSRF актуален при cookie-сессиях.
