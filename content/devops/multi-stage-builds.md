---
title: Multi-stage Docker builds
summary: Multi-stage build отделяет компиляцию от runtime image. В итоговый образ попадают только артефакты и production-зависимости, а не toolchain и исходные секреты.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Несколько `FROM` создают stages; `COPY --from=builder` переносит `dist` и нужные файлы. Builder содержит TypeScript/compiler и devDependencies, runtime использует меньший base с Node и запускается non-root.

## Что спрашивают

- Как работает Multi-stage Docker builds на практике?
- Какой типичный failure mode связан с Multi-stage Docker builds?
- Какие trade-offs важно назвать для Multi-stage Docker builds?

## Ответы

### Как работает Multi-stage Docker builds на практике?

Несколько `FROM` создают stages; `COPY --from=builder` переносит `dist` и нужные файлы. Builder содержит TypeScript/compiler и devDependencies, runtime использует меньший base с Node и запускается non-root.

### Какой типичный failure mode связан с Multi-stage Docker builds?

Слепое копирование всего `node_modules` переносит devDependencies и native binary под другую libc/архитектуру. Minimal image без CA certificates или shell осложняет HTTPS и диагностику.

### Какие trade-offs важно назвать для Multi-stage Docker builds?

Build и runtime должны быть ABI-совместимы; production dependencies устанавливают отдельно. Distroless уменьшает attack surface, но slim удобнее для эксплуатации — выбор фиксируют через security и debug requirements.
