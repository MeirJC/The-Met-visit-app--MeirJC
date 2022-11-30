import React from "react";
import "./WelcomePage.css";
import videoBG from "./assets/BCKGRND.mp4";
import song from "./assets/ballerina.mp3";
import Player from "../Player/Player";
function WelcomePage() {
  return (
    <div className="main">
      {/* <audio className="player" src={song} autoPlay={true} type="audio/mpeg" /> */}
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted />
      <div className="content">
        <h1 className="welcomeH1">Welcome to the MET</h1>
        <hr className="bar" />
        <p className="welcomeP">
          We are so happy to have you as a guest.
          <br /> To get the most out of your visit we recommend planing your
          visit ahead.
        </p>
        {/* <audio
          className="player"
          src={song}
          autoPlay
          type="audio/mpeg"
          controls
          volume={0.2}
        ></audio> */}
        <Player url={song} />
      </div>
    </div>
  );
}

export default WelcomePage;
