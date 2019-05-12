import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    VrButton,
    Environment
} from 'react-360';
import { NativeModules } from "react-360";
const {VideoModule} = NativeModules;



export default class vr extends React.Component {
  render() {
    Environment.setBackgroundVideo('myplayer');
    return (
      <View style={styles.panel} onEnter={VideoModule.resume('myplayer')}>
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
