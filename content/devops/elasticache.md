---
title: ElastiCache
summary: "ElastiCache: Managed Redis/Memcached. Важно на собесе и в проде в контексте «AWS»."
---

## Зачем нужно

База уровня CORE. Практический cloud stack для production backend. Операции, rollback и безопасность поставки.

## Как работает

**ElastiCache**: Managed Redis/Memcached.

Eviction и failover behavior знать.

Не хранить единственную критичную истину без persistence стратегии.

## Что спрашивают

- Объясните ElastiCache своими словами на примере из «AWS».
- Какие ошибки и edge cases связаны с ElastiCache?
- Какие альтернативы ElastiCache и когда они лучше?

## Ответы

### Объясните ElastiCache своими словами на примере из «AWS».

Managed Redis/Memcached. Держите структуру: проблема → механизм → пример. Не хранить единственную критичную истину без persistence стратегии.

### Какие ошибки и edge cases связаны с ElastiCache?

Eviction и failover behavior знать. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы ElastiCache и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Не хранить единственную критичную истину без persistence стратегии.
