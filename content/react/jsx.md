---
title: JSX
summary: JSX — синтаксис «HTML в JS»: транспилируется в вызовы `React.createElement` / `jsx()` и описывает дерево UI.
---

## Для чего

Чтобы декларативно описывать разметку рядом с логикой компонента.

## Пример

`const el = <Button title="Save" />` → элемент с type `Button` и props `{ title: 'Save' }`.  
В выражениях — `{count}`, условия, `.map`.

## Примечание

JSX ≠ HTML: `className`, `htmlFor`, события camelCase. Один корень (или фрагмент `<>`).
