---
title: Slots
summary: Slots — именованные дырки для вставки контента (`children`, `header`/`footer` props, compound parts) без жёсткой вёрстки внутри.
---

## Для чего

Чтобы переиспользовать каркас (Modal, Card, Layout), а разметку содержимого оставлять вызывающему.

## Пример

`<Modal title="…" footer={<Actions/>}>{body}</Modal>`  
Или `Modal.Header` / `Modal.Body` как compound slots.

## Примечание

Слишком много слотов = размытый API. Документируйте, что обязательно и кто за focus/a11y отвечает.
