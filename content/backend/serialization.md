---
title: Serialization
summary: Serialization — превращение объекта ответа в JSON (или другой формат) по схеме: какие поля уйдут клиенту.
---

## Для чего

Чтобы быстро и предсказуемо отдавать response, отрезая лишние/секретные поля.

## Пример

Response schema Fastify: в объекте есть `passwordHash`, в JSON клиенту его нет — сериализатор выкинул незаявленное поле.

## Примечание

Во Fastify schema-based serialization быстрее «ручного» `JSON.stringify` всего подряд и служит контрактом API. Не путать с deserialization входа (это validation/парсинг body).
