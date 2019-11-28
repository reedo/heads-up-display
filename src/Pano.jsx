import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Pano.css';
import { Pannellum } from "pannellum-react";
import './Pano.css'
import myImage from "./img/CockpitWithSky.jpg";
import annyang from './annyang/Annyang'
import LeftPanel from './components/LeftPanel';

function PannellumReact() {

	const data = require('./mockData/mockData.json');



	function horizonLine(hotSpotDiv, args) {
	}

	function weather(hotSpotDiv, args) {
		ReactDOM.render(
			<div className='weather headsupdisplay'>
				<p>Weather in 20 miles:</p>
				<p className='weatherIcons'>  {data[timer]["FUTURE WEATHER (MET OFFICE API)"]}</p></div>
			, hotSpotDiv);
	}

	function flightSpeed(hotSpotDiv, args) {
		ReactDOM.render(
			<p className='flightSpeed headsupdisplay'>Flight Speed: {data[timer]["SPEED (KNTs)"]} km/h</p>
			, hotSpotDiv);
	}

	function fuelLevel(hotSpotDiv, args) {
		ReactDOM.render(
			<div className="fuelLevel headsupdisplay">
				<p>Fuel Level: {data[timer]["FUEL LEVEL (%)"]}%</p>
				<p>Fuel Burn: 10 kg/min</p>
			</div>
			, hotSpotDiv);
	}

	function rightPanel(hotSpotDiv, args) {
		ReactDOM.render(
			<div className="rightPanel headsupdisplay">
				<p>Emergency Handbook:</p>
				<p>{data[timer]["QUICK REFERENCE GUIDE"]}</p>
			</div >
			, hotSpotDiv);
	}

	function leftPanel(hotSpotDiv, args) {
		console.log("leftPanel re-rendered");
		ReactDOM.render(<LeftPanel data={args[0]} />, hotSpotDiv);
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
					tooltipArg={[data]}
				/>
			</Pannellum>
		</div>

	)
};

export default PannellumReact;