import React, { Component } from 'react';
import { Pannellum } from "pannellum-react";
import myImage from "./img/test1.png";
import './Pano.css'
function PannellumReact() {

	function testFun(hotSpotDiv, args) {
		hotSpotDiv.classList.add('custom-tooltip');
		var span = document.createElement('span');
		span.innerHTML = '<div><p stylecolor="orange">V<sub>1</sub></p></div>';
		hotSpotDiv.appendChild(span);
		span.style.width = span.scrollWidth - 20 + 'px';
		span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
		span.style.marginTop = -span.scrollHeight - 12 + 'px';
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
					cssClass='horizon-line'
					pitch={4.5}
					yaw={-4}
					tooltip={testFun}
				/>
			</Pannellum>
		</div>
	)
};

export default PannellumReact;