---
title: HTTP rate limiting
summary: Rate limiting защищает capacity и обеспечивает fair use. Алгоритм определяет burst, точность и поведение в распределённой системе.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Token bucket пополняет tokens со скоростью и допускает burst до ёмкости; sliding window точнее fixed window, но дороже. Ключом бывает user/API key, IP или tenant; ответ 429 включает понятный `Retry-After`.

## Что спрашивают

- Как работает HTTP rate limiting на практике?
- Какой типичный failure mode связан с HTTP rate limiting?
- Какие trade-offs важно назвать для HTTP rate limiting?

## Ответы

### Как работает HTTP rate limiting на практике?

Token bucket пополняет tokens со скоростью и допускает burst до ёмкости; sliding window точнее fixed window, но дороже. Ключом бывает user/API key, IP или tenant; ответ 429 включает понятный `Retry-After`.

### Какой типичный failure mode связан с HTTP rate limiting?

Лимит только по IP блокирует NAT и легко обходится botnet. Проверка после дорогого auth/DB не защищает ресурсы; несогласованные counters на instances умножают фактический предел.

### Какие trade-offs важно назвать для HTTP rate limiting?

Глобальный gateway-limit отсекает flood, service/operation-limit защищает конкретный ресурс. При недоступности counter store выбирают fail-open для обычного API или fail-closed для дорогой/опасной операции.
