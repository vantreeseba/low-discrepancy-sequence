const {assert} = require('chai');
const index = require('../index');

/*
 * EXAMPLE TABLE showing correct values.
I (decimal)	I (binary)	R (binary)	R (decimal)
0	          0	          .0          0.0
1	          1	          .1	        0.5
2	          10	        .01	        0.25
3	          11	        .11	        0.75
4	          100	        .001	      0.125
5	          101	        .101	      0.625
6	          110	        .011	      0.375
7	          111	        .111	      0.875
8	          1000	      .0001	      0.0625
*/

testCases = [
  {i: 0, r: 0},
  {i: 1, r: 0.5},
  {i: 2, r: 0.25},
  {i: 3, r: 0.75},
  {i: 4, r: 0.125},
  {i: 5, r: 0.625},
  {i: 6, r: 0.375},
  {i: 7, r: 0.875},
  {i: 8, r: 0.0625},
];

var tests = {
  halton: {
    'should create a generator': () => {
      const gen = new index.halton();
      assert.isOk(gen);
    },
  },
};

testCases.forEach(({i, r}) => {
  tests.halton[`In base 2 given index ${i} should output ${r}`] = () => {
    const gen = new index.halton(2, 3, i);
    const result = gen.getNext();
    assert.equal(result.x, r);
  };
});

module.exports = tests;
