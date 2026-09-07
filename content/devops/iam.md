---
title: IAM
summary: IAM (Identity and Access Management) — кто (user/role) какие действия может делать с какими облачными ресурсами.
---

## Для чего

Чтобы не раздавать root-ключи и давать сервисам минимальные права (least privilege).

## Пример

Роль EC2/EKS: `s3:GetObject` только на свой bucket. Человек — SSO в роль `Developer`, не долгоживущий access key в git.

## Примечание

Policies = allow/deny на actions+resources. Путаница user vs role vs service account — частый вопрос. Секреты приложений ≠ IAM user в коде.
