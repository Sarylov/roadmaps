---
title: Timeout
summary: Timeout — лимит ожидания ответа зависимости; по истечении отмена/ошибка, а не вечное зависание.
---

## Для чего

Чтобы один медленный downstream не забил пул потоков/соединений всего сервиса.

## Пример

HTTP-клиент к Payments: timeout 2s. Дальше — retry/backoff или fallback, не ждать минуту.

## Примечание

Timeouts должны уменьшаться к краю (budget). Без timeout circuit breaker и пулы работают плохо.
