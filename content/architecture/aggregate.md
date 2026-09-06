---
title: Aggregate
summary: Aggregate — consistency boundary из одной или нескольких entities/value objects с единственным root. Только root доступен снаружи и атомарно защищает инварианты внутри границы.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Repository загружает и сохраняет aggregate целиком; команды вызывают методы root. Другой aggregate ссылается на него по ID, а межагрегатные изменения координируются process manager/domain events и могут быть eventual.

## Что спрашивают

- Как работает Aggregate на практике?
- Какой типичный failure mode связан с Aggregate?
- Какие trade-offs важно назвать для Aggregate?

## Ответы

### Как работает Aggregate на практике?

Repository загружает и сохраняет aggregate целиком; команды вызывают методы root. Другой aggregate ссылается на него по ID, а межагрегатные изменения координируются process manager/domain events и могут быть eventual.

### Какой типичный failure mode связан с Aggregate?

Aggregate размером со весь bounded context вызывает contention и тяжёлые загрузки. Слишком маленькая граница заставляет транзакцией связывать множество repositories и не защищает инвариант при concurrency.

### Какие trade-offs важно назвать для Aggregate?

Границу определяет правило, которое обязано быть истинным сразу после commit. Всё, что допускает eventual consistency, лучше вынести в другой aggregate и связать событием.
