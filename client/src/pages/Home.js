import React from 'react'
import StatusButton from '../components/StatusButton'

export class Home extends React.Component {
	state = {
		color: '',
		latitude: null,
		longitude: null,
		inputId: '',
		category: ''
	}

	handleOnSubmit = (event) => {
		event.preventDefault()

	}

	handleOnClick= (event) => {
		event.preventDefault()
		// this.setState({category: event.target.id})
		// console.log(event.target.id)
		// console.log(this.state.inputId)
		const value = event.target.id
		console.log(value)
	}

	handleInputChange = (e) => {
		this.setState({inputId: e.target.value})
		console.log(this.state.inputId)
	}

	componentDidMount(){
		navigator.geolocation.getCurrentPosition(
			position => this.setState({ latitude: position.coords.latitude,
																	longitude: position.coords.longitude													
			}),
			() => console.log("Geo Location Not Available!")
		)	
	}

  render(){
		return (
			<>
				<h1 className="home-title">Status</h1>
					<h3>
						{this.state.latitude}
						{this.state.longitude}
						{this.state.inputId}
						{this.state.category}
					</h3>
					<form onSubmit={this.handleOnSubmit}>
					<input 
					className="id-input" 
					type="text" 
					value={this.state.inputId}
					onChange={this.handleInputChange}
				/>
				<div id="buttons-container">
					<StatusButton 
						color="black-button" 
						category="DECEASED"
						onClick={this.handleOnClick}
					/>
					<StatusButton 
						color="red-button"
						category="IMMEDIATE"
						onClick={this.handleOnClick}
					 />
					<StatusButton 
						color="yellow-button" 
						category="DELAYED"
						onClick={this.handleOnClick}
					/>
					<StatusButton 
						color="green-button" 
						category="MINOR"
						onClick={this.handleOnClick}
					/>
					</div>
				</form>		
			</>
		)
	}
}

export default Home