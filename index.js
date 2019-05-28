import React from 'react';
import {
  AppRegistry,
  View,
  Environment,
  Text,
  VrButton,
  Image
} from 'react-360';

import { NativeModules } from "react-360";
import styles from './style/indexStyle';
import { VideoPlayer, VideoControl} from './src/react-360-common-ui'

const {VideoModule} = NativeModules;


export default class vr extends React.Component {
  constructor() {
    super();

    this.state = {
      displayBtn: 'flex',
      flag: true,

    };
  }

  componentDidMount = () => {
    console.log("MOUNTED");
    console.dir(window.location)


  }

  playVideo = () => {
    if (this.state.flag) {
      VideoModule.resume('myplayer');
      this.setState(
        {flag: false,}
      )
    } else {
      VideoModule.pause('myplayer');
      this.setState(
        {flag: true,}
      )
    }
  }

  render() {
    console.log(window.innerWidth);
    console.dir(window.location)
    Environment.setBackgroundVideo('myplayer');
    return (
      <View style={styles.panel}>
        
        <View style={{marginTop: "65%",height: "4%", flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#777777", borderRadius: 5}}> 
          <VrButton onClick={this.playVideo} style={{margin: "1%"}}>
            { this.state.flag ? (
                <Image style={{width: 30, height: 30}} source={require('./static_assets/play.png')} />
              ) : (
                <Image style={{width: 30, height: 30}} source={require('./static_assets/pause.png')} />
              )
            }
          </VrButton>
          <View style={{width: "30%", height: "10%", backgroundColor: "#ffffff"}} />
          <Image style={{ marginLeft: 10, width: 150, height: 30}} source={require('./static_assets/logo.png')} />
          <Image style={{ marginLeft: 10, width: 30, height: 30}} source={require('./static_assets/fullscreen.png')} />
          <View style={{width: "1%"}} />
        </View>
      </View>
    );
    
  }
};

AppRegistry.registerComponent('vr', () => vr);
