import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Pano.css';
import { Pannellum } from "pannellum-react";
import myImage from "./img/CockpitWithSky.jpg";
import annyang from './annyang/Annyang'
import Weather from './components/Weather';
import FlightSpeed from './components/FlightSpeed';
import FuelLevel from './components/FuelLevel';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HeadsUp(props) {

  const data = require('./mockData/mockData.json');

  const [timer, setTimer] = useState(0);
  const [showHud, setShowHud] = useState(false)
  const [voiceStatus, setVoiceStatus] = useState("VoiceStatus")

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if (timer < 29) {
        setTimer(timer => timer + 1);
      } else {
        setTimer(0);
      }
    }, 1000);
    console.log("Timer = " + timer);
    return () => clearInterval(interval);
  }, [timer]);

  function horizonLine(hotSpotDiv, args) {
  }

  function weather(hotSpotDiv, args) {
    ReactDOM.render(
      <div className='weather headsupdisplay'>
        <p>Weather in 20 miles:</p>
        <p className='weatherIcons'>  {data[timer]["FUTURE WEATHER (MET OFFICE API)"]}</p></div>
      , hotSpotDiv);
    ReactDOM.render(<Weather data={args[0]}/>, hotSpotDiv);
  }

  function flightSpeed(hotSpotDiv, args) {
    ReactDOM.render(<FlightSpeed data={args[0]}/>, hotSpotDiv);
  }

  function fuelLevel(hotSpotDiv, args) {
    ReactDOM.render(<FuelLevel data={args[0]}/>, hotSpotDiv);
  }

  function leftPanel(hotSpotDiv, args) {
    ReactDOM.render(<LeftPanel data={args[0]}/>, hotSpotDiv);
  }

  function rightPanel(hotSpotDiv, args) {
    ReactDOM.render(<RightPanel data={args[0]}/>, hotSpotDiv);
  }

  useEffect(() => {

    annyang.start();
    annyang.addCommands(showHudCommand, hideHudCommand, createReport, augmentedReality)
    annyang.addCallback(engineCallback, resultCallback)
    return () => {
      annyang.abort();
    }
  }, [])

  const showHudCommand = () => {
    setShowHud(true);
  }

  const hideHudCommand = () => {
    setShowHud(false);
  };

  const createReport = () => {
    toast("Report Raised",{autoClose:5000});
    console.log("Report Raised")
  }

  const augmentedReality =()=>{

  }

  const engineCallback = (status) => {
    setVoiceStatus(status)
  }

  const resultCallback = (userSaid, commandText, phrases) => {
    //setShowHud(userSaid);
    console.log("USER SAID" + userSaid);
    console.log(" COMMAND TEXT " + commandText);
    console.log("PHASES " + phrases);
  }

  const renderPannellum=()=>{

    if (showHud) {
      return (
        <div>
          <ToastContainer />
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

            {/*<Pannellum.Hotspot*/}
            {/*  type='custom'*/}
            {/*  cssClass='horizonLine'*/}
            {/*  pitch={data[timer]["HORIZON LINE (HARD CODED)"]}*/}
            {/*  yaw={1.2}*/}
            {/*  tooltip={horizonLine}*/}
            {/*/>*/}
            {/*<Pannellum.Hotspot*/}
            {/*  type='custom'*/}
            {/*  cssClass='weather'*/}
            {/*  pitch={4}*/}
            {/*  yaw={40}*/}
            {/*  tooltip={weather}*/}
            {/*/>*/}
            {/*<Pannellum.Hotspot*/}
            {/*  type='custom'*/}
            {/*  cssClass='flightSpeed'*/}
            {/*  pitch={-6}*/}
            {/*  yaw={39}*/}
            {/*  tooltip={flightSpeed}*/}
            {/*/>*/}
            {/*<Pannellum.Hotspot*/}
            {/*  type='custom'*/}
            {/*  cssClass='fuelLevel'*/}
            {/*  pitch={-5}*/}
            {/*  yaw={-42}*/}
            {/*  tooltip={fuelLevel}*/}
            {/*/>*/}
            {/*<Pannellum.Hotspot*/}
            {/*  type='custom'*/}
            {/*  cssClass='rightPanel'*/}
            {/*  pitch={-3}*/}
            {/*  yaw={77}*/}
            {/*  tooltip={rightPanel}*/}
            {/*/>*/}
            {/*<Pannellum.Hotspot*/}
            {/*  type='custom'*/}
            {/*  cssClass='leftPanel'*/}
            {/*  pitch={-5}*/}
            {/*  yaw={-74}*/}
            {/*  tooltip={leftPanel}*/}
            {/*/>*/}

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
              tooltipArg={[data]}
            />
            <Pannellum.Hotspot
              type='custom'
              cssClass='flightSpeed'
              pitch={-6}
              yaw={39}
              tooltip={flightSpeed}
              tooltipArg={[data]}
            />
            <Pannellum.Hotspot
              type='custom'
              cssClass='fuelLevel'
              pitch={-5}
              yaw={-42}
              tooltip={fuelLevel}
              tooltipArg={[data]}
            />
            <Pannellum.Hotspot
              type='custom'
              cssClass='rightPanel'
              pitch={-3}
              yaw={77}
              tooltip={rightPanel}
              tooltipArg={[data]}
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
    }else{
      return(
        <div>
          <ToastContainer />
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
          />
        </div>

        )

    }

  }

  return(
    renderPannellum()
  )


};

export default HeadsUp;