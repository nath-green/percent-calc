const assert = require('chai').assert
const percent = require('../index')

describe('Percentage functions', function () {
  it('Percent of', function () {
    let result = percent.of(40, 60)
    assert.equal(result, 24)
    assert.typeOf(result, 'number')
  })

  it('As percent of', function () {
    let result = percent.as(30, 60)
    assert.equal(result, 50)
    assert.typeOf(result, 'number')
  })

  it('As percent of (with symbol)', function () {
    let result = percent.as(30, 60, true)
    assert.equal(result, '50%')
    assert.typeOf(result, 'string')
  })
})
