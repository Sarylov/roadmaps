---
title: Consistency
summary: Consistency описывает, какие значения операция чтения может наблюдать после записей. На system design нужно назвать конкретную модель, а не говорить «данные консистентны».
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Linearizability ведёт себя как одна актуальная копия; read-your-writes и monotonic reads дают session guarantees; eventual consistency обещает сходимость при прекращении обновлений. Quorum `R + W > N` повышает шанс пересечения версий, но сам по себе не решает все конфликты.

## Что спрашивают

- Как работает Consistency на практике?
- Какой типичный failure mode связан с Consistency?
- Какие trade-offs важно назвать для Consistency?

## Ответы

### Как работает Consistency на практике?

Linearizability ведёт себя как одна актуальная копия; read-your-writes и monotonic reads дают session guarantees; eventual consistency обещает сходимость при прекращении обновлений. Quorum `R + W > N` повышает шанс пересечения версий, но сам по себе не решает все конфликты.

### Какой типичный failure mode связан с Consistency?

Чтение replica сразу после записи может вернуть старое значение; concurrent writes требуют version/clock и стратегии merge. Кэш без версии может пережить обновление БД и нарушить обещанный UX.

### Какие trade-offs важно назвать для Consistency?

Деньги и уникальные reservation требуют сильной координации в границе инварианта. Feed/analytics часто принимают staleness; важно задать допустимое окно и дать клиенту read-your-writes там, где пользователь ждёт свой результат.
