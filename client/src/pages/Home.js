import React from 'react'
import StatusButton from '../components/StatusButton'

export class Home extends React.Component {
	state = {
		color: '',
		latitude: null,
		longitude: null
	}

	getGeoLocation = () => {
		navigator.geolocation.getCurrentPosition(
			postion => this.setState({ latitude: position.coords.latitude,
																 longitude: position.coords.longitude														
			}),
			() => console.log("Geo Location Not Available!")
		)
	}

  render(){
		return (
			<>
				<h1>Hello World</h1>
				<StatusButton color="red"/>
				<StatusButton color="blue"/>
				<StatusButton color="green"/>
				<StatusButton color="black" />
			</>
		)
	}
}

export default Home