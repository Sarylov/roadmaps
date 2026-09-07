---
title: Terraform
summary: Terraform — IaC инструмент: декларативно описываете облачные ресурсы, plan/apply приводит инфраструктуру к желаемому state.
---

## Для чего

Чтобы сети, БД, IAM и кластеры воспроизводились из кода, а не из кликов в консоли.

## Пример

`aws_db_instance` + `aws_eks_cluster` в `.tf` → `terraform plan` → `apply`. Один модуль VPC на все env.

## Примечание

State — источник правды Terraform; храните удалённо с lock. Не правьте вручную то, чем владеет Terraform, без reconcile.
