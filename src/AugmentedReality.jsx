import React from 'react';

function AugmentedReality(props){

  return(

    <div>
      <script src="https://aframe.io/releases/0.9.2/aframe.min.js" async></script>
      <script src="https://raw.githack.com/jeromeetienne/AR.js/2.0.8/aframe/build/aframe-ar.js" async></script>
      <a-scene embedded arjs>
        <a-marker preset="hiro">
          <a-box position='0 0.5 0' material='color: yellow;'></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  )
}

export default AugmentedReality