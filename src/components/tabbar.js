import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.tabStyle}>
        <TouchableOpacity onPress={() => Actions.jump('scene1')}><Text style={{color:'#fff'}}> scene1 </Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.jump('scene2')}><Text style={{color:'#fff'}}> scene2 </Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.jump('scene3')}><Text style={{color:'#fff'}}> scene3 </Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.jump('scene4')}><Text style={{color:'#fff'}}> scene4 </Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    tabStyle: {
        flex:1,
        height: 80,
        backgroundColor: '#000000',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})