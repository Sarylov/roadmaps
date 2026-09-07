---
title: Controlled
summary: Controlled input — значение поля полностью из props/state родителя; каждый ввод идёт через `onChange` вверх.
---

## Для чего

Чтобы форма была единственным источником правды: валидация, маски, синхронизация полей.

## Пример

`<input value={name} onChange={e => setName(e.target.value)} />`  
Uncontrolled — `defaultValue` + ref, когда React не контролирует каждый символ.

## Примечание

Смешивать `value` и отсутствие onChange — «замороженный» инпут. Выбирайте одну модель на поле.
