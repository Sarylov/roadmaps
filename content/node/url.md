---
title: URL
summary: URL / URLSearchParams — стандартный парсер ссылок и query-параметров (тот же WHATWG API, что в браузере).
---

## Для чего

Чтобы разбирать и собирать URL без хрупких regex и ручной склейки строк.

## Пример

```js
const u = new URL('https://api.example.com/v1/users?active=1')
u.pathname // /v1/users
u.searchParams.get('active') // "1"
```

## Примечание

Для относительных путей нужен base: `new URL('/x', 'https://example.com')`. Не парсите query самописным `split('&')`.
