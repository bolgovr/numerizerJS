var assert = require('assert');

describe("Numerizer", function() {
  var numerizer = require('../');

  it('should parse single numbers', function (done) {
    assert.equal(parseInt(numerizer('one'), 10), 1);
    assert.equal(parseInt(numerizer('four'), 10), 4);
    assert.equal(parseInt(numerizer('six'), 10), 6);
    assert.equal(parseInt(numerizer('nine'), 10), 9);
    done();
  });

  it('should parse numbers above ten', function (done) {
      assert.equal(parseInt(numerizer('forty two'), 10), 42);
      assert.equal(parseInt(numerizer('fifty nine'), 10), 59);
      done();
  });
  it('should parse fractions', function (done) {
      assert.equal(parseFloat(numerizer('two and a half')), 2.5);
      assert.equal(parseFloat(numerizer('three quarters')), 0.75);
      done();
  });

  it('should parse numbers above hundred', function (done) {
    assert.equal(parseInt(numerizer('two hundred'), 10), 200);
    assert.equal(parseInt(numerizer('six hundred'), 10), 600);
    done();
  });
  it('should parse numbers above thousand', function (done) {
    assert.equal(parseInt(numerizer('two thousand'), 10), 2000);
    assert.equal(parseInt(numerizer('two millions'), 10), 2000000);
    done();
  });
  it('should parse all kind of numbers', function (done) {
    assert.equal(parseInt(numerizer('ninety nine thousand nine hundred ninety nine'), 10), 99999);
    assert.equal(parseInt(numerizer('one thousand two hundred'), 10), 1200);
    assert.equal(parseInt(numerizer('one thousand two hundred and fifteen'), 10), 1215);
    assert.equal(parseFloat(numerizer('one thousand two hundred and fifteen and a half')), 1215.5);
    done();
  });

});
