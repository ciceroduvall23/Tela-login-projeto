import React, { useState } from 'react'
import {View,ScrollView,Text, RefreshControl} from 'react-native'

export default function(){
  const [atualizar,setAtualizando]=useState(false)
  const Atualizando=()=>{
    setAtualizando(true);
    setTimeout(() => {setAtualizando(false)},3000);
  
  }
    return(
      <View>
           <ScrollView style={{backgroundColor:'#3498',color:'#000',fontSize:33}}
                 refreshControl={
                 <RefreshControl
                       refreshing={atualizar}
                       onRefresh={Atualizando}
                       />
               }   
            >
              <Text style={{color:'#eee'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat est, convallis ut venenatis a, ornare eu tortor. Sed leo odio, aliquam congue arcu eget, ornare pharetra nisl. Proin at ante vitae eros consequat finibus. Etiam vel pulvinar sapien, quis pretium est. Integer eu lectus at ipsum tincidunt ornare et sed mauris. Fusce porttitor lacus eget nunc imperdiet mollis. Sed vestibulum accumsan malesuada. Aenean venenatis velit in enim iaculis semper. Fusce efficitur sapien in felis volutpat cursus. Curabitur sed tincidunt sem. Donec tincidunt nisl a dolor lacinia porta. Praesent commodo sem eleifend auctor porttitor. Pellentesque bibendum faucibus neque, ac consequat nulla venenatis sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque scelerisque porttitor nibh, non finibus quam pellentesque sed. Mauris sit amet sapien ac nibh consectetur dapibus aliquet eget est.

            </Text>
           </ScrollView>
      </View>   
    )
}