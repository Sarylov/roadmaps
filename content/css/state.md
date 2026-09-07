---
title: Terraform state
summary: Terraform state — снимок сопоставления ресурсов в облаке с конфигурацией; нужен для plan и хранения метаданных.
---

## Для чего

Чтобы Terraform знал, что уже создано, и считал diff, а не пытался создать всё заново.

## Пример

Remote state в S3 + DynamoDB lock. `plan` видит: изменить instance type, не пересоздать всю VPC.

## Примечание

State содержит секреты/ids — доступ строго. Порча state опасна; бэкапы и lock от параллельных apply обязательны. (В roadmap ref `css/state`.)
