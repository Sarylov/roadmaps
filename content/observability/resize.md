---
title: Resize Observer
summary: Resize Observer — колбэк при изменении размера элемента (не только окна).
---

## Для чего

Чтобы адаптировать чарты/виртуальные списки/layout внутри контейнера без `window.resize` хаков.

## Пример

`new ResizeObserver(entries => { const { width } = entries[0].contentRect })` на контейнере графика.

## Примечание

Не читайте layout синхронно в цикле записей так, чтобы снова триггерить resize — риск loop. Для окна — ещё `visualViewport`.
