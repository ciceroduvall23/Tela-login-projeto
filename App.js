/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import  React, {useState, useEffect} from 'react';
 import
  {Text,
   View,
   KeyboardAvoidingView,
   Image,TextInput,
   TouchableOpacity,
   StyleSheet,
   Animated,
   Keyboard
 } from 'react-native';
 
 
 export default function App(){
 
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}));
 
  useEffect(()=> {
 
   KeyboardDidShowListener = Keyboard.addListener('KeyboardDidShow', KeyboardDidShow);
   KeyboardDidHideListener = Keyboard.addListener('KeyboardDidHide', KeyboardDidHide); 
 
 
    Animated.parallel([
     Animated.spring(offset.y, {
       toValue:0,
       speed:4,
       bounciness:20
      }),
      Animated.timing(opacity, {
          toValue:1,
          duration:200,
      })
     ]).start();
  },[]);
 
  function KeyboardDidShow(){
   alert('teclado aberto')
 
  }
 
  function KeyboardDidHide(){
    alert('teclado fechado')
 
  }
   return (
     <KeyboardAvoidingView style={style.backgroud}>
       <View style={style.containerLogo}>
       <Animated.Image 
       style={{
       width:logo.x,
       height:logo.y,  
       }}
      
       source={require('./assets/logo.png')}
       />
       </View>
 
       <Animated.View style={[style.container,
       {
         opacity:opacity, 
         transform: [
         {translateY:offset.y}
        ]
       }
       ]}
       >
 
       <TextInput style={style.input}
       placeholder="Email"
       autoCorrect={false}
       onChangeText={()=> {}}
       />
 
      <TextInput style={style.input}
       placeholder="Senha"
       autoCorrect={true}
       onChangeText={()=> {}}
       />
       
       <TouchableOpacity style={style.btnSubmit} > 
         <Text  style={style.submitText}>Acessar</Text>
       </TouchableOpacity>
 
       <TouchableOpacity style={style.btnRegister}>
         <Text style={style.RegisterText}>Criar conta gratuita</Text>
       </TouchableOpacity>
 
       </Animated.View>
       </KeyboardAvoidingView>
     );
   }
 
 const style = StyleSheet.create({
     backgroud:{
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:'#191919'
 
     },
     containerLogo:{
       flex:1,
       justifyContent:'center'
      },
      container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'90%',
      paddingBottom:50
 
     },
     input:{
     backgroundColor:'#fff',
     width:'90%',
     marginBottom:15,
     color:'#222',
     fontSize:17,
     borderRadius:7,
     padding:10, 
     },
 
     btnSubmit:
     {
     backgroundColor:'#35AAFF',
     width:'90%',
     height:45,
     alignItems: 'center',
     justifyContent:'center',
     borderRadius:7
     },
 
     submitText:
     {
    color:'#FFF',
    fontSize:18
     },
 
     btnRegister:
     {
      marginTop:10,
     },
 
     RegisterText:
     {
     color:'#FFF',
 
     }
  
 
 })
