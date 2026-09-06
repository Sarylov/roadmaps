---
title: semver
summary: "semver: Semver: MAJOR.MINOR.PATCH и ranges (^,~). Важно на собесе и в проде в контексте «npm / yarn / pnpm»."
---

## Зачем нужно

База уровня CORE. Сборка, пакеты, качество кода и delivery pipeline. DX и ловля ошибок до прода.

## Как работает

**semver**: Semver: MAJOR.MINOR.PATCH и ranges (^,~).

Major ломает API; caret пропускает minor.

Dependabot + тесты спасают от сюрпризов.

## Что спрашивают

- Объясните semver своими словами на примере из «npm / yarn / pnpm».
- Какие ошибки и edge cases связаны с semver?
- Какие альтернативы semver и когда они лучше?

## Ответы

### Объясните semver своими словами на примере из «npm / yarn / pnpm».

Semver: MAJOR.MINOR.PATCH и ranges (^,~). Держите структуру: проблема → механизм → пример. Dependabot + тесты спасают от сюрпризов.

### Какие ошибки и edge cases связаны с semver?

Major ломает API; caret пропускает minor. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы semver и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Dependabot + тесты спасают от сюрпризов.
