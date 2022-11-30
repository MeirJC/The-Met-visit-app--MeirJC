import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <div onClick={toggle}>
        {playing ? (
          <span
            class="material-symbols-outlined"
            style={{
              fontSize: "2rem",
              backgroundColor: "transparent",
              border: "5px solid #ffffff66",
              cursor: "pointer",
              padding: "0.2rem",
              borderRadius: "50%",
              marginTop: "50vmin",
            }}
          >
            pause_circle
          </span>
        ) : (
          <span
            class="material-symbols-outlined"
            style={{
              fontSize: "2rem",
              backgroundColor: "transparent",
              border: "5px solid #ffffff66",
              cursor: "pointer",
              padding: "0.2rem",
              borderRadius: "50%",
              marginTop: "50vmin",
            }}
          >
            play_circle
          </span>
        )}
      </div>
    </div>
  );
};

export default Player;
