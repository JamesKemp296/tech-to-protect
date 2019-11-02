import React from 'react'
import StatusButton from '../components/StatusButton'

export class Home extends React.Component {
	state = {
		color: ''
	}
  render(){
		return (
			<>
				<h1>Hello World</h1>
				<StatusButton />
				<StatusButton  />
				<StatusButton  />
				<StatusButton  />
			</>
		)
	}
}

export default Home