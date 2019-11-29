import React, { useState, useEffect } from 'react'

function FlightSpeed(props) {
	// const data = props.data;

	const [timer, setTimer] = useState(3590);
	const [formattedTimer,setFormattedTime] = useState();
	const [napTimer,setNapTime] = useState();
	const oneHour = 3600;
	const oneMin = 60;
	useEffect(() => {
	
	
	},[timer]);

	useEffect(() => {
		let interval = null;
		interval = setInterval(() => {
			setTimer(timer => timer + 1);
			const flightDuration = parseInt(oneHour*9+oneMin*45-timer);
			const hours = parseInt(flightDuration / oneHour); 
			const minutes = parseInt((flightDuration - (hours * oneHour)) / oneMin); 
			const seconds = flightDuration - (minutes * oneMin)- (hours * oneHour); 

			setFormattedTime( hours.toString().padStart(2, '0') 
				+ ':' + minutes.toString().padStart(2, '0') 
				+ ':' + seconds.toString().padStart(2, '0')); 
			const timeTilNap = parseInt(oneHour*6-timer);
			const napHours = parseInt(timeTilNap / oneHour); 
			const napMinutes = parseInt((timeTilNap - (napHours * oneHour)) / oneMin); 
			const napSeconds = timeTilNap - (napMinutes * oneMin)- (napHours * oneHour); 

			setNapTime( napHours.toString().padStart(2, '0') 
				+ ':' + napMinutes.toString().padStart(2, '0') 
				+ ':' + napSeconds.toString().padStart(2, '0')); 
		}, 1000);
		return () => clearInterval(interval);
	}, [timer]);



	return (
		<div className='flightSpeed headsupdisplay'>
		<p>Total Flight Duration: 09:45:00</p>
		<p>Remaining Time: {formattedTimer}</p>
		<p>Recommended rest point: {napTimer}</p></div>
		// <p className='flightSpeed headsupdisplay'>Flight Speed: {data[timer]["SPEED (KNTs)"]} km/h</p>
	);
}

export default FlightSpeed;