const assert = require('chai').assert
const percent = require('../index')

describe('as', function () {
  it('40 as a percent of 60', function () {
    let result = percent.as(40, 60)
    assert.equal(result, 66.67)
  })

  it('55 as a percent of 65', function () {
    let result = percent.as(55, 65)
    assert.equal(result, 84.62)
  })

  it('three decimal', function () {
    let result = percent.as(55, 65, 3)
    assert.equal(result, 84.615)
  })
})

describe('of', function () {
  it('40% of 60', function () {
    let result = percent.of(40, 60)
    assert.equal(result, 24.00)
  })

  it('55% of 65', function () {
    let result = percent.of(55, 65)
    assert.equal(result, 35.75)
  })

  it('three decimal', function () {
    let result = percent.of(31, 33, 3)
    assert.equal(result, 10.230)
  })
})

describe('of what', function () {
  it('30% of what is 150', function () {
    let result = percent.ofWhat(30, 150)
    assert.equal(result, 500.00)
  })

  it('60% of what is 175', function () {
    let result = percent.ofWhat(60, 175)
    assert.equal(result, 291.67)
  })

  it('three decimal', function () {
    let result = percent.ofWhat(60, 175, 3)
    assert.equal(result, 291.667)
  })
})
