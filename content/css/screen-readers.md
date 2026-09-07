---
title: Screen readers
summary: Screen reader — AT, озвучивающая/показывающая интерфейс через accessibility tree (роли, имена, состояния).
---

## Для чего

Чтобы понимать, как незрячие пользователи «видят» страницу, и проверять семантику/ARIA.

## Пример

NVDA/VoiceOver: список заголовков, landmarks, форм-контролы по имени из label. Картинка без alt — «image» без смысла.

## Примечание

Тестируйте реальным SR, не только axe. Визуально скрытый текст (`sr-only`) ≠ `display:none` (последний часто выкидывают из a11y tree).

## Вопросы и ответы

### Откуда SR берёт имя кнопки?

Accessible name: содержимое, `aria-label`, `aria-labelledby`, связанный label — по правилам name computation.

### Почему decorative image с alt=""?

Пустой alt помечает декоратив — SR пропускает; без alt может читать URL файла.
