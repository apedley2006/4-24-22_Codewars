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

// Type of sum 8 kyu

const typeOfSum = (a, b) => typeof (a + b)

// Array plus array 8 kyu

function arrayPlusArray(arr1, arr2) {
  let arr3 = arr1.map((num, idx) => num + arr2[idx])
  
  return arr3.reduce((a, b) => a+b)
}

// Can we divide it? 8 kyu

function isDivideBy(number, a, b) {
  // good luck
  if (number % a === 0 && number % b === 0) {
    return true
  } else {
    return false
  }
}

// The falling speed of petals

const sakuraFall = v => v > 0 ? 400 / v : 0