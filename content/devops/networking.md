---
title: Networking
summary: Networking на хосте — интерфейсы, IP, порты, маршруты, DNS: как процесс слушает и куда ходит трафик.
---

## Для чего

Чтобы дебажить «сервис не доступен»: bind address, firewall, DNS, конфликт портов.

## Пример

`ss -tlnp` / `netstat` — кто слушает `:3000`.  
`curl localhost:3000/health`. В Docker порт `3000:3000` — publish на хост.

## Примечание

`127.0.0.1` vs `0.0.0.0`: listen только localhost не виден снаружи. DNS в compose — имена сервисов, не `localhost` соседнего контейнера.
