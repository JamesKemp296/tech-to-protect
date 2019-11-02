import React from 'react'

class StatusButton extends React.Component {
	state = {
		colorClass: 'red-button'
	}

	render(){
		return(
			<button 
				className={this.props.color}
				id={this.props.category}
			>
				{this.props.category}
			</button>
		)
	}
}
	
export default StatusButton