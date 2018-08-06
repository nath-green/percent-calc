class Percent {
  static as (num1, num2, decimal = 2) {
    return ((100 / num2) * num1).toFixed(decimal)
  }

  static of (num1, num2, decimal = 2) {
    return ((num2 / 100) * num1).toFixed(decimal)
  }
}

module.exports = Percent
