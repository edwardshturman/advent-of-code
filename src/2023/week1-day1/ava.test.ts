import test from 'ava'
import { concatenateNumbers, extractNumbersFromLine, isDigit, pickFirstAndLast, sum } from './1.js'

test('isDigit identifies a digit', t => {
  t.is(isDigit('1'), true)
})

test('isDigit identifies a non-digit', t => {
  t.is(isDigit('a'), false)
})

test('pickFirstAndLast picks first and last', t => {
  t.deepEqual(pickFirstAndLast(['1', '2', '3']), ['1', '3'])
})

test('concatenateNumbers concatenates numbers', t => {
  t.is(concatenateNumbers(['1', '2']), 12)
})

test('extractNumbersFromLine extracts numbers', t => {
  t.deepEqual(extractNumbersFromLine('abc123'), ['1', '2', '3'])
})

test('sum sums numbers', t => {
  t.is(sum('1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet'), 142)
})
