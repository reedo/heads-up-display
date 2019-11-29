import React, { useState, useEffect } from 'react'

function FuelLevel(props) {
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
		return () => clearInterval(interval);
	}, [timer]);

	return (
		<div className="fuelLevel headsupdisplay">
			<div className = 'fuelLeft'>⛽</div>
			<div className = 'fuelRight'>
			<p>Fuel Level: {data[timer]["FUEL LEVEL (%)"]}%</p>
			<p>Fuel Burn: 10 kg/min</p></div>
		</div>
	);
}

export default FuelLevel;