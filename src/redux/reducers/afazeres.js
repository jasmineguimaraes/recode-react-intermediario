const initial_state = {
    lista:[]
}

const afazeresReducer = (state = initial_state, action) => {
	switch (action.type) {
		case "ADD":
			return { 
                ...state,
                lista:state.lista.concat(action.payload)
            }
		case "REMOVE":
			return {
                ...state,
                lista: state.lista.filter((lista, i) => i!==action.payload)
            };
		default:
			return state;
	}
};

export default afazeresReducer;
