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
    console.dir(window.location)
    Environment.setBackgroundVideo('myplayer');
    return (
      <View style={styles.panel}>
        <VrButton onClick={this.playVideo} style={{display: this.state.displayBtn}}>
          <Text style={{color: "#fff"}}>
            PLAY
          </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr', () => vr);
