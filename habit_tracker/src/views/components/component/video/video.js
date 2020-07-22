import React, { useState, useRef } from "react";
import "./video.scss";

const VideoPlayer = ({ url }) => {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("");
  const video = useRef();

  // update the progress bar
  function updateProgress({ target: e }) {
    setTime((e.currentTime / e.duration) * 100);
    setCurrentTime(getDuration(e.currentTime));
  }

  // Toggle the play/pause function
  function togglePlay() {
    setPlaying((prevState) => {
      video.current[prevState ? "pause" : "play"]();
      return !prevState;
    });
  }

  // forward/rewind on double click
  function changeCurrentTime({ target, pageX }) {
    const pos = pageX - target.parentElement.offsetLeft,
      percent = (pos / target.width) * 100;

    updateCurrentTime(10 * (percent > 50 ? 1 : -1));
  }

  // update the current time
  function updateCurrentTime(time) {
    video.current.currentTime += time;
  }

  // get the duration in 00:00 format
  function getDuration(time) {
    const minutes = Math.floor(time / 60) + "",
      seconds = Math.floor((time / 60 - minutes) * 60) + "";

    return minutes.padStart(2, 0) + ":" + seconds.padStart(2, 0);
  }

  return (
    <div className="player">
      {/* Video panel */}
      <video
        className="player__video"
        ref={video}
        onLoadedMetadata={() =>
          setDuration(getDuration(video.current.duration))
        }
        onClick={togglePlay}
        onDoubleClick={changeCurrentTime}
        onTimeUpdate={updateProgress}
      >
        <source src={url} type="video/mp4" />
      </video>
      <div className="player__controls">
        {/* Progress bar */}
        <progress
          className="player__controls__progress"
          value={time}
          min="0"
          max="100"
        ></progress>

        {/* toolbar items */}
        <div className="player__controls__buttons">
          <button
            className="player__controls__buttons__rewind"
            onClick={() => updateCurrentTime(-10)}
          >
            {"<<"}
          </button>

          {/* Play/Pause button */}
          <button
            className="player__controls__buttons__play"
            onClick={togglePlay}
          >
            <div
              className={
                playing
                  ? "player__controls__buttons__play__paused"
                  : "player__controls__buttons__play__playing"
              }
            ></div>
          </button>
          <button
            className="player__controls__buttons__forward"
            onClick={() => updateCurrentTime(10)}
          >
            {">>"}
          </button>
          {/* Time stamp */}
          <span className="player__controls__buttons__time">
            {currentTime + " / " + duration}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
