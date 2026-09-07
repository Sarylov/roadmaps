---
title: Fake timers
summary: Fake timers в тестах — подмена `setTimeout`/`Date` (Jest/Vitest), чтобы не ждать реальные задержки.
---

## Для чего

Чтобы детерминированно тестировать debounce, toast, анимации и retry без flaky sleep.

## Пример

`vi.useFakeTimers()` → вызвать debounce → `vi.advanceTimersByTime(300)` → assert. В `afterEach` — `useRealTimers()`.

## Примечание

Забыли вернуть real timers — ломаются следующие тесты. С RTL часто нужен `await act(async () => { vi.runAllTimers() })`.
