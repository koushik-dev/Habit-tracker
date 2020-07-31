import React from "react";
import VideoPlayer from "./views/components/component/video/video";
import poster from "./kick_smile.jpg";

function App() {
  return (
    <div className="App">
      <VideoPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster={poster}
        isSkipPlay={false}
        preload="auto"
      />
    </div>
  );
}

export default App;
