---
title: Routes (React Router)
summary: Routes — декларация URL → UI (и data API): какие path рендерят какие элементы/layout.
---

## Для чего

Чтобы SPA/SSR-приложение отражало адресную строку и вложенные layout'ы.

## Пример

```jsx
<Route path="/" element={<Layout />}>
  <Route path="users/:id" element={<User />} />
</Route>
```

## Примечание

В RR 6.4+ маршруты часто объекты + loaders. Не путать с HTTP routes бэкенда.
