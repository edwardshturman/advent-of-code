/** Returns `true` if the given character is a digit, `false` otherwise. */
export function isDigit (c: string): boolean {
  if (c.length !== 1)
    return false
  return c >= '0' && c <= '9'
}

/** Picks the first and last digits from an array of digits. */
export function pickFirstAndLastDigits (digits: number[]): { first: number, last: number } {
  const firstAndLast: { first: number, last: number } = { first: -1, last: -1 }

  firstAndLast.first = digits[0]
  firstAndLast.last = digits[digits.length - 1]

  return firstAndLast
}

/** Contatenates two digits into one number. */
export function concatenateIntoNumber (digits: { first: number, last: number }): number {
  let number: number = 0
  let numberAsString: string = ''

  numberAsString += digits.first.toString()
  numberAsString += digits.last.toString()

  number = parseInt(numberAsString)

  return number
}

/** Finds the first digit from a given string. Returns the digit (or `-1` if none found) and the new string, which is the original string with the digit found, if any, removed. */
export function pluckFirstDigit (line: string): { plucked: number, newLine: string } {
  let plucked: number = -1
  let newLine: string = line
  if (isDigit(line[0])) {
    plucked = parseInt(line[0])
    newLine = line.substring(1)
  }

  return { plucked, newLine }
}

/** Finds the first digit as a word ("zero", "one", and so on) from a given string. Returns the numerical form of the digit (or `-1` if none found) and the new string, which is the original string with the digit word found, if any, removed. */
export function pluckFirstDigitWord (line: string): {plucked: number, newLine: string} {
  let plucked: number = -1
  let newLine: string = line

  const wordsToDigits = new Map<string, number>([
    ['zero', 0],
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9]
  ])

  for (const [key, value] of wordsToDigits)
    if (line.startsWith(key)) {
      plucked = value
      newLine = line.substring(key.length)
      break
    }

  return { plucked, newLine }
}

export function sum (input: string): number {
  let sum: number = 0

  for (let line of input.split('\n')) {
    if (line === '')
      continue
    const digits: number[] = []

    while (line !== '') {
      const firstDigit = pluckFirstDigit(line)
      if (firstDigit.plucked !== -1) {
        digits.push(firstDigit.plucked)
        line = firstDigit.newLine
      }
      const firstDigitWord = pluckFirstDigitWord(line)
      if (firstDigitWord.plucked !== -1) {
        digits.push(firstDigitWord.plucked)
        line = firstDigitWord.newLine
      }
      if (firstDigit.plucked === -1 && firstDigitWord.plucked === -1)
        line = line.substring(1)
    }

    const firstAndLast = pickFirstAndLastDigits(digits)
    const lineResult = concatenateIntoNumber(firstAndLast)
    sum += lineResult
  }

  return sum
}
