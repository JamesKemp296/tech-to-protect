import React from 'react'

const FormInputs = (props) => (
	<div id="form-group">
		<form id="form-inputs">
			<label htmlFor="name-input">Name:{props.name} </label>
			<input 
				type="text" 
				onChange={props.handleNameChange}
			/>
			<label htmlFor="age-input">Age: </label>
			<input 
				type="text" 
				onChange={props.handleAgeChange}
			/>
			<label htmlFor="address-input">Address: </label>
			<input 
				type="text" 
				onChange={props.handleAddressChange}
			/>
			<label htmlFor="phone-input">Phone: </label>
			<input 
				type="text" 
				onChange={props.handlePhoneChange}
			/>
			<label htmlFor="respirations-input">Respirations: </label>
			<input 
				type="text" 
				onChange={props.handleRespirationsChange}
			/>
			<label htmlFor="perfusion-input">Perfusion: </label>
			<input 
				type="text" 
				onChange={props.handlePerfusionChange}
			/>
			<label htmlFor="mental-stats-input">Mental Status: </label>
			<input 
				type="text" 
				onChange={props.handleMentalStatusChange}
			/>
			<div className="button-div">
				<button 
					type="submit"
					className="submit-button"
				>
					SUBMIT
				</button>
			</div>
		</form>
	</div>
)

export default FormInputs