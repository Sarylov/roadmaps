---
title: Box model
summary: Box model — как считается размер элемента: content + padding + border (+ margin снаружи).
---

## Для чего

Чтобы понимать, почему блок «шире, чем width» и как считать раскладку.

## Пример

`width: 200px; padding: 20px; border: 1px` при `content-box` → визуально ~242px.  
`box-sizing: border-box` — width включает padding и border.

## Примечание

Margin collapse у вертикальных margin соседних блоков. `border-box` почти стандарт в современных проектах.

## Вопросы и ответы

### Чем content-box отличается от border-box?

content-box: width = только контент. border-box: width включает padding и border.

### Входит ли margin в width?

Нет, margin снаружи бокса. На размер «внутри» border не влияет.
