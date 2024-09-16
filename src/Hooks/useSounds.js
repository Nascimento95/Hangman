import React from "react";
import Sound from "react-sound";
const BackgroundSound = () => {
  console.log(Sound.status.PLAYING);
  return (
    <Sound
      url={require("../sounds/bg-sound.mp3")}
      playStatus={Sound.status.PLAYING}
      loop={true}
      volume={10}
    />
  );
};
const useSounds = () => {
  return {
    BackgroundSound,
  };
};

export default useSounds;
