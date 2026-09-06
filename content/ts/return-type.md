---
title: Utility type ReturnType
summary: ReturnType<T> извлекает возвращаемый тип функции через conditional type и infer. Он помогает синхронизировать производные типы с реализацией.
---

## Зачем нужно

Utility полезен, когда функция — источник истины, например factory или selector. Чрезмерное использование может связать публичный API с деталями реализации.

## Как работает

`ReturnType<T>` использует условный тип `T extends (...args: any) => infer R ? R : any`. Для `async`-функции результатом будет `Promise<X>`; внутреннее значение получают через `Awaited<ReturnType<T>>`. Для overload signatures TypeScript обычно извлекает return type последней, наиболее общей сигнатуры, а не выбирает overload по аргументам.

## Что спрашивают

- Как работает infer в ReturnType?
- Что вернёт ReturnType для async-функции?
- Как ReturnType работает с overload?

## Ответы

### Как работает infer в ReturnType?

В conditional type `infer R` объявляет переменную типа в позиции результата функции. Если `T` подходит сигнатуре, TypeScript подставляет найденный тип `R`.

### Что вернёт ReturnType для async-функции?

`Promise<ResolvedValue>`, потому что именно это возвращает функция. Для типа resolved-значения используют `Awaited<ReturnType<typeof fn>>`.

### Как ReturnType работает с overload?

Он не моделирует конкретный вызов; вывод делается из последней сигнатуры overload, обычно самой широкой. Если нужен точный вариант, лучше явно экспортировать соответствующий тип.
