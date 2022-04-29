// Multiple of index 8 kyu

function multipleOfIndex(array) {
    // good luck
    return array.filter((e, i) => e % i === 0)
  }

// CSV representation of array 8 kyu

function toCsvText(array) {
  // good luck
 return array.join('\n')
}

// Multiplication table for number 8 kyu

function multiTable(number) {
  // good luck
  return [1,2,3,4,5,6,7,8,9,10].map(item => `${item} * ${number} = ${item*number}`).join('\n')
}