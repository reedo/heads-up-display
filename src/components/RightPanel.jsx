import React, { useState, useEffect } from 'react'

function RightPanel(props) {
	const data = props.data;
	return (
		<div className="rightPanel headsupdisplay">
			<p>Emergency Handbook:</p>
			<p>{data[0]["QUICK REFERENCE GUIDE"]}</p>
		</div >
	);
}

export default RightPanel;