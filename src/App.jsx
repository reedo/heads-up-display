import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Pano.css';
import { Pannellum } from "pannellum-react";
import myImage from "./img/CockpitWithSky.jpg";
import annyang from './annyang/Annyang'
import Weather from './components/Weather';
import FlightSpeed from './components/FlightSpeed';
import FuelLevel from './components/FuelLevel';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function PannellumReact() {

	const data = require('./mockData/mockData.json');

	const [timer, setTimer] = useState(0);

	useEffect(() => {
		let interval = null;
		interval = setInterval(() => {
			if (timer < 29) {
				setTimer(timer => timer + 1);
			} else {
				setTimer(0);
			}
		}, 1000);
		console.log("Timer = " + timer);
		return () => clearInterval(interval);
	}, [timer]);

	function horizonLine(hotSpotDiv, args) {
	}

	function weather(hotSpotDiv, args) {
		ReactDOM.render(<Weather data={args[0]} />, hotSpotDiv);
	}

	function flightSpeed(hotSpotDiv, args) {
		ReactDOM.render(<FlightSpeed data={args[0]} />, hotSpotDiv);
	}

	function fuelLevel(hotSpotDiv, args) {
		ReactDOM.render(<FuelLevel data={args[0]} />, hotSpotDiv);
	}

	function leftPanel(hotSpotDiv, args) {
		ReactDOM.render(<LeftPanel data={args[0]} />, hotSpotDiv);
	}

	function rightPanel(hotSpotDiv, args) {
		ReactDOM.render(<RightPanel data={args[0]} />, hotSpotDiv);
	}

	return (
		<div>
			<Pannellum
				width="100vw"
				height="100vh"
				image={myImage}
				pitch={-5}
				yaw={0}
				hfov={100}
				maxHfov={100}
				minHfov={100}
				autoLoad
				onLoad={() => {
					console.log("panorama loaded");
					console.log(annyang);
				}}
			>
				<Pannellum.Hotspot
					type='custom'
					cssClass='horizonLine'
					pitch={data[timer]["HORIZON LINE (HARD CODED)"]}
					yaw={1.2}
					tooltip={horizonLine}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='weather'
					pitch={2}
					yaw={40}
					tooltip={weather}
					tooltipArg={[data]}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='flightSpeed'
					pitch={-6}
					yaw={39}
					tooltip={flightSpeed}
					tooltipArg={[data]}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='fuelLevel'
					pitch={-5}
					yaw={-42}
					tooltip={fuelLevel}
					tooltipArg={[data]}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='rightPanel'
					pitch={-3}
					yaw={77}
					tooltip={rightPanel}
					tooltipArg={[data]}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='leftPanel'
					pitch={-5}
					yaw={-74}
					tooltip={leftPanel}
					tooltipArg={[data]}
				/>
			</Pannellum>
		</div>

	)
};

export default PannellumReact;