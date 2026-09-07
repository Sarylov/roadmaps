---
title: Controllers (NestJS)
summary: Controller в NestJS — класс с декораторами маршрутов (`@Get`, `@Post`): принимает HTTP и вызывает сервисы.
---

## Для чего

Чтобы держать HTTP-границу тонкой: парсинг/статус/DTO → сервис, без SQL и бизнес-правил в контроллере.

## Пример

```ts
@Get(':id')
findOne(@Param('id') id: string) {
  return this.usersService.findById(id);
}
```

## Примечание

Толстый контроллер — smell. Валидация часто в pipes, доступ — в guards, обёртка ответа — в interceptors.
