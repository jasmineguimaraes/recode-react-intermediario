export const increment = (value) =>{
    return {
        type: 'INCREMENT',
        payload: value
    }
}

export const decrement = (value) =>{
    return {
        type: 'DECREMENT',
        payload: value
    }
}

export const log_in = () =>{
    return {
        type: 'LOG_IN'
    }
}

export const add_todo = (tarefa) =>{
    return{
        type: 'ADD',
        payload: tarefa
    }
}

export const remove = (index) =>{
    return{
        type: 'REMOVE',
        payload: index
    }
}