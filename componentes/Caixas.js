import React from 'react';
import {Text, View} from 'react-native'; 


export default function (props){
       
return(

    <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
      {
       props.exibir ?
    <View style={{flex:1}}>
       <View style={{width:230,height:100,backgroundColor:'#00f'}}></View> 
       <View style={{width:230,height:100,backgroundColor:'#00a'}}></View>
       <View style={{width:230,height:100,backgroundColor:'#005'}}></View>
       
    </View>
   :    

 <View style={{flex:1}}> 
    <View style={{width:230,height:100,backgroundColor:'#f00'}}></View> 
    <View style={{width:230,height:100,backgroundColor:'#a00'}}></View>
    <View style={{width:230,height:100,backgroundColor:'#500'}}></View>
</View> 
 }   
 
    </View> 
)
}
