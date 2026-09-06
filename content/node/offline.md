---
title: offline
summary: "offline: Service Worker кэш для offline/ускорения. Важно на собесе и в проде в контексте «Service Workers»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Как страница парсится, рисуется, работает и живёт в фоне. Событийный цикл Node, backpressure и блокировки потока.

## Как работает

**offline**: Service Worker кэш для offline/ускорения.

Стратегии cache-first vs network-first.

Версии кэша и skipWaiting аккуратно.

Документация: [Node.js](https://nodejs.org/docs/latest/api/).

## Что спрашивают

- Объясните offline своими словами на примере из «Service Workers».
- Какие ошибки и edge cases связаны с offline?
- Какие альтернативы offline и когда они лучше?

## Ответы

### Объясните offline своими словами на примере из «Service Workers».

Service Worker кэш для offline/ускорения. Держите структуру: проблема → механизм → пример. Версии кэша и skipWaiting аккуратно.

### Какие ошибки и edge cases связаны с offline?

Стратегии cache-first vs network-first. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы offline и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Версии кэша и skipWaiting аккуратно.
