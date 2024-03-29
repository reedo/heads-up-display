import React, { useState, useEffect } from 'react'

function LeftPanel(props) {
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
		<div className='leftPanel headsupdisplay'>
			<p>V<sub>1</sub>: 25,030 km/h</p>
			<p>Nearest Aerodrome: {data[timer]["NEAREST AERODROME"]}</p>
			<p>Minimum Safe Altitude: {data[timer]["MSA (Ft)"]} ft</p>
			<p>Airspace Limit: {data[timer]["AIRSPACE LIMIT"]} ft</p>
		</div>
	);
}

export default LeftPanel;