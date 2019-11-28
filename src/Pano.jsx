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
			<h1>WEATHER</h1>
			, hotSpotDiv);
	}

	function flightSpeed(hotSpotDiv, args) {
		ReactDOM.render(
			<h1>FLIGHT SPEED</h1>
			, hotSpotDiv);
	}

	function fuelLevel(hotSpotDiv, args) {
		ReactDOM.render(
			<h1>FUEL LEVEL</h1>
			, hotSpotDiv);
	}

	function rightPanel(hotSpotDiv, args) {
		ReactDOM.render(
			<h1>RIGHT</h1>
			, hotSpotDiv);
	}

	function leftPanel(hotSpotDiv, args) {
		ReactDOM.render(
			<h1>LEFT</h1>
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
					yaw={-40}
					tooltip={fuelLevel}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='rightPanel'
					pitch={4}
					yaw={100}
					tooltip={rightPanel}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='leftPanel'
					pitch={4}
					yaw={-100}
					tooltip={leftPanel}
				/>
			</Pannellum>
		</div>
	)
};

export default PannellumReact;