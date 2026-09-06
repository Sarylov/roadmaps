---
title: Loaders в React Router
summary: Route loader загружает данные до рендера маршрута и связывает lifecycle запроса с navigation, params, отменой и error boundary.
---

## Зачем нужно

Loader устраняет fetch-on-render waterfall и разрозненные loading/error состояния, позволяя роутеру параллельно сопоставлять маршрут и получать данные.

## Как работает

Data router вызывает loaders совпавших маршрутов при navigation. Loader получает `request`, `params` и может вернуть данные, `Response`, redirect или выбросить ошибку. Компонент читает результат через route API.

Сигнал `request.signal` передают в `fetch`, чтобы отменённая навигация не тратила ресурсы. После action роутер revalidate-ит нужные loaders. Кеширование не обязательно является задачей роутера: его можно интегрировать с server-state cache.

## Что спрашивают

- Чем loader лучше `fetch` в `useEffect`?
- Как обрабатываются redirect и ошибка?
- Что делать при отмене navigation?

## Ответы

### Чем loader лучше `fetch` в `useEffect`?

Он запускается до рендера route element, поддерживает SSR, параллельную загрузку и единый pending/error lifecycle. Effect стартует только после commit и часто создаёт waterfall.

### Как обрабатываются redirect и ошибка?

Loader возвращает/выбрасывает redirect response; исключение или error response попадает в ближайшую route error boundary.

### Что делать при отмене navigation?

Передать `request.signal` сетевому клиенту и не выполнять необратимые side effects в loader. Роутер прерывает устаревший запрос, когда начинается новая навигация.
