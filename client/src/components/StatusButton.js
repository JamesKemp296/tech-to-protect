import React from 'react'

class StatusButton extends React.Component {
	state = {
		color: 'red'
	}

	render(){
		return(
			<button class={this.props.color}> {this.props.color}</button>
		)
	}
}
	



export default StatusButton