export const calculator = (a: number, b: number) => a + b
export const calculatorMin = (a: number, b: number) => a - b
export const calculatorSub = (a: number, b: number) => a * b
export const calculatorDiv = (a: number, b: number) => a / b

type StateType = number


type ActionType = {
    type: 'SUM' | 'MIN' | 'SUB' | 'DIV'
    n: number
}

const allReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'SUM':
            return state + action.n
        case 'MIN':
            return state - action.n
        case'SUB':
            return state * action.n
        case 'DIV':
            return state / action.n
        default:
            return state
    }
}