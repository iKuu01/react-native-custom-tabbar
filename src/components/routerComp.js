import React, { Component } from 'react'
import {View} from 'react-native'
import { Router, Scene } from 'react-native-router-flux';
import Scene1 from './tabbarPages/scene1';
import Scene4 from './tabbarPages/scene4';
import Scene3 from './tabbarPages/scene3';
import Scene2 from './tabbarPages/scene2';
import Tabbar from './tabbar';
import Index from '..';

export default class RouterComp extends Component {
  render() {
    return (
       <View style={{flex:1}}>
           <Router>
               <Scene key='root' hideNavBar>
                    <Scene key='scene1' component={Scene1} />
                    <Scene key='scene2' component={Scene2} />
                    <Scene key='scene3' component={Scene3} />
                    <Scene key='scene4' component={Scene4} />
               </Scene>
           </Router>
           <Tabbar />
       </View>
    )
  }
}
