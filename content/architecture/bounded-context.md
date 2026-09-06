---
title: Bounded Context
summary: Bounded Context — явная граница, внутри которой термины модели имеют одно значение. Между контекстами модели переводятся, даже если слова совпадают.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

`Customer` в Sales означает prospect и pricing, а в Support — владельца обращений. Контексты имеют отдельные contracts и ownership; anti-corruption layer переводит внешнюю модель во внутреннюю.

## Что спрашивают

- Как работает Bounded Context на практике?
- Какой типичный failure mode связан с Bounded Context?
- Какие trade-offs важно назвать для Bounded Context?

## Ответы

### Как работает Bounded Context на практике?

`Customer` в Sales означает prospect и pricing, а в Support — владельца обращений. Контексты имеют отдельные contracts и ownership; anti-corruption layer переводит внешнюю модель во внутреннюю.

### Какой типичный failure mode связан с Bounded Context?

Общая enterprise-модель превращается в компромиссное DTO со множеством nullable полей и связанными релизами. Копирование данных без владельца создаёт расхождение и неясный source of truth.

### Какие trade-offs важно назвать для Bounded Context?

Граница следует языку, инвариантам и команде, а не обязательно microservice. Сначала это могут быть модули одного приложения; network boundary добавляют только при независимом lifecycle/scale.
