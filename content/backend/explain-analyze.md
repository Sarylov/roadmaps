---
title: EXPLAIN ANALYZE
summary: "EXPLAIN ANALYZE: EXPLAIN ANALYZE выполняет запрос и пишет actual timings/rows. Важно на собесе и в проде в контексте «Query Optimization»."
---

## Зачем нужно

OPT-тема: отличает глубину кандидата. Поиск узких мест и анализ планов выполнения. Слои приложения, DI и границы транзакций.

## Как работает

**EXPLAIN ANALYZE**: EXPLAIN ANALYZE выполняет запрос и пишет actual timings/rows.

Опасно на тяжёлых write-запросах в проде.

Расхождение estimate vs actual — сигнал статистики/параметров.

## Что спрашивают

- Объясните EXPLAIN ANALYZE своими словами на примере из «Query Optimization».
- Какие ошибки и edge cases связаны с EXPLAIN ANALYZE?
- Какие альтернативы EXPLAIN ANALYZE и когда они лучше?

## Ответы

### Объясните EXPLAIN ANALYZE своими словами на примере из «Query Optimization».

EXPLAIN ANALYZE выполняет запрос и пишет actual timings/rows. Держите структуру: проблема → механизм → пример. Расхождение estimate vs actual — сигнал статистики/параметров.

### Какие ошибки и edge cases связаны с EXPLAIN ANALYZE?

Опасно на тяжёлых write-запросах в проде. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы EXPLAIN ANALYZE и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Расхождение estimate vs actual — сигнал статистики/параметров.
