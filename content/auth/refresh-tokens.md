---
title: Refresh tokens
summary: Refresh token — долгоживущее полномочие получить новые access tokens. Его rotation и обнаружение reuse ограничивают последствия кражи.
---

## Зачем нужно

Короткий access token снижает окно компрометации, а refresh token сохраняет UX без повторного login.

## Как работает

Client отправляет refresh token только authorization server. При rotation сервер помечает старый token использованным и выдаёт новый из той же family. Повторное предъявление старого token указывает на кражу или race; обычно отзывают всю family и требуют login.

## Практические нюансы

Хранят hash token, user/client/family id, absolute/idle expiry и статус. Для browser public client предпочтителен BFF/HttpOnly Secure cookie; native app использует OS secure storage. Refresh token не отправляют resource API и не логируют.

## Что спрашивают

- Зачем нужна rotation refresh token?
- Что делать при одновременном refresh?
- Чем revoke отличается от expiry?

## Ответы

### Зачем нужна rotation refresh token?

Украденный статический token действует до expiry. Одноразовая rotation позволяет заметить reuse и закрыть всю цепочку после компрометации.

### Что делать при одновременном refresh?

Сериализовать refresh на client и атомарно consume token на server. Небольшое grace window возможно, но должно не позволять незаметно развести две независимые ветки.

### Чем revoke отличается от expiry?

Expiry прекращает действие по времени, revoke — явным серверным решением: logout, смена пароля, reuse detection или администратор. Проверка требует состояния.
