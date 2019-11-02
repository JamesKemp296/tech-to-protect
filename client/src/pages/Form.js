import React from 'react'
import FormInputs from '../components/FormInputs'

export class Form extends React.Component {
	state = {
			name: '',
			age: null,
			address: '',
			phone: '',
			respirations: undefined,
			perfusion: null,
			mentalStatus: undefined
		}

	handleNameChange = (e) => {
		this.setState({name: e.this.target.value})
	}

	handleAgeChange = (e) => {
		this.setState({age: Number(e.this.target.value)})
	}

	handleAddressChange = (e) => {
		this.setState({address: e.this.target.value})
	}

	handlePhoneChange = (e) => {
		this.setState({phone: e.this.target.value})
	}

	handleRespirationChange = (e) => {
		this.setState({respirations: e.this.target.value})
	}

	handlePerfusionChange = (e) => {
		this.setState({perfusion: e.this.target.value})
	}

	handleMentalStatusChange = (e) => {
		this.setState({mentalStatus: e.this.target.value})
	}
	
  render(){
		return(
			<>
				<FormInputs 
					{ ...this.state }
					handleNameChange={this.handleNameChange}
					handleAgeChange={this.handleAgeChange}
					handleAddressChange={this.handleAddressChange}
					handlePhoneChange={this.handlePhoneChange}
					handleRespirationChange={this.handleRespirationChange}
					handlePerfusionChange={this.handlePerfusionChange}
					handleMentalStatusChange={this.handleMentalStatusChange}
				/>
			</>		
		)
	}
}

export default Form