import React, { Component } from 'react';
import { Pannellum } from "pannellum-react";
import myImage from "./img/test1.png";
import './Pano.css'

const PannellumReact = () => (
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
			/>
		</Pannellum>
	</div>
);

export default PannellumReact;