---
title: Data fetching
summary: Data fetching на фронте — получение данных с API: где (сервер/клиент), когда (render/loader/effect) и как кэшировать.
---

## Для чего

Чтобы выбрать стратегию под SEO, персонализацию и UX загрузки.

## Пример

SSR/RSC: fetch на сервере. SPA: React Query. RR loader — до рендера роута. Избегать водопада «рендер → effect → fetch → рендер».

## Примечание

Дубли fetch на SSR+клиент — проблема без кэша/dedupe. Секреты только на сервере.
