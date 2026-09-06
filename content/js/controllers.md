---
title: Controllers в NestJS
summary: Controller в NestJS принимает транспортный запрос, извлекает входные данные и делегирует use case. Он не должен содержать SQL и основную бизнес-логику.
---

## Зачем нужно

Тема регулярно встречается на backend-интервью: сильный ответ связывает механизм с наблюдаемым поведением, отказами и production-решением.

## Как работает

Декораторы `@Controller`, `@Get`, `@Param` связывают метод с route. Guards выполняют допуск, pipes валидируют/преобразуют параметры, interceptors оборачивают вызов, filters отображают исключения в HTTP-ответ.

## Что спрашивают

- Как работает Controllers в NestJS на практике?
- Какой типичный failure mode связан с Controllers в NestJS?
- Какие trade-offs важно назвать для Controllers в NestJS?

## Ответы

### Как работает Controllers в NestJS на практике?

Декораторы `@Controller`, `@Get`, `@Param` связывают метод с route. Guards выполняют допуск, pipes валидируют/преобразуют параметры, interceptors оборачивают вызов, filters отображают исключения в HTTP-ответ.

### Какой типичный failure mode связан с Controllers в NestJS?

Толстый controller дублирует правила между HTTP, queue и CLI, плохо тестируется и смешивает статус-коды с доменом. Передача необработанного `Request` глубоко в сервис также связывает бизнес-слой с Nest/Express.

### Какие trade-offs важно назвать для Controllers в NestJS?

Controller отвечает за transport mapping: DTO → command и result → response. Use case отвечает за транзакцию и правила. Для нестандартного ответа можно использовать `@Res`, но это отключает часть платформенной абстракции.
