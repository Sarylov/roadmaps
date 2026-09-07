---
title: Composition
summary: Composition — сборка UI из компонентов (`children`, слоты), вместо глубокого наследования классов.
---

## Для чего

Чтобы гибко комбинировать поведение и вёрстку без хрупких иерархий `extends`.

## Пример

`<Card><Card.Header/><Card.Body/></Card>` или просто `{children}` в layout.  
HOC/wrappers — тоже композиция.

## Примечание

React предпочитает composition over inheritance. «Болтливые» props drilling лечат context/composition patterns.
