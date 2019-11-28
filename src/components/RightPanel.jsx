import React, { useState, useEffect } from 'react'

function RightPanel(props) {
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
		<div className="rightPanel headsupdisplay">
			<p>Emergency Handbook:</p>
			<p>{data[timer]["QUICK REFERENCE GUIDE"]}</p>
		</div >
	);
}

export default RightPanel;