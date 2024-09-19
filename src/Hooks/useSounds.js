import React, { useState } from "react";
import Sound from "react-sound";
import { Button } from "../Components/Button";
import PlaySoundIcon from "../Assets/Icons/playSound.svg";
import PauseSoundIcon from "../Assets/Icons/pauseSound.svg";

const BackgroundSound = ({ isPlaying }) => {
  return (
    <>
      {isPlaying && (
        <Sound
          url={require("../sounds/bg-sound.mp3")}
          playStatus={Sound.status.PLAYING}
          loop={true}
          volume={10}
        />
      )}
    </>
  );
};
const ButtonSound = ({ isPlaying, setIsPlaying }) => {
  const icon = isPlaying ? PauseSoundIcon : PlaySoundIcon;
  return (
    <div className="border-2 border-white  w-20 h-full items-center justify-center">
      <Button
        onClick={() => setIsPlaying(!isPlaying)}
        // label={label}
        icon={icon}
      />
    </div>
  );
};
const useSounds = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return {
    BackgroundSound: () => <BackgroundSound isPlaying={isPlaying} />,
    ButtonSound: () => (
      <ButtonSound isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    ),
  };
};

export default useSounds;
