/**
 * A Van der Corput sequence generator.
 */
class vanDerCorput {
  /**
   * Constructor
   * @param {Number} [base=2] The base.
   * @param {Number} [index=1] The index to start the sequence with.
   */
  constructor(base = 2, index = 0) {
    this.base = base;
    this.index = index;
  }

  /**
   * Compute the given result at an index and base.
   * @param {Number} i The index.
   * @param {Number} b The base.
   * @return {Number} The computed value of the element at the index and base.
   */
  compute(i, base) {
    var result = 0, denom = 1;
    while (i) {
      result += (i % base) / (denom *= base);
      i = (i/base)>>>0; // Shift right to get rid of excess digets from flip.
    }
    return result;
  }

  /**
   * Get the next element from the sequence.
   * @return {Number} The next element.
   */
  getNext() {
    const result = this.compute(this.index, this.base);
    this.index++;
    return result;
  }
}

module.exports = vanDerCorput;
