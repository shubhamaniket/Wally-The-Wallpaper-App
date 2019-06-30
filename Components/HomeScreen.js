import React from 'react';
import { StyleSheet,View,ImageBackground} from 'react-native';
import Menulist from './Menulist';
export default class App extends React.Component{
  static navigationOptions = {
    header : null
  }
  render(){
  return (
    <ImageBackground source={require('../assets/back.jpg')} style={{width:'100%',height:'100%'}}>
      <View style={styles.menucontainer}>
        <Menulist images={require('../assets/travel.png')} text="Travel" Press={()=>{this.props.navigation.navigate('Travel')}}/>
        <Menulist images={require('../assets/background.png')} text="Backgrounds" Press={()=>{this.props.navigation.navigate('Background')}}/>
        <Menulist images={require('../assets/science.png')} text="Science" Press={()=>{this.props.navigation.navigate('Science')}}/>
        <Menulist images={require('../assets/education.png')} text="Education" Press={()=>{this.props.navigation.navigate('Education')}}/>
        <Menulist images={require('../assets/places.png')} text="Places" Press={()=>{this.props.navigation.navigate('Places')}}/>
        <Menulist images={require('../assets/amimals.png')} text="Animals" Press={()=>{this.props.navigation.navigate('Animals')}}/>
        <Menulist images={require('../assets/industry.png')} text="Industry" Press={()=>{this.props.navigation.navigate('Industry')}}/>
        <Menulist images={require('../assets/food.png')} text="Food" Press={()=>{this.props.navigation.navigate('Food')}}/>
        <Menulist images={require('../assets/editor.png')} text="Editors Choice" Press={()=>{this.props.navigation.navigate('Editors')}}/>
        <Menulist images={require('../assets/sports.png')} text="Sports" Press={()=>{this.props.navigation.navigate('Sports')}}/>
        <Menulist images={require('../assets/transport.png')} text="Transport" Press={()=>{this.props.navigation.navigate('Transport')}}/>
        <Menulist images={require('../assets/build.png')} text="Buildings" Press={()=>{this.props.navigation.navigate('Buildings')}}/>
        <Menulist images={require('../assets/business.png')} text="Business" Press={()=>{this.props.navigation.navigate('Business')}}/>
        <Menulist images={require('../assets/music.png')} text="Music" Press={()=>{this.props.navigation.navigate('Music')}}/>
      </View>  
    </ImageBackground>
  );
  }
}

const styles = StyleSheet.create({
  menucontainer : {
    marginTop:20,
    height: '40%',
    flexDirection : 'row',
    flexWrap : 'wrap'
  },
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
});
