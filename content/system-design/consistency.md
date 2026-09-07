---
title: Consistency
summary: Consistency в distributed sense — насколько все клиенты/реплики видят одни и те же данные в один момент (strong vs eventual).
---

## Для чего

Чтобы выбрать модель под домен: деньги vs счётчик лайков.

## Пример

Баланс счёта — strong/линейная в одном primary. Счётчик просмотров — eventual, допустим лаг.

## Примечание

CAP/PACELC: при partition жертвуете C или A. «Сильная везде» дорого и бьёт availability.
