import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
    Environment,
    Text,
    VrButton
} from 'react-360';
import { NativeModules } from "react-360";
const {VideoModule} = NativeModules;



export default class vr extends React.Component {
  constructor(){
    super();

    this.state = {
      displayBtn: 'flex'
    }

    this.playVideo = this.playVideo.bind(this)
  }

  componentDidMount(): void {
    console.log("MOUNTED");

  }

  playVideo(){
    VideoModule.resume('myplayer');
    this.setState({
      displayBtn: 'none'
    })
  }

  render() {
    Environment.setBackgroundVideo('myplayer');
    console.log("See this?");
    console.dir(this.state);

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

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('vr', () => vr);
