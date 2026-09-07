---
title: SSG
summary: SSG (Static Site Generation) — HTML собирается на билде заранее и отдаётся как статика (CDN).
---

## Для чего

Чтобы максимальная скорость и дешёвый хостинг для контента, который не обязан быть per-request свежим.

## Пример

Документация/блог: `getStaticProps`/Next `generateStaticParams` → HTML в CDN. Обновление — новый деплой или revalidate.

## Примечание

Не подходит для строго персонализированных per-user страниц без client fetch. Гибрид с ISR/CSR частями.
