---
title: Saturation
summary: Saturation — насколько заполнены ограниченные ресурсы: CPU, память, пул соединений, длина очереди.
---

## Для чего

Чтобы видеть приближение к потолку до того, как latency и ошибки взлетят.

## Пример

Пул Postgres 95/100 busy, queue depth растёт — скоро таймауты. CPU throttling в cgroup контейнера.

## Примечание

Четвёртый «золотой сигнал» (latency, traffic, errors, saturation). Нет headroom → скейл или оптимизация.
