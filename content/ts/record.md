---
title: Record
summary: `Record<K, V>` — utility type объекта с ключами типа K и значениями типа V.
---

## Для чего

Чтобы описать словарь/мапу с известным набором ключей или произвольными string-ключами без ручной index signature.

## Пример

```ts
type Role = 'admin' | 'user'

type Permissions = Record<Role, boolean>
// { admin: boolean; user: boolean }

const labels: Record<string, string> = {
  ok: 'OK',
  error: 'Error',
}
```

## Примечание

`Record<string, T>` ≈ index signature, но удобнее читать. `Record<'a' | 'b', T>` требует оба ключа. Пустой объект `{}` не удовлетворяет `Record<string, T>` при строгих проверках наличия индексной сигнатуры.

## Вопросы и ответы

### Чем Record отличается от `Map`?

`Record` — тип обычного объекта JS. `Map` — runtime-структура с любыми ключами; тип `Map<K, V>` не заменяется `Record`.

### Когда лучше явный интерфейс?

Когда ключи семантически разные поля (`id`, `name`) — интерфейс/type с именованными свойствами читаемее. `Record` — когда ключи однородны (роли, коды, id → value).

### Record и `keyof`?

`keyof Record<K, V>` даёт `K` (для union литералов — сами литералы). Удобно в generic-хелперах над словарями.
