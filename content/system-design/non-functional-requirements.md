---
title: Non-functional requirements
summary: Non-functional requirements (NFR) — качество системы: latency, availability, consistency, security, cost — не «какие кнопки».
---

## Для чего

Чтобы выбрать архитектуру под SLO, а не под красивую схему.

## Пример

p99 redirect < 100ms, availability 99.9%, данные кликов могут отставать (eventual). От этого зависят кэш, реплики, очередь.

## Примечание

NFR должны быть измеримы. «Быстро и надёжно» без цифр на собесе — слабо.
