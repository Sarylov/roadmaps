---
title: User events
summary: user-event — симуляция реальных действий пользователя (click, type, tab) выше уровнем, чем сырой `fireEvent`.
---

## Для чего

Чтобы тесты ближе к браузеру: фокус, порядок событий, ввод в controlled input.

## Пример

`await userEvent.click(button)`  
`await userEvent.type(input, 'hello')` — лучше, чем вручную `fireEvent.change` без цепочки.

## Примечание

API async — не забывайте `await`. Setup: `userEvent.setup()` в свежих версиях.
