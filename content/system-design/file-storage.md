---
title: File storage
summary: File storage design — загрузка/хранение/раздача больших бинарников (S3/blob) + метаданные в БД.
---

## Для чего

Практика: direct upload, CDN, вирус-скан, права доступа, multipart для больших файлов.

## Пример

Клиент получает presigned URL → upload в S3 → callback → запись metadata. Download через CDN/signed URL.

## Примечание

Не гоните гигабайты через API-сервер. Отдельно: virus scan async, lifecycle cold storage, лимиты размера.
