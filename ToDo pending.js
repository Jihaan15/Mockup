import * as React from 'react'
import { View,Text,TextInput ,TouchableOpacity} from 'react-native'
import {  createSwitchNavigator , createAppContainer  } from 'react-navigation';
import Welcome from './Welcome'

export default class Pending extends React.Component{
 render(){
     return(
        <AppContainer/>
     )
 }
}
var AppNavigator=createSwitchNavigator({
    Welcome:Welcome
})
const AppContainer = createAppContainer(AppNavigator)