import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	
	constructor(props){
		super(props);

		this.state = {
			height: 165,
			weight: 65,
			index: 23.87,
			type: "Normal"
		}
	}

	onInputChangeWeight(event){
		let newindex = event.target.value/(this.state.height*this.state.height/10000);
		this.setState({height: this.state.height, weight: event.target.value, index: newindex});
		if(newindex<18.5){
				this.setState({type: "Underweight"});
				document.getElementById("type").style.color = "yellow";
		}
		else if(newindex>=18.5 && newindex<24.9){
			this.setState({type: "Normal"});
			document.getElementById("type").style.color = "green";
		}
		else if(newindex>=24.9 && newindex<29.9){
			this.setState({type: "Overweight"});
			document.getElementById("type").style.color = "orange";
		}
		else{
			this.setState({type: "Obese"});
			document.getElementById("type").style.color = "red";
		}
	}

	onInputChangeHeight(event){
		let newindex = this.state.weight/(event.target.value*event.target.value/10000);
		this.setState({height: event.target.value, weight: this.state.weight, index:  newindex});
		if(newindex<18.5){
				this.setState({type: "Underweight"});
				document.getElementById("type").style.color = "yellow";
		}
		else if(newindex>=18.5 && newindex<24.9){
			this.setState({type: "Normal"});
			document.getElementById("type").style.color = "green";
		}
		else if(newindex>=24.9 && newindex<29.9){
			this.setState({type: "Overweight"});
			document.getElementById("type").style.color = "orange";
		}
		else{
			this.setState({type: "Obese"});
			document.getElementById("type").style.color = "red";
		}
	}

	render(){
		return (
			<div>
				<h1>BMI Calculator</h1>
				<span id="head1">Body Mass Index (BMI) = {this.state.index.toFixed(2)}</span>
				<div id="type">{this.state.type}</div>
				<div id="inputs">
					Height(in cm) 
					<input
						max = "250"
						min = "90" 
						type="number" 
						value = {this.state.height}
						onChange = {this.onInputChangeHeight.bind(this)}>
					</input>
					Weight(in kg)
					<input 
						max = "300"
						min = "10"
						value = {this.state.weight}
						type="number" 
						onChange = {this.onInputChangeWeight.bind(this)}>
					</input>
					
				</div>
			</div>
		);
	}

}

ReactDOM.render(<App />,document.querySelector("#container"));