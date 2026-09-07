---
title: State pattern
summary: State pattern — объект меняет поведение при смене внутреннего состояния; на фронте часто машины состояний (XState) или явный status union.
---

## Для чего

Чтобы убрать простыню `if (isLoading && !error && data)` и запрещённые переходы (submit дважды, edit в loading).

## Пример

`status: 'idle' | 'loading' | 'success' | 'error'` + переходы только по событиям.  
Или statechart: из `checkout` нельзя прыгнуть в `paid` без `payment_ok`.

## Примечание

Не путать с React `useState` и с Terraform state. Для сложных виджетов FSM читаемее набора булевых флагов.
