---
title: Server Components
summary: React Server Components (RSC) — компоненты, рендерятся на сервере, не уходят в клиентский JS-бандл как обычные компоненты.
---

## Для чего

Чтобы держать тяжёлую логику/секреты/прямые fetch на сервере и слать клиенту меньше кода.

## Пример

`async function Page() { const data = await db…; return <List data={data}/> }` — Server Component.  
Интерактив — `'use client'` child.

## Примечание

Серверные компоненты не используют useState/эффекты. Граница client/server — осознанный контракт props (сериализуемые).
