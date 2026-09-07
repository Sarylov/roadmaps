---
title: News feed
summary: News feed — персональная лента активностей (посты друзей/подписок) с ранжированием и высокой read-нагрузкой.
---

## Для чего

Практика: fan-out on write vs on read, кэш ленты, ranking, eventual consistency.

## Пример

Fan-out on write: пост пишется в timeline друзей в Redis/Cassandra. Знаменитости — pull on read, иначе взрыв записи.

## Примечание

Гибрид по типу автора. Кэш + precompute. Аналитика/реклама — отдельные пайплайны.
