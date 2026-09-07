---
title: Iterables
summary: Iterable — объект с протоколом итерации (`[Symbol.iterator]`), по которому ходят `for…of`, spread, деструктуризация массивов.
---

## Для чего

Чтобы единообразно обходить коллекции и писать свои последовательности (генераторы).

## Пример

Массивы, Map, Set, строки — iterable.  
`for (const x of set)`, `[...map.keys()]`.

## Примечание

Iterator ≠ Iterable: iterable умеет отдать iterator. Генераторы реализуют оба. Не все array-like iterable (`NodeList` — да в современных браузерах).
