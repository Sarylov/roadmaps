---
title: Contracts
summary: Contract между сервисами — согласованная схема API/события (OpenAPI, proto, AsyncAPI): поля, семантика, совместимость.
---

## Для чего

Чтобы изменения провайдера не ломали consumer'ов молча и проверялись в CI.

## Пример

Событие `order.created.v1` с обязательным `orderId`. Consumer contract test / schema registry ловит удаление поля.

## Примечание

Контракт шире JSON-формы: семантика и гарантии доставки. Версионируйте явно, предпочитайте backward-compatible изменения.
