const INITAL_STATE = [];
const changeTodoDoneState = (state, action) => {
    let todos = state.map(t => {
        if (t.name === action.payload.name) t.done = !action.payload.done
        return t
    })
    return todos
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'ADD':
            if (!state.map(t => t.name).includes(action.payload))
                return [...state, { name: action.payload, done: false }]
            else {
                return state
            }
        case 'DELETE':
              return [...state.filter(todo => todo.name !== action.payload)]
        case 'MARK_AS_DONE':
                return  changeTodoDoneState(state, action)
        case 'RESET':
                return  changeTodoDoneState(state, action)
        default:
            return state
    }
}
