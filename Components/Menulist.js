import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';

export default class Menulist extends React.Component{
    render(){
        return(
            <View style={styles.menuitem}>
                <TouchableOpacity onPress={this.props.Press}>
                <Image source={this.props.images} style={styles.image}/>
                <Text style={styles.textstyling}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuitem: {
        width: '33.333333%',
        height:'50%',
        padding:10,
        borderColor:'#000',
      },
      image:{
        width:'100%',
        height:'80%',
        opacity:0.8,
      },
      textstyling:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
      }
})