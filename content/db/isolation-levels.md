---
title: Isolation levels
summary: Isolation levels — насколько параллельные транзакции видят чужие незавершённые/промежуточные изменения (от Read Committed до Serializable).
---

## Для чего

Чтобы выбрать баланс: меньше аномалий чтения vs больше конфликтов и latency.

## Пример

Read Committed (дефолт Postgres): не видите dirty reads, но non-repeatable/phantom возможны.  
Serializable: эффект как у последовательного выполнения, возможны serialization failures → retry.

## Примечание

Выше изоляция ≠ всегда «лучше»: больше блокировок/ретраев. Поднимают точечно под инвариант, не глобально «на всякий».
