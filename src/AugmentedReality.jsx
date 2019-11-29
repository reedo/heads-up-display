import React from 'react';

function AugmentedReality(props){

  return(
    <div>
      <a-scene embedded arjs='sourceType: webcam;'>
        <a-sphere src="https://raw.githubusercontent.com/aframevr/sample-assets/master/assets/images/space/earth_atmos_4096.jpg" radius="1" segments-height="10">
          <a-animation attribute="scale"
                       dur="1000"
                       from= "1 1 1"
                       to="1 1 1"
                       direction='alternate-reverse'
                       easing= "ease-in-out-circ"
                       repeat="indefinite"></a-animation>
        </a-sphere>

        <a-marker-camera type='pattern' url='https://metaline.it/pattern-marker.patt'></a-marker-camera>
      </a-scene>
    </div>
  )
}

export default AugmentedReality