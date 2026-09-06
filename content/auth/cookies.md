---
title: Cookies
summary: Cookie — пара name/value, которую браузер хранит и автоматически отправляет по правилам Domain, Path, Secure, SameSite и срока жизни. Ошибки атрибутов превращаются в утечки и CSRF.
---

## Зачем нужно

Cookies часто переносят session id или refresh token, поэтому важно понимать не только API, но и модель браузера.

## Как работает

`Set-Cookie` создаёт cookie; браузер добавляет подходящие значения в `Cookie`. Host-only cookie уже, чем cookie с `Domain`; `Path` не является защитной границей. `HttpOnly` скрывает значение от JavaScript, `Secure` ограничивает HTTPS, `SameSite` регулирует cross-site отправку.

## Практические нюансы

Для auth предпочтителен префикс `__Host-`: Secure, без Domain, Path=/. Не храните чувствительное состояние в незашифрованном значении; подпись защищает целостность, но не секретность. Лимиты размера малы, а каждый cookie увеличивает запросы.

## Что спрашивают

- Чем HttpOnly, Secure и SameSite защищают?
- Чем session cookie отличается от persistent?
- Почему Domain лучше не задавать без необходимости?

## Ответы

### Чем HttpOnly, Secure и SameSite защищают?

HttpOnly затрудняет чтение через XSS; Secure запрещает отправку по HTTP; SameSite снижает cross-site отправку и риск CSRF. Они решают разные угрозы.

### Чем session cookie отличается от persistent?

Session cookie не имеет `Expires/Max-Age` и обычно живёт до завершения browser session. Persistent имеет срок; браузеры могут восстанавливать сессии, поэтому серверный expiry всё равно обязателен.

### Почему Domain лучше не задавать без необходимости?

Без Domain cookie host-only и не уходит поддоменам. Широкий Domain увеличивает attack surface: скомпрометированный поддомен может влиять на cookie scope.
