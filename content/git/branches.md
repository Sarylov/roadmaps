---
title: branches
summary: "branches: Ветвление: trunk-based vs long-lived feature. Важно на собесе и в проде в контексте «Git»."
---

## Зачем нужно

База уровня CORE. Сборка, пакеты, качество кода и delivery pipeline. Безопасная история и командный workflow.

## Как работает

**branches**: Ветвление: trunk-based vs long-lived feature.

Долгие ветки = ад merge.

Защищённый main + PR reviews.

## Что спрашивают

- Объясните branches своими словами на примере из «Git».
- Какие ошибки и edge cases связаны с branches?
- Какие альтернативы branches и когда они лучше?

## Ответы

### Объясните branches своими словами на примере из «Git».

Ветвление: trunk-based vs long-lived feature. Держите структуру: проблема → механизм → пример. Защищённый main + PR reviews.

### Какие ошибки и edge cases связаны с branches?

Долгие ветки = ад merge. Назовите симптом в проде и как поймать тестом или метрикой.

### Какие альтернативы branches и когда они лучше?

Сравните минимум два подхода по сложности, perf и риску. Защищённый main + PR reviews.
