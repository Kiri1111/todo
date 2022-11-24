import {calculator, calculatorDiv, calculatorMin, calculatorSub} from './tasks'

test('calculate', () => {
    const a = 10
    const b = 20
    const res = calculator(a, b)
    expect(res).toBe(30)
})

test('minus', () => {
    expect(calculatorMin(20, 10)).toBe(10)
})
test('sub', () => {
    expect(calculatorSub(20, 2)).toBe(40)
})
test('div', () => {
    expect(calculatorDiv(20, 10)).toBe(2)
})