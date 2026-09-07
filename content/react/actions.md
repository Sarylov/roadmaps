---
title: Actions
summary: React Actions / Server Actions — функции мутаций (часто на сервере), вызываемые из форм/`action`, с pending-состоянием на клиенте.
---

## Для чего

Чтобы упростить POST-формы и мутации без ручного wiring API-route + fetch + useState loading.

## Пример

`<form action={createPost}>` или `useActionState` / `useFormStatus` для pending/ошибок. На сервере — запись в БД + revalidate.

## Примечание

Нужна auth/валидация на сервере. Не путать с Redux actions. Идемпотентность и CSRF-защита — по правилам фреймворка.
