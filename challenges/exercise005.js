export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const index = nums.indexOf(n);

  if (index < 0) {
    return null;
  }

  return nums[index + 1] || null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const zeroesAndOnes = {
    0: 0,
    1: 0,
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    zeroesAndOnes[char] += 1
  }

  return zeroesAndOnes;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  
  return parseFloat(n.toString().split('').reverse().join(''))
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.flat(2).reduce((a, b) => a + b, 0);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length > 1) {
    let firstNumber = arr.slice(0, 1);
    let lastNumber = arr.slice(-1);

    arr[0] = lastNumber[0];
    arr[arr.length - 1] = firstNumber[0];
  }

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let containsSearchTerm = false;

  for (let key in haystack) {
    if (typeof haystack[key] === 'string') {
      let lowerCaseKey = haystack[key].toLowerCase();
      let lowerCaseSearchTerm = searchTerm.toLowerCase()

      if (lowerCaseKey.includes(lowerCaseSearchTerm)) {
        containsSearchTerm = true;
      }
    }
  }

  return containsSearchTerm;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  str = str.replace(/[^a-zA-Z ]/g, "");
  const strArr = str.split(' ');
  const strObj = {}

  strArr.map((s) => {
    s = s.toLowerCase();

    if (strObj[s] === undefined) {
      strObj[s] = 1;
    } else {
      strObj[s] += 1;
    }
  })

  return strObj;
};
