---
title: Tradeoffs
summary: Tradeoffs — явный обмен качествами в дизайне: скорость vs сложность, consistency vs UX, bundle vs фичи.
---

## Для чего

Чтобы на system design и в архитектуре фронта называть цену решения, а не только плюсы.

## Пример

SSR лучше SEO/LCP, дороже infra и риск hydration mismatch.  
Глобальный store удобен, повышает связность. Кэш API — быстрее UI, eventual stale.

## Примечание

Хороший ответ на собесе: «выбрал X, потому что Y важнее Z в этих constraints».
