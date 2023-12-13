export function isDigit(c: string): boolean {
    return c >= '0' && c <= '9'
}

export function pickFirstAndLast(numbers: string[]): string[] {
    const firstAndLast: string[] = []

    firstAndLast.push(numbers[0])
    firstAndLast.push(numbers[numbers.length - 1])

    return firstAndLast
}

export function concatenateNumbers(numbers: string[]): number {
    let number: number = 0
    let numberAsString: string = ''

    for (const character of numbers)
        numberAsString += character

    number = parseInt(numberAsString)

    return number
}

export function extractNumbersFromLine(line: string): string[] {
    const numbers: string[] = []
    for (let i = 0; i < line.length; i++)
        if (isDigit(line[i]))
            numbers.push(line[i])

    return numbers
}

export function sum(input: string): number {
    let sum: number = 0

    for (const line of input.split('\n')) {
        const numbers = extractNumbersFromLine(line)
        const firstAndLast = pickFirstAndLast(numbers)
        const lineResult = concatenateNumbers(firstAndLast)
        sum += lineResult
    }

    return sum
}
