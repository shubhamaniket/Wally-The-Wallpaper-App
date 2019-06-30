import React from 'react';
import {View,FlatList,ActivityIndicator,ImageBackground,Dimensions,Image} from 'react-native';
const{width,height} = Dimensions.get('window');

export default class Science extends React.Component{
    static navigationOptions = {
        title : 'Science',
        headerTransparent: true
    }
    state = {
        imagedb : [],
        isLoading : true
    }
    loadwallpaper = () => {
        fetch('https://pixabay.com/api/?key=YOUR_API_KEY&category=science&per_page=200&orientation=vertical&safesearch=true')
        .then((data)=>{ return data.json()})
        .then((datatwo)=>{console.log(datatwo.hits)
        this.setState({
            imagedb : datatwo.hits,
            isLoading : false
        })})
    }
    componentDidMount(){
        this.loadwallpaper();
    }
    render(){
        if(this.state.isLoading)
        {
            return(
                <ImageBackground source={require('../assets/back.jpg')} style={{width:'100%',height:'100%'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <ActivityIndicator size='large' color='black'/>
                    </View>
                </ImageBackground>
            );
        }
        else
        {
            return(
                <View style={{flex:1}}>
                    <FlatList
                    horizontal
                    pagingEnabled
                    data={this.state.imagedb}
                    renderItem={({item})=>{
                        return(
                            <View style={{flex:1}}>
                                <View style={{width,height}}>
                                    <Image source={{uri : item.largeImageURL}} style={{width:null,height:null,flex:1,resizeMode:'cover'}}/>
                                </View>
                            </View>
                        );
                    }}/>
                </View>
            );
        }
    }
}