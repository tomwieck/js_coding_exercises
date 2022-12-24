export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const bus = 40;
  return Math.ceil(people / bus);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  arr = arr.filter((a) => a === 'sheep')

  return arr.length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  const re = new RegExp('^[a-zA-Z][0-9]*$');

  let postcodeSplit = person.address.postCode.split(' ')[0];

  let result = re.test(postcodeSplit);

  return result;
}
