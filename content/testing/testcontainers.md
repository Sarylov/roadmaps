---
title: Testcontainers
summary: Testcontainers в блоке «Integration Testing» — нужно уметь объяснить механизм, риск и альтернативы.
---

## Зачем нужно

Частый KILLER-вопрос на собеседованиях. Проверка взаимодействия кода с БД, API и другими компонентами. Границы unit/integration/e2e и борьба с flaky.

## Как работает

**Testcontainers** — тема блока «Integration Testing» (testing). Проверка взаимодействия кода с БД, API и другими компонентами.

Типичная ошибка — использовать Testcontainers «по привычке» без понимания границ и failure modes в «Integration Testing».

Границы unit/integration/e2e и борьба с flaky.

## Что спрашивают

- Что такое Testcontainers и какую задачу закрывает?
- Какие ключевые абстракции Testcontainers нужно знать на собесе?
- Какие operational pitfalls у Testcontainers?

## Ответы

### Что такое Testcontainers и какую задачу закрывает?

**Testcontainers** — тема блока «Integration Testing» (testing). Проверка взаимодействия кода с БД, API и другими компонентами. Опишите место в стеке «Integration Testing». Границы unit/integration/e2e и борьба с flaky.

### Какие ключевые абстракции Testcontainers нужно знать на собесе?

Назовите 3–5 сущностей/операций и как они стыкуются. Типичная ошибка — использовать Testcontainers «по привычке» без понимания границ и failure modes в «Integration Testing».

### Какие operational pitfalls у Testcontainers?

Типичная ошибка — использовать Testcontainers «по привычке» без понимания границ и failure modes в «Integration Testing». Говорите про деплой, мониторинг, лимиты и failure modes, не только про happy path.
