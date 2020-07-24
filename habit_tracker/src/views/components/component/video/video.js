import React, { useState, useRef } from "react";
import "./video.scss";

// get the click/touch side
function clickedSide({ target, pageX }) {
  const pos = pageX - target.parentElement.offsetLeft,
    percent = (pos / target.clientWidth) * 100;

  return percent > 50 ? 1 : -1;
}

// get the duration in 00:00 format
function getDuration(time) {
  const minutes = Math.floor(time / 60) + "",
    seconds = Math.floor((time / 60 - minutes) * 60) + "";

  return minutes.padStart(2, 0) + ":" + seconds.padStart(2, 0);
}

const VideoPlayer = ({ url }) => {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("");
  const [volumeTouch, setVolumeTouch] = useState(false);
  const [prevPoint, setPrevPoint] = useState(0);
  const video = useRef();

  // Toggle the play/pause function
  function togglePlay() {
    setPlaying((prevState) => {
      video.current[prevState ? "pause" : "play"]();
      return !prevState;
    });
  }

  // update the progress bar
  function updateProgress({ target: e }) {
    setTime((e.currentTime / e.duration) * 100);
    setCurrentTime(getDuration(e.currentTime));
  }

  // forward/rewind on double click
  function changeCurrentTime(e) {
    const side = clickedSide(e);
    updateCurrentTime(10 * side);
  }

  // update the current time
  function updateCurrentTime(time) {
    video.current.currentTime += time;
  }

  // change volume
  function changeVolume({ touches, changedTouches }) {
    const yAxis = changedTouches[0].clientY;
    let _vol = video.current.volume;

    if (volumeTouch) {
      if (prevPoint > yAxis) {
        console.log("increase volume");
        if (_vol < 1) _vol += 0.1;
      } else {
        console.log("decrease volume");
        if (_vol > 0) _vol -= 0.1;
      }
      video.current.volume = +_vol.toFixed(1);
      console.log(video.current.volume);
    }
    setPrevPoint(yAxis);
  }

  return (
    <div className="player">
      {/* volume bar */}
      {volumeTouch && (
        <progress
          className="player__volume"
          value={video?.current?.volume}
          min="0"
          max="1"
        ></progress>
      )}

      {/* Video panel */}
      <video
        className="player__video"
        ref={video}
        onLoadedMetadata={() =>
          setDuration(getDuration(video.current.duration))
        }
        onClick={togglePlay}
        onDoubleClick={changeCurrentTime}
        onTouchStart={(e) => {
          setVolumeTouch(clickedSide(e.touches[0]) > 0);
          setPrevPoint(e.touches[0].clientY);
        }}
        onTouchMove={changeVolume}
        onTouchEnd={() => setVolumeTouch(false)}
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
          {/* playback rate */}
          <input type="range" min="0.5" max="2" step="0.1" list="tickmarks" />
          <datalist id="tickmarks">
            <option value="0.5"></option>
            <option value="0.6"></option>
            <option value="0.7"></option>
            <option value="0.8"></option>
            <option value="0.9"></option>
            <option value="1"></option>
            <option value="1.1"></option>
            <option value="1.2"></option>
            <option value="1.3"></option>
            <option value="1.4"></option>
            <option value="1.5"></option>
            <option value="1.6"></option>
            <option value="1.7"></option>
            <option value="1.8"></option>
            <option value="1.9"></option>
            <option value="2"></option>
          </datalist>
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
