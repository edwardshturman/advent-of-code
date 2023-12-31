import test from 'ava'
import { firstTen, input, lastTen } from './input.js'
import {
  concatenateIntoNumber,
  isDigit,
  pickFirstAndLastDigits,
  pluckFirstDigit,
  pluckFirstDigitWord,
  sum
} from './2.js'

test('isDigit identifies digits', t => {
  t.is(isDigit('0'), true)
  t.is(isDigit('1'), true)
  t.is(isDigit('9'), true)
})

test('isDigit identifies non-digits', t => {
  t.is(isDigit('10'), false)
  t.is(isDigit('a'), false)
  t.is(isDigit('ab'), false)
  t.is(isDigit('$'), false)
})

test('pluckFirstDigit plucks first digit', t => {
  t.deepEqual(pluckFirstDigit('123'), { plucked: 1, newLine: '23' })
})

test('pluckFirstDigit plucks nothing if no digit', t => {
  t.deepEqual(pluckFirstDigit('abc123'), { plucked: -1, newLine: 'abc123' })
})

test('pluckFirstDigitWord plucks first digit word', t => {
  t.deepEqual(pluckFirstDigitWord('one'), { plucked: 1, newLine: '' })
})

test('pluckFirstDigitWord plucks nothing if no digit word', t => {
  t.deepEqual(pluckFirstDigitWord('abc123'), { plucked: -1, newLine: 'abc123' })
})

test('pickFirstAndLastDigits picks first and last', t => {
  t.deepEqual(pickFirstAndLastDigits([1, 2, 3]), { first: 1, last: 3 })
  t.deepEqual(pickFirstAndLastDigits([1, 2, 3, 4]), { first: 1, last: 4 })
})

test('concatenateIntoNumber concatenates digits', t => {
  t.is(concatenateIntoNumber({ first: 1, last: 2 }), 12)
})

test('sum extracts numerical values', t => {
  t.is(sum('a1bc\nab2c'), 33)
})

test('sum extracts digit words', t => {
  t.is(sum('oneabc\nabctwo'), 33)
})

test('sum completes the part 1 example', t => {
  t.is(sum('1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet'), 142)
})

test('sum completes the part 2 example', t => {
  t.is(sum('two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen\n'), 281)
})

test('sum handles empty lines', t => {
  t.is(sum(''), 0)
  t.is(sum('\n\n\n'), 0)
})

test('sum handles first and last ten lines of input', t => {
  t.is(sum(firstTen), 582)
  t.is(sum(lastTen), 413)
})

test('sum handles lines with just one digit', t => {
  t.is(sum('1a'), 11)
  t.is(sum('a1'), 11)
  t.is(sum('aoneb'), 11)
})

test('sum handles lines with just digits', t => {
  t.is(sum('12345'), 15)
  t.is(sum('onetwothreefourfive'), 15)
})

test.failing('sum handles lines with no digits', t => {
  t.is(sum('abc\ndef'), 0)
})

test.failing('sum completes the part 2 challenge', t => {
  t.true(sum(input) < 54871) // Advent of Code says the answer is less than this
})
