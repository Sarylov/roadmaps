---
title: XSS
summary: Cross-Site Scripting — внедрение чужого JS в страницу пользователя. Скрипт выполняется в контексте сайта и может красть сессию, менять DOM, слать запросы от имени жертвы.
video: L5l9lSnNMxg
image: https://commons.wikimedia.org/wiki/Special:FilePath/Cross-site_scripting_attack_sequence_diagram_-_en.png
image_credit: "Sequence diagram XSS (Wikimedia). Видео: Computerphile — Cracking Websites with Cross Site Scripting (Tom Scott)"
---

## Зачем нужно

XSS — классика фронтенд- и fullstack-собеседований. Одна дыра в рендере HTML сводит на нет остальную безопасность.

## Виды

- **Stored** — вредоносный код сохранён на сервере (коммент, профиль).
- **Reflected** — приходит в URL/параметре и сразу отражается в ответе.
- **DOM-based** — опасная сборка строки в браузере (`innerHTML`, кривой шаблон).

## Защита

- Экранировать вывод / не вставлять сырой HTML.
- CSP (Content-Security-Policy).
- HttpOnly cookies для сессии (не лечит XSS полностью, но усложняет кражу cookie).

## Что спрашивают

- Чем XSS отличается от CSRF?
- Почему `dangerouslySetInnerHTML` опасен?
- Что даёт CSP и что нет?

## Ответы

### Чем XSS отличается от CSRF?

**XSS** — внедрили свой JS на вашу страницу; атакующий выполняет код **в контексте сайта** (DOM, cookies, если не HttpOnly, запросы от имени пользователя).

**CSRF** — чужой сайт заставляет браузер жертвы **сам** дернуть ваш endpoint с cookies; своего JS на вашей странице нет. XSS «крадёт/управляет страницей», CSRF — «подделывает действие».

### Почему `dangerouslySetInnerHTML` опасен?

Он вставляет строку как HTML без экранирования React. Если туда попадёт пользовательский ввод (`<img onerror=...>`, `<script>` через обход и т.д.) — классический DOM/stored XSS. Имя намёкает: использовать только с доверенной/санитизированной разметкой.

### Что даёт CSP и что нет?

**CSP** ограничивает, откуда грузить скрипты/стили/фреймы, режет inline-скрипты (без nonce/hash), снижает ущерб от XSS.

Не заменяет экранирование вывода, не лечит логику авторизации и **не спасает** от всех XSS (особенно при `unsafe-inline` / слишком широких whitelist). Это defense in depth, не серебряная пуля.
