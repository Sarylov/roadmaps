---
title: Compound components
summary: Compound components — набор связанных компонентов с общим неявным state (Tabs, Select), общающихся через context.
---

## Для чего

Чтобы API выглядел декларативно (`<Tabs><Tabs.List/><Tabs.Panel/></Tabs>`), а связь частей была скрыта.

## Пример

`Accordion` держит `openId` в context; `Accordion.Item` читает/тоглит без проброса props на каждый уровень.

## Примечание

Гибкий DX, сложнее типизировать и документировать. Альтернатива — один компонент с props-конфигом.
