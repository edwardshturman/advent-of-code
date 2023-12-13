import { concatenateNumbers, extractNumbersFromLine, isDigit, pickFirstAndLast, sum } from './1.js'

function testDayOne () {
  const testData = [
    { function: isDigit, input: '1', expected: true, result: isDigit('1') },
    { function: isDigit, input: 'a', expected: false, result: isDigit('a') },

    { function: pickFirstAndLast, input: ['1', '2', '3'], expected: ['1', '3'], result: pickFirstAndLast(['1', '2', '3']) },
    { function: pickFirstAndLast, input: ['1', '2', '3', '4'], expected: ['1', '4'], result: pickFirstAndLast(['1', '2', '3', '4']) },

    { function: concatenateNumbers, input: ['1', '2'], expected: 12, result: concatenateNumbers(['1', '2']) },
    { function: concatenateNumbers, input: ['1', '2', '3'], expected: 123, result: concatenateNumbers(['1', '2', '3']) },

    { function: extractNumbersFromLine, input: 'abc123', expected: ['1', '2', '3'], result: extractNumbersFromLine('abc123') },

    { function: sum, input: '1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet', expected: 142, result: sum('1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet') }
  ]

  console.table(testData)
}

testDayOne()
