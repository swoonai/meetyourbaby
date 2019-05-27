import React from 'react';
import {
  AppRegistry,
  View,
  Environment,
  Text,
  VrButton
} from 'react-360';

import { NativeModules } from "react-360";
import styles from './style/indexStyle';
import { VideoPlayer, VideoControl} from './src/react-360-common-ui'

const {VideoModule} = NativeModules;


export default class vr extends React.Component {
  constructor() {
    super();

    this.state = {
      displayBtn: 'flex'
    };

  }

  componentDidMount = () => {
    console.log("MOUNTED");
    console.dir(window.location)


  }

  playVideo = () => {
    VideoModule.resume('myplayer');
    this.setState({
      displayBtn: 'none'
    })
  }

  render() {
    // console.log(window.innerWidth);
    // console.dir(window.location)
    // Environment.setBackgroundVideo('myplayer');
    // return (
    //   <View style={styles.panel}>
    //     <VrButton onClick={this.playVideo} style={{display: this.state.displayBtn}}>
    //       <Text style={{color: "#fff"}}>
    //         PLAY
    //       </Text>
    //     </VrButton>
    //   </View>
    // );
    return (
      <View style={{flex: 1}}>
        <VideoPlayer
          muted={true}
          source={{url: "https://videos.meetyourbaby.com/1091910893632/meetyourbaby_360_video.mp4"}}
          stereo={'2D'}
          style={{
            width: 600,
            height: 400,
          }}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent('vr', () => vr);
