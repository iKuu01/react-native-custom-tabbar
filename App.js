import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabbar from './src/components/tabbar';
import RouterComp from './src/components/routerComp';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RouterComp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
