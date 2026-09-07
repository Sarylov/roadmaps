---
title: Containing block
summary: Containing block — прямоугольник, относительно которого считают `width`/`left`/`absolute` и проценты позиции.
---

## Для чего

Чтобы понимать, к кому «прилипает» `position: absolute` и от чего считаются проценты.

## Пример

`absolute` позиционируется к ближайшему предку с `position` ≠ `static` (или к initial containing block).  
`transform` у предка тоже делает его containing block для fixed в современных браузерах.

## Примечание

`fixed` обычно относительно viewport, но предок с transform/filter/perspective может «приклеить» fixed к себе.

## Вопросы и ответы

### К чему позиционируется absolute?

К nearest positioned ancestor; если нет — к initial containing block (часто viewport/html).

### Почему fixed елемент скроллится с блоком?

Предок создал containing block (часто через `transform`) — fixed ведёт себя относительно него.
