/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  const newArr = [];

  arr.forEach(m => {
    if ((m % 3) === 0 || (m % 5) === 0) {
      newArr.push(m);
    }
  });

  if (newArr.length > 0) {
    return newArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
  }

  return 0;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  let regexResultArr = [];

  regexResultArr = str.match(/[CGTA]/g);

  if (regexResultArr) {
    return regexResultArr.length === str.length;
  }

  return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  const strArr = str.split('');

  const newStrArr = []

  strArr.forEach(letter => {
    if (letter === 'T') {
      newStrArr.push('A')
    }

    if (letter === 'A') {
      newStrArr.push('T')
    }

    if (letter === 'C') {
      newStrArr.push('G')
    }

    if (letter === 'G') {
      newStrArr.push('C')
    }
  });

  return newStrArr.join('');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");

  if (n === 1 || n < 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

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
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  const matrix = []
  const fullMatrix = []

  for (let i = 0; n > i; i++) {
    matrix.push(fill);
  }

  matrix.forEach(() => {
    fullMatrix.push(matrix);
  })

  return fullMatrix;
};

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
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");


  const rota = staff.map((m) => m.rota);
  const days = {};
  day = day.toLowerCase();

  rota.map((s) => {
    s.map((currentDay) => {
      currentDay = currentDay.toLowerCase();

      if (days[currentDay] === undefined) {
        days[currentDay] = 1;
      } else {
        days[currentDay] += 1;
      }
    })
  })

  if (days[day] && days[day] >= 3) {
    return true;
  }

  return false;
};
