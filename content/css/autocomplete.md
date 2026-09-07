---
title: Autocomplete
summary: Autocomplete — подсказки браузера по полям формы (`autocomplete="email"`, `current-password`) и UX автозаполнения.
---

## Для чего

Чтобы пароли/адреса подставлялись безопасно и быстрее, а менеджеры паролей понимали поля.

## Пример

`autocomplete="username"`, `autocomplete="new-password"` на регистрации, `current-password` на логине.

## Примечание

Неправильные значения ломают password managers. `autocomplete="off"` часто игнорируют на login — лучше корректные токены.

## Вопросы и ответы

### Зачем autocomplete, если есть свой UI?

Браузерный менеджер паролей и автозаполнение ОС опираются на стандартные токены — это и безопасность, и UX.

### Чем new-password отличается от current-password?

`new-password` — создание/смена; `current-password` — вход с существующим.
