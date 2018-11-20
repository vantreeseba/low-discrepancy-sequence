const vanDerCorput = require('./van_der_corput.js');

/**
 * A 2D halton sequence generator.
 */
class haltonSequence {
  /**
   * Constructor
   *
   * @param {Array} [bases=[2,3]] A Vector representing the bases of the sequence.
   * @param {Number} [seed=1] The seed to start the sequence index with.
   */
  constructor(bases = [2, 3], seed = 0) {
    this.generators = [];
    for(let i = 0; i < bases.length; i++) {
      this.generators.push(new vanDerCorput(bases[i], seed));
    }
  }

  /**
   * Get the next 2d element from the halton sequence.
   * @return {Object} The element in form {x,y}.
   */
  getNext() {
    return this.generators.map(g => g.getNext());
  }
}

module.exports = haltonSequence;
