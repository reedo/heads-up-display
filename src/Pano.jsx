import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Pannellum } from "pannellum-react";
import myImage from "./img/test1.png";
import './Pano.css'
function PannellumReact() {

	function horizonLine(hotSpotDiv, args) {
	}


	function weather(hotSpotDiv, args) {
		ReactDOM.render(
			<p class='weather headsupdisplay'>Weather in 20 miles: WET</p>
			, hotSpotDiv);
	}

	function flightSpeed(hotSpotDiv, args) {
    const flightSpeedData = require('./mockData/mockData.json');
		ReactDOM.render(
			<p class='flightSpeed headsupdisplay'>Flight Speed: 600 km/h</p>
			, hotSpotDiv);
	}

	function fuelLevel(hotSpotDiv, args) {
		ReactDOM.render(
			<div class="fuelLevel headsupdisplay">
				<p>Fuel Level: 50%</p>
				<p>Fuel Burn: 10 kg/min</p>
			</div>
			, hotSpotDiv);
	}

	function rightPanel(hotSpotDiv, args) {
		ReactDOM.render(
			<div class="rightPanel headsupdisplay">
				<p>Emergency Handbook:</p>
				<p>What is Lorem Ipsum?</p>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div >
			, hotSpotDiv);
	}

	function leftPanel(hotSpotDiv, args) {
		ReactDOM.render(
			<div class='leftPanel headsupdisplay'>
				<p>V<sub>1</sub>: 25,030 km/h</p>
				<p>Nearest Aerodrome: Auckland Airport</p>
				<p>Minimum Safe Altitude: 60,000 ft</p>
			</div>
			, hotSpotDiv);
	}

	return (
		<div>
			<Pannellum
				width="100vw"
				height="100vh"
				image={myImage}
				pitch={0}
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
					pitch={4.5}
					yaw={-4.5}
					tooltip={horizonLine}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='weather'
					pitch={-3}
					yaw={50}
					tooltip={weather}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='flightSpeed'
					pitch={0}
					yaw={40}
					tooltip={flightSpeed}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='fuelLevel'
					pitch={-2}
					yaw={-48}
					tooltip={fuelLevel}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='rightPanel'
					pitch={4}
					yaw={95}
					tooltip={rightPanel}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='leftPanel'
					pitch={11}
					yaw={-105}
					tooltip={leftPanel}
				/>
			</Pannellum>
		</div>

	)
};

export default PannellumReact;