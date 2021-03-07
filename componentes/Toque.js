import React, {useState} from 'react'
import {Text,StyleSheet,View,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'

export default function(){
    const [cont,setCont]=useState(0)
     
    const contar=()=>{
        setCont(cont + 1)
    
  }
    
    return(
    <View>
      <TouchableHighlight style={estilos.botao}
         onPress={contar}
         underlayColor="#008"
      >
      <Text>Cicero Duvall</Text>
      </TouchableHighlight>
      <Text>{cont}</Text>
   
        <TouchableOpacity style={estilos.botao}
           onPress={contar}
           underlayColor="#008"
        >
        <Text>Cicero Duvall</Text>
        </TouchableOpacity>
        <Text>{cont}</Text>

        <TouchableWithoutFeedback style={estilos.botao}
           onPress={contar}
           underlayColor="#008"
        >
        <Text>Cicero Duvall</Text>
        </TouchableWithoutFeedback>
        <Text>{cont}</Text>

      </View>
 
     );
}

const estilos = StyleSheet.create({
   botao:{
       alignItems:'center',
       backgroundColor:'#ccc',
       padding:10

   }

})
