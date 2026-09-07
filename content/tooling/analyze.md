---
title: Analyze
summary: Bundle analyze — визуализация состава бандла (rollup-plugin-visualizer, webpack-bundle-analyzer): что сколько весит.
---

## Для чего

Чтобы найти тяжёлые зависимости и дубли, а не гадать «почему 2MB JS».

## Пример

Открыли treemap: в бандле целиком `moment` + локали, или два раза `lodash`. Заменили на dayjs / точечный import.

## Примечание

Сравнивайте production build. Dev-бандл врёт размерами.
