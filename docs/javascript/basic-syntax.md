---
sidebar_position: 3
title: 2.基本语法
---

# 基本语法

JavaScript 的执行单位为行（line），也就是一行一行地执行。一般情况下，每一行就是一个语句。

:::tip 提示
让JavaScript引擎自动在分号某种情况下会改变程序的语义，导致运行结果与期望不一致。在本教程中，我们不会省略，所有语句都会添加。
:::

例如，下面的一行代码就是一个完整的赋值语句：

```javascript
var x = 1;
``` {data-source-line="303"}

下面的一行代码是一个字符串，但仍然可以视为一个完整的语句：

```javascript
'Hello, world';
``` {data-source-line="309"}

下面的一行代码包含两个语句，每个语句用 `;` 表示语句结束：

```javascript
var x = 1; var y = 2; // 不建议一行写多个语句！
``` {data-source-line="315"}

## 语句块

语句块是一组语句的集合，例如，下面的代码先做了一个判断，如果判断成立，将执行 `{...}` 中的所有语句：

```javascript
if (2 > 1) {
  x = 1;
  y = 2;
  z = 3;
}
``` {data-source-line="327"}

:::note 注意
语句块中的语句应该适当缩进，通常使用 2 个或 4 个空格。
:::

## 注释

JavaScript 支持两种注释方式：

```javascript
// 单行注释

/*
  多行注释
  可以写多行
*/
``` {data-source-line="344"}