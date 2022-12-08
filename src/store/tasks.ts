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


// const [tasks, dispatchTasks] = useReducer(tasksReducer, [
//     {id: v1(), title: "HTML&CSS", isDone: true},
//     {id: v1(), title: "JS", isDone: true},
//     {id: v1(), title: "ReactJS", isDone: false},
//     {id: v1(), title: "Rest API", isDone: false},
//     {id: v1(), title: "GraphQL", isDone: false},
// ])
//
// function removeTask(id: string) {
//     // let filteredTasks = tasks.filter(t => t.id != id);
//     // setTasks(filteredTasks);
//     dispatchTasks(removeTaskAC(id))
// }
//
// function addTask(title: string) {
//     // let task = { id: v1(), title: title, isDone: false };
//     // let newTasks = [task, ...tasks];
//     // setTasks(newTasks);
//     dispatchTasks(addTaskAC(title))
// }


// import {TaskType} from "../Todolist";
// import {v1} from "uuid";
//
// export const tasksReducer = (state: TaskType[], action: TsarType) => {
//     switch (action.type) {
//         case'REMOVE-TASK': {
//             //  let filteredTasks = tasks.filter(t => t.id != id);
//             return state.filter(el => el.id !== action.payload.id)
//         }
//         case 'ADD-TASK': {
//             let task = {id: v1(), title: action.payload.title, isDone: false};
//
//             return [task, ...state]
//         }
//         default:
//             return state
//     }
// }
//
// type TsarType = RemoveTaskACType | addTaskACACType
// export type RemoveTaskACType = ReturnType<typeof removeTaskAC>
//
//
// export const removeTaskAC = (id: string) => {
//     return {
//         type: 'REMOVE-TASK',
//         payload: {id}
//     } as const
// }
// export type addTaskACACType = ReturnType<typeof addTaskAC>
// export const addTaskAC = (title: string) => {
//     return {
//         type: 'ADD-TASK',
//         payload: {
//             title
//         }
//     } as const



















