---
title: Dockerfile
summary: Dockerfile декларативно собирает OCI image слоями. Хороший production-файл обеспечивает воспроизводимость, кэширование, минимальную поверхность атаки и корректный PID 1.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Сначала копируют lockfile и устанавливают pinned dependencies, затем исходники и build. `COPY` создаёт слой, `RUN` выполняется при build, `CMD` задаёт default command; `.dockerignore` исключает secrets и лишний context.

## Что спрашивают

- Как работает Dockerfile на практике?
- Какой типичный failure mode связан с Dockerfile?
- Какие trade-offs важно назвать для Dockerfile?

## Ответы

### Как работает Dockerfile на практике?

Сначала копируют lockfile и устанавливают pinned dependencies, затем исходники и build. `COPY` создаёт слой, `RUN` выполняется при build, `CMD` задаёт default command; `.dockerignore` исключает secrets и лишний context.

### Какой типичный failure mode связан с Dockerfile?

`latest`, неприкреплённый base image и `npm install` без lock делают сборку неповторяемой. Root-процесс, скопированный `.env` и shell-form CMD ухудшают безопасность и обработку SIGTERM.

### Какие trade-offs важно назвать для Dockerfile?

Используют digest/pinned version, `npm ci`, non-root `USER`, exec-form `CMD` и multi-stage. Секреты передают BuildKit secret/runtime secret, а не `ARG` или слой image.
