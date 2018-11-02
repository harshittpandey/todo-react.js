import React from "react";
import  { render } from "react-dom";

import { Todo } from "./components/Todo";

class App extends React.Component {
	
	render() {
		let date= new Date(); 
		let month= date.getMonth();
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		
		console.log(months[month]);

		let day= date.getDay();
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		console.log(days[day]);

		let year= date.getFullYear();
		console.log(year);

		let dt= date.getDate();
	
		return (
			<div className="w3-row">
				<div className="w3-col l6 topdiv" >
				<h2 className="w3-center w3-xxlarge w3-wide heading">Hello User</h2>
				<p className="heading w3-wide w3-center">It's {days[day]}, {months[month]} {dt}, {year}</p>
				</div>
				
				<div className="w3-col l5 ">
					<Todo/>
				</div>

			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));