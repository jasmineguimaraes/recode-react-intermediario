import React from "react";
import { connect } from "react-redux";

import InputField from "./inputField";
import Tarefa from "./tarefa";

const AfazeresList = ({ afazeres }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "200px",
				margin: "0 auto",
				height: "200px",
				overflowY: "auto",
				overflowX: "hidden",
			}}
		>
			<InputField />
			{afazeres.map((tarefa, i) => (
				<Tarefa key={i} tarefa={tarefa} index={i} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	afazeres: state.afazeres.lista,
});

export default connect(mapStateToProps)(AfazeresList);
