---
title: Backpressure
summary: Backpressure — сигнал «замедли производителя», когда потребитель не успевает обрабатывать данные.
---

## Для чего

Чтобы стримы и пайплайны не раздували буферы и RAM при разной скорости сторон.

## Пример

```js
import { pipeline } from 'node:stream/promises'
await pipeline(fastSource, slowDestination) // сам учитывает давление
```

## Примечание

Игнор `write === false` / `data` без `pause` → рост памяти. `pipeline` лучше голого `pipe`: ошибки и cleanup в комплекте.
