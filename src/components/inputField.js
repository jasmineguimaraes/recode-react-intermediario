import React from "react";
import { connect } from "react-redux";
import { add_todo } from "../redux/actions";

class InputField extends React.Component {
	state = {
		afazeres: "",
	};

	handleChange = (e) => {
		this.setState({ afazeres: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.add_todo(this.state.afazeres);
		this.setState({ afazeres: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChange}
					type="text"
                    name="todo"
                    value={this.state.afazeres}
					placeholder="Digite sua tarefa"
				/>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	add_todo: (tarefa) => dispatch(add_todo(tarefa)),
});

export default connect(null, mapDispatchToProps)(InputField);
