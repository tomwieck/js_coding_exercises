import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    
  /**
   * This function will receive an array of numbers and should return the sum
   * of any numbers which are a multiple of 3 or 5
   * @param {Array} arr
   * @returns {Number}
   */

  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(23);
    expect(sumMultiples([11, 22, 33, 44, 55, 66, 77, 88, 99])).toBe(253);
  });

  test("returns 0 if no numbers which are a multiple of 3 or 5 are passed in", () => {
    expect(sumMultiples([1, 2, 4, 7, 8, 11, 13])).toBe(0);
  });

});

describe("isValidDNA", () => {

  /**
   * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
   * @param {String} str
   * @returns {Boolean}
   */

  test("returns true if a valid DNA (CGTA) string is passed in", () => {
    expect(isValidDNA('CGTA')).toBe(true);
    expect(isValidDNA('CGTAGTAGGATC')).toBe(true);
    expect(isValidDNA('CCCCCCCCCGGGGGGGGTTTTTTTAAAAAAAAA')).toBe(true);
  });

  test("returns false if an invalid DNA (!CGTA) string is passed in", () => {
    expect(isValidDNA('test')).toBe(false);
    expect(isValidDNA('xCGTAGTAGGATC')).toBe(false);
    expect(isValidDNA('CCCCCCCCC GGGGGGGG TTTTTTT AAAAAAAAA')).toBe(false);
  });
});

describe("getComplementaryDNA", () => {

  /**
   * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
   * @param {String} str
   * @returns {String}
   */
  test("returns a string of the complementary base pairs (T <=> A, C <=> G)", () => {
    expect(getComplementaryDNA('CGTA')).toBe("GCAT");
    expect(getComplementaryDNA('CCCCGGGGTTTTAAAA')).toBe("GGGGCCCCAAAATTTT");
  });
});

describe("isItPrime", () => {

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */


  test("returns true if the number is a prime number", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(29)).toBe(true);
    expect(isItPrime(997)).toBe(true);
  });

  test("returns false if the number is not a prime number", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(30)).toBe(false);
    expect(isItPrime(1000)).toBe(false);
  });
});

describe("createMatrix", () => {

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */

  test("returns an array of n arrays, each filled with n item", () => {
    expect(createMatrix(3, 'foo')).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]);

    expect(createMatrix(5, 1)).toEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ]);
  });
});

describe("areWeCovered", () => {

  /**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */

  test("returns true if there are at least 3 staff memebers on the required day", () => {
    expect(areWeCovered([
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Steve", rota: ["Monday", "Sunday", "Tuesday", "Wednesday"] },
    ], 'Tuesday')).toBe(true);
  });

  test("returns false if there are less then 3 staff memebers on the required day", () => {
    expect(areWeCovered([
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Wednesday"] },
      { name: "Steve", rota: ["Monday", "Sunday", "Wednesday"] },
    ], 'Tuesday')).toBe(false);
  });
});
