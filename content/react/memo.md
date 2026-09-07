---
title: memo
summary: React.memo — HOC/обёртка: пропускает ререндер, если props浅Equal (Object.is по полям) не изменились.
---

## Для чего

Чтобы дорогой child не перерисовывался при каждом ререндере родителя без смены props.

## Пример

`export default memo(ExpensiveList)`  
Родитель ререндерится, но `items` и колбэки те же ссылки → child пропускает render.

## Примечание

Новые inline-функции/объекты в props каждый раз убивают memo — нужны useCallback/useMemo или стабильные props. Не замена правильному разбиению state.
