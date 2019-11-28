import React, { useState, useEffect } from 'react'

function Weather(props) {
	const data = props.data;

	const [timer, setTimer] = useState(0);

	useEffect(() => {
		let interval = null;
		interval = setInterval(() => {
			if (timer < data.length - 1) {
				setTimer(timer => timer + 1);
			} else {
				setTimer(0);
			}
		}, 1000);
		console.log("Timer = " + timer);
		return () => clearInterval(interval);
	}, [timer]);

	return (
		<div className='weather headsupdisplay'>
			<p>Weather in 20 miles:</p>
			<p className='weatherIcons'>  {data[timer]["FUTURE WEATHER (MET OFFICE API)"]}</p></div>
	);
}

export default Weather;