---
title: Loaders
summary: Loaders (React Router) — функции загрузки данных до рендера маршрута; результат доступен через `useLoaderData`.
---

## Для чего

Чтобы не фетчить в `useEffect` после пустого экрана и централизовать data на границе роута.

## Пример

```js
export async function loader({ params }) {
  return getUser(params.id)
}
```

## Примечание

Ошибки — `errorElement`/throw Response. Мутации — actions. Близко по идее к Next.js server fetch на странице.
