import React from 'react';
import VideoPlayer from './views/components/component/video/video';

function App() {
  return (
    <div className="App">
      <VideoPlayer url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </div>
  );
}

export default App;
