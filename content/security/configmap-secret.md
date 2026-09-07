---
title: ConfigMap / Secret
summary: ConfigMap — несекретный конфиг в K8s; Secret — чувствительные данные (тоже объекты API, но для credential-ов).
---

## Для чего

Чтобы отделять конфиг/секреты от образа и менять env без rebuild.

## Пример

ConfigMap: `LOG_LEVEL=info`. Secret: `DATABASE_URL`. Подключают как env или volume в Pod.

## Примечание

Secret по умолчанию base64, не шифрование at rest без настройки. RBAC и sealed-secrets/external secrets — для прода. Не коммитьте манифесты с живыми паролями.
