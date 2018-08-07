## Percent Calculator

Basic helper functions for percentage based calculations

### Installation

`npm install percent-calc`

`import percent from 'percent-calc'` or `const percent = require('percent-calc')`

------

### Usage

#### as()

What is `num1` as a percentage of `num2`

What is `20` as a percentage of `80`

`percent.as(20, 80) // 25.00`

Params:
* num1
* num2
* decimal (optional, default 2)

#### of()

What is `num1`% of `num2`

What is `23`% of `62`

`percent.of(23, 62) // 14.26`

Params:
* num1
* num2
* decimal (optional, default 2)

#### ofWhat()

`num1`% of what is `num2`

`30`% of what is `150`

`percent.ofWhat(30, 150) // 500.00`

Params:
* num1
* num2
* decimal (optional, default 2)