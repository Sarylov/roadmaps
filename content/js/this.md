---
title: this
summary: this — контекст вызова функции: кто «владелец» вызова; у стрелок this лексический, не от call-site.
---

## Для чего

Чтобы методы объекта видели свои поля и не теряли контекст в колбэках.

## Пример

`obj.method()` → this = obj.  
`const f = obj.method; f()` → this = undefined (strict) / global.  
Стрелка берёт this снаружи; `bind` её не перешьёт.

## Примечание

Потеря this в `setTimeout(obj.method)` — классика; лечится bind/обёрткой/стрелкой в методе-свойстве.
