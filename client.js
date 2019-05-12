// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  console.dir(this.props);

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });
  // console.dir(video);

  // Creating a Video Player
  const player = r360.compositor.createVideoPlayer('myplayer');
  player.setSource('https://videos.meetyourbaby.com/1056272744512/meetyourbaby_360_video.mp4', '2D', 'mp4');
  player.setMuted(false);
  player.setVolume(1);
  // player.play({autoPlay: true});
  // player.resume();





  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('vr', { /* initial props */ }),
    r360.getDefaultSurface()
  );


  // Load the initial environment
  // r360.compositor.setBackgroundVideo('myplayer');

}

window.React360 = {init};
