---
title: file storage
summary: "file storage: Object storage (S3), presigned URL, вирус-скан. Важно на собесе и в проде в контексте «System Design Practice»."
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Практика проектирования реальных распределённых систем. Цифры, bottleneck и явные trade-offs.

## Как работает

**file storage**: Object storage (S3), presigned URL, вирус-скан.

Метаданные в БД, байты в object store.

Multipart и CDN.

## Что спрашивают

- Объясните file storage своими словами на примере из «System Design Practice».
- Какие ошибки и edge cases связаны с file storage?
- Какие альтернативы file storage и когда они лучше?

## Ответы

### Объясните file storage своими словами на примере из «System Design Practice».

Object storage (S3), presigned URL, вирус-скан. Держите структуру: проблема → механизм → пример. Multipart и CDN.

### Какие ошибки и edge cases связаны с file storage?

Метаданные в БД, байты в object store. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы file storage и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Multipart и CDN.
