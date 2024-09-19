import React, { useEffect, useMemo } from "react";
import { Button } from "../Components/Button";
import PlaySoundIcon from "../Assets/Icons/playSound.svg";
import PauseSoundIcon from "../Assets/Icons/pauseSound.svg";
import useStoreSound from "../Store/useStoreSound";

const BackgroundSound = ({ children }) => {
  const isPlaying = useStoreSound((state) => state.isPlaying);
  const bgSound = useMemo(
    () => new Audio(require("../sounds/bg-sound.mp3")),
    []
  );
  useEffect(() => {
    if (isPlaying) {
      bgSound.play();
      bgSound.loop = true;
      bgSound.volume = 0.1;
    } else {
      bgSound.pause();
    }
  }, [bgSound, isPlaying]);
  return children;
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
const handleValidateWord = () => {
  const audio = new Audio(require("../sounds/valid.mp3"));
  audio.play();
};
const handleWrongWord = () => {
  const audio = new Audio(require("../sounds/notValid.mp3"));
  audio.play();
};
const useSounds = () => {
  return {
    BackgroundSound,
    ButtonSound,
    handleValidateWord,
    handleWrongWord,
  };
};

export default useSounds;
