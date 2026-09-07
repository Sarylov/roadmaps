---
title: Landmarks
summary: Landmarks — области страницы для навигации assistive tech: `main`, `nav`, `banner`, `contentinfo` и т.д.
---

## Для чего

Чтобы пользователь screen reader мог прыгать по регионам страницы, а не листать всё подряд.

## Пример

`<header>` → banner, `<nav>`, `<main>`, `<footer>` → contentinfo. Один `main` на страницу.

## Примечание

Дублируйте роль ARIA только если тега нет. Несколько `nav` — дайте accessible name (`aria-label`).

## Вопросы и ответы

### Сколько main может быть?

Один видимый `main` на документ — точка основного содержимого.

### Чем landmark отличается от просто секции?

Landmark — именованный регион для AT. Обычный `div`/`section` без имени в список landmarks не попадёт как надо.
