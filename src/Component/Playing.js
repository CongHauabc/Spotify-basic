import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Contex";

const Playing = () => {
  const { song,handleClick } = useContext(Songs);
  const hanldeClickNext =()=>{
    handleClick(song.id +1)
  }
  const hanldeClickPre =()=>{
    handleClick(song.id -1)
  }
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        onClickNext={hanldeClickNext}
        onClickPrevious={hanldeClickPre}

      />
    </div>
  );
};

export default Playing;
