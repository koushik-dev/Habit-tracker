import React from "react"
import Video from "../component/video/video";
import poster from "../../../kick_smile.jpg";

const videoContainer = () => {
    return (
      <div style={{ height: "450px", width: "800px" }}>
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster={poster}
          isSkipPlay={false}
          preload="none"
        />
      </div>
    );
}

export default videoContainer
