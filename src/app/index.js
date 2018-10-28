import React from "react";
import  { render } from "react-dom";

import { Todo } from "./components/Todo";

class App extends React.Component {
	render() {
		return (
			<div className="w3-row">
				<div className="w3-col l5">
				.
				</div>
				
				<div className="w3-col l6 todobox">
					<Todo/>
				</div>

			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));