export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const result = nums.filter(num => num < 1);

  return result;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const newNames = names.filter(name => name.charAt(0) === char);

  return newNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = words.filter(word => word.slice(0, 3) === 'to ');

  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const ints = nums.filter(num => Number.isInteger(num));

  return ints;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const cities = [];

  users.forEach(element => {
    cities.push(element.data.city.displayName);
  });

  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = []

  nums.forEach(element => {
    element = Math.round( Math.sqrt(element) * 1e2 ) / 1e2;
    squareRoots.push(element);
  });

  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter(s => s.toLowerCase().includes(str.toLowerCase()));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = []

  triangles.forEach(element => {
    longestSides.push(Math.max(...element));
  });

  return longestSides;
}
