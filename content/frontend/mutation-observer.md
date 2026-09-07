---
title: Mutation Observer
summary: Mutation Observer — наблюдение за изменениями DOM: дети, атрибуты, текст — асинхронный колбэк пачкой мутаций.
---

## Для чего

Чтобы реагировать на изменения разметки (виджеты, third-party) без постоянного polling DOM.

## Пример

`new MutationObserver(muts => …).observe(root, { childList: true, subtree: true })`.

## Примечание

Не путать с мутацией объектов JS. Тяжёлый callback на частые мутации тормозит — фильтруйте и debounce'ьте работу.
