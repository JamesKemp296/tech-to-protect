import React from 'react'
import StatusButton from '../components/StatusButton'

export class Home extends React.Component {
	state = {
		color: ''
	}
  render(){
		return (
			<>
				<h1>Status</h1>
				<input className="id-input" type="text" />
				<div id="buttons-container">
					<StatusButton color="black-button" category="DECEASED"/>
					<StatusButton color="red-button" category="IMMEDIATE"/>
					<StatusButton color="yellow-button" category="DELAYED"/>
					<StatusButton color="green-button" category="MINOR"/>
				</div>
			</>
		)
	}
}

export default Home