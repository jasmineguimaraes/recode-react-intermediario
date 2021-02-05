import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, log_in} from "./redux/actions";
import AfazeresList from "./components/afazeresList";


function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<br />
			<h1>Counter {counter}</h1>
			<button onClick={() => dispatch(decrement(5))}>-5</button>
			<button onClick={() => dispatch(decrement(1))}>-</button>
			<button onClick={() => dispatch(increment(1))}>+</button>
			<button onClick={() => dispatch(increment(5))}>+5</button>
			<br />
			<br />

			{isLogged ? (
				<div>
					<h3>Logged</h3>
					<button onClick={() => dispatch(log_in())}>Log Out</button>
					<br/>
					<h1 style={{ textDecoration: 'underline' }}>Afazeres</h1>
					<AfazeresList/>
				</div>
			) : (
				<button onClick={() => dispatch(log_in())}>Log In</button>
			)}
		</div>
	);
}

export default App;
