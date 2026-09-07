---
title: Providers (NestJS)
summary: Provider в NestJS — класс или значение, которое контейнер может создать и внедрить (обычно `@Injectable()` сервис).
---

## Для чего

Чтобы зависимости объявлялись явно и подставлялись фреймворком, а не через `new` по всему коду.

## Пример

`UsersService` — provider. В `UsersController` конструктор `constructor(private users: UsersService)` — Nest передаёт инстанс.

## Примечание

Provider регистрируют в `providers` модуля (или `exports` для других модулей). Токен может быть классом, строкой или Symbol.
