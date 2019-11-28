import React from 'react';
import ReactDOM from 'react-dom'
import { Pannellum } from "pannellum-react";
import myImage from "./img/Cockpit.jpg";
import './Pano.css'
function PannellumReact() {

	const data = require('./mockData/mockData.json');
	let idx = 0;

	function horizonLine(hotSpotDiv, args) {
	}

	function weather(hotSpotDiv, args) {
		ReactDOM.render(
			<p className='weather headsupdisplay'>Weather in 20 miles: {data[idx]["FUTURE WEATHER (MET OFFICE API)"]}</p>
			, hotSpotDiv);
	}

	function flightSpeed(hotSpotDiv, args) {
		// const flightSpeedData = require();
		ReactDOM.render(
			<p className='flightSpeed headsupdisplay'>Flight Speed: {data[idx]["SPEED (KNTs)"]} km/h</p>
			, hotSpotDiv);
	}

	function fuelLevel(hotSpotDiv, args) {
		ReactDOM.render(
			<div className="fuelLevel headsupdisplay">
				<p>Fuel Level: {data[idx]["FUEL LEVEL (%)"]}%</p>
				<p>Fuel Burn: 10 kg/min</p>
			</div>
			, hotSpotDiv);
	}

	function rightPanel(hotSpotDiv, args) {
		ReactDOM.render(
			<div className="rightPanel headsupdisplay">
				<p>Emergency Handbook:</p>
				<p>{data[idx]["QUICK REFERENCE GUIDE"]}</p>
			</div >
			, hotSpotDiv);
	}

	function leftPanel(hotSpotDiv, args) {
		ReactDOM.render(
			<div className='leftPanel headsupdisplay'>
				<p>V<sub>1</sub>: 25,030 km/h</p>
				<p>Nearest Aerodrome: {data[idx]["NEAREST AERODROME"]}</p>
				<p>Minimum Safe Altitude: {data[idx]["MSA (Ft)"]} ft</p>
				<p>Airspace Limit: {data[idx]["AIRSPACE LIMIT"]} ft</p>
			</div>
			, hotSpotDiv);
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
				}}
			>
				<Pannellum.Hotspot
					type='custom'
					cssClass='horizonLine'
					pitch={data[idx]["HORIZON LINE (HARD CODED)"]}
					yaw={1.2}
					tooltip={horizonLine}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='weather'
					pitch={4}
					yaw={40}
					tooltip={weather}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='flightSpeed'
					pitch={-6}
					yaw={39}
					tooltip={flightSpeed}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='fuelLevel'
					pitch={-5}
					yaw={-42}
					tooltip={fuelLevel}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='rightPanel'
					pitch={-3}
					yaw={77}
					tooltip={rightPanel}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='leftPanel'
					pitch={-5}
					yaw={-74}
					tooltip={leftPanel}
				/>
			</Pannellum>
		</div>
	)
};

export default PannellumReact;