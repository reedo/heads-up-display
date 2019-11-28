import React, { Component } from 'react';
import { Pannellum } from "pannellum-react";
import myImage from "./img/test1.png";
import './Pano.css'

function PannellumReact() {

	function horizonLine(hotSpotDiv, args) {
	}


	function weather(hotSpotDiv, args) {
		hotSpotDiv.classList.add('custom-tooltip');
		var span = document.createElement('span');
		span.innerHTML = '<div><p stylecolor="orange">WEATHER</p></div>';
		hotSpotDiv.appendChild(span);
		span.style.width = span.scrollWidth - 20 + 'px';
		span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
		span.style.marginTop = -span.scrollHeight - 12 + 'px';
	}

	function flightSpeed(hotSpotDiv, args) {

		const flightSpeedData = require('./mockData/mockData.json');
		hotSpotDiv.classList.add('custom-tooltip');
		var span = document.createElement('span');
		span.innerHTML = '<div><p stylecolor="orange">FLIGHT SPEED</p></div>';
		span.style.width = span.scrollWidth - 20 + 'px';
		span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
		span.style.marginTop = -span.scrollHeight - 12 + 'px';
		hotSpotDiv.appendChild(span);
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
					yaw={-16}
					tooltip={horizonLine}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='weather'
					pitch={4.5}
					yaw={-16}
					tooltip={weather}
				/>
				<Pannellum.Hotspot
					type='custom'
					cssClass='flightSpeed'
					pitch={4.5}
					yaw={-16}
					tooltip={flightSpeed}
				/>
			</Pannellum>
		</div>
	)
};

export default PannellumReact;