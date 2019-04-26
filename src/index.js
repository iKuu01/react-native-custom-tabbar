import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Tabbar from './components/tabbar';
import Scene1 from './components/tabbarPages/scene1';
import Scene2 from './components/tabbarPages/scene2';

export default class Index extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Tabbar />
      </View>
    )
  }
}
