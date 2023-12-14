import test from 'ava'
import { input } from './input.js'
import { concatenateNumbers, extractNumbersFromLine, isDigit, pickFirstAndLast, sum } from './1.js'

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

test('pickFirstAndLast picks first and last', t => {
  t.deepEqual(pickFirstAndLast(['1', '2', '3']), ['1', '3'])
  t.deepEqual(pickFirstAndLast(['1', '2', '3', '4']), ['1', '4'])
})

test('concatenateNumbers concatenates numbers', t => {
  t.is(concatenateNumbers(['1', '2']), 12)
  t.is(concatenateNumbers(['1', '2', '3']), 123)
})

test('extractNumbersFromLine extracts numbers', t => {
  t.deepEqual(extractNumbersFromLine('abc123'), ['1', '2', '3'])
  t.deepEqual(extractNumbersFromLine('abc123def456'), ['1', '2', '3', '4', '5', '6'])
})

test('sum sums numbers', t => {
  t.is(sum('a1bc\nab2c'), 33)
  t.is(sum('1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet'), 142)
  t.is(sum(input), 55090)
})
