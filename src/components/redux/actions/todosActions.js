export const add = todo =>{
    return{
        type: 'ADD',
        payload: todo,
    }
}
export const deleteTodo = todoName =>{
    return{
        type: 'DELETE',
        payload: todoName,
    }
}

export const markTodoAsDone = todo => {
    return{
        type: 'MARK_AS_DONE',
        payload: todo
    }
}

export const resetTodo = todo => {
    return{
        type: 'RESET',
        payload: todo
    }
}