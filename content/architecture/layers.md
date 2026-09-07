---
title: Layers
summary: Layers в Clean Architecture — кольца ответственности (domain → application → infrastructure/UI): внутреннее не знает о внешнем.
---

## Для чего

Чтобы бизнес-правила не зависели от Express, Prisma и очередей и переживали смену фреймворка.

## Пример

`Order.total()` в domain. Use-case `Checkout` в application. HTTP controller и Prisma — снаружи, зависят внутрь.

## Примечание

Слои — про направление зависимостей, не про папки ради папок. «Service на 2k строк» без границ слоёв не делает архитектуру clean.
