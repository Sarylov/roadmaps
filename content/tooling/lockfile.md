---
title: Lockfile
summary: Lockfile (`package-lock.json` / `yarn.lock` / `pnpm-lock.yaml`) — точные версии всего дерева зависимостей для воспроизводимых install.
---

## Для чего

Чтобы CI и коллеги ставили те же пакеты, а не «вчера ^1.2 вдруг стал 1.9 с багом».

## Пример

Коммитите lockfile. В CI: `npm ci` / `pnpm i --frozen-lockfile`, не голый `npm install` без нужды.

## Примечание

Не смешивайте менеджеры в одном репо. Конфликты lockfile при merge — решать осознанно, часто через reinstall.
