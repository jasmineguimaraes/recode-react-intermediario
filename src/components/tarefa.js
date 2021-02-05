import React from "react";
import { connect } from "react-redux";

import { remove } from "../redux/actions";


const Tarefa = ({ tarefa, index, remove }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
                justifyContent: "space-between",
                border:'1px solid #faebd7',
                padding:'5px',
			}}
		>
			<div>{tarefa}</div>
            <div style={{cursor: 'pointer'}} onClick= {() => remove(index)}>X</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	remove: (index) => dispatch(remove(index)),
});


export default connect(null, mapDispatchToProps)(Tarefa);
