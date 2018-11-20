const {assert} = require('chai');
const index = require('../index');

module.exports = {
  index: {
    'Should expose van_der_corput and halton': () => {
      assert.isOk(index.vanDerCorput);
      assert.isOk(index.halton);
    },
  },
};
