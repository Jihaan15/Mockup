import * as React from 'react'
import { render } from 'react-dom'
import { View,Text,TextInput ,TouchableOpacity} from 'react-native'

export default class Welcome extends React.Component{
    render(){
        return(
            <View>
            <TextInput style={styles.Component}
            placeholder="Type your To Do"
            placeholderTextColor='purple' />

            <TouchableOpacity style={styles.EnterButton} onPress={()=>{
                this.props.navigation.navigate('Pending')
            }}></TouchableOpacity>

            </View>  
        )
    }

}
const styles = StyleSheet.create({
    Component:{justifyContent:'center',
               alignItems:'center',
               flex:1,
               backgroundColor:'#0d98ba',
               
         },

})