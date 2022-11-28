export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let newWords = [];

  words.forEach((word, index) => {
    if (index > 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    newWords.push(word);
  });

  return newWords.join('');
}

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let squares = [];

  nums.forEach((num => {
    let square = Math.pow(num, 2)
    squares.push(square);
  }));

  return squares;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let subjects = 0;

  people.forEach((p => {
    subjects += p.subjects.length
  }))

  return subjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let containsIngredient = false;

  menu.forEach(element => {
    if (element.ingredients.includes(ingredient)) {
      containsIngredient = true;
    }
  });

  return containsIngredient;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let matchingArr = [];

  arr1.forEach(element => {
    if (arr2.includes(element)) {
      matchingArr.push(element);
    }
  });

  let uniquematchingArr = [...new Set(matchingArr.sort())];

  return uniquematchingArr;
}