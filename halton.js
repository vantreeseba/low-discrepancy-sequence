const vanDerCorput = require('./van_der_corput.js');

/**
 * A 2D halton sequence generator.
 */
class haltonSequence {
  /**
   * Constructor
   *
   * @param {Number} [base1=2] The first base.
   * @param {Number} [base2=3] The second base.
   * @param {Number} [seed=1] The seed to start the sequence index with.
   */
  constructor(base1 = 2, base2 = 3, seed = 0) {
    this.gen1 = new vanDerCorput(base1, seed);
    this.gen2 = new vanDerCorput(base2, seed);
  }

  /**
   * Get the next 2d element from the halton sequence.
   * @return {Object} The element in form {x,y}.
   */
  getNext() {
    const x = this.gen1.getNext();
    const y = this.gen2.getNext();

    return {x, y};
  }
}

module.exports = haltonSequence;
