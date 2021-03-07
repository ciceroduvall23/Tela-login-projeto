import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';


const produtos=[
 {
    id:'001',
    desc:['mouse','25.00']
 },
 {
    id:'002',
    desc:['teclado','50.00']
 },
 {
    id:'003',
    desc:['monitor','200.00']
 },
 {
    id:'003',
    desc:['gabinete','150.00']
 },
 {
    id:'003',
    desc:['Fonte','350.00']
 },
 {
    id:'003',
    desc:['GTA 5','80.00']
 },
 {
    id:'003',
    desc:['SSD','230.00']
 },
 {
    id:'003',
    desc:['HD','140.00']
 },
 {
    id:'003',
    desc:['monitor','200.00']
 },
 {
    id:'003',
    desc:['monitor','200.00']
 },
 {
   id:'003',
   desc:['SSD','230.00']
},
{
   id:'003',
   desc:['HD','140.00']
},
{
   id:'003',
   desc:['monitor','200.00']
},
{
   id:'003',
   desc:['monitor','200.00']
},

]
export default function(){

    return(
     <View>
    <FlatList
         data={produtos}
         keyExtractor={item=>item.id}
       renderItem={({item})=>
       <View style={estilos.item}>
       <Text style={estilos.prod}>Descrição:{item.desc[0]} - valor:{item.desc[1]}</Text>
       </View>}  
    />

     </View>
)
}

const estilos=StyleSheet.create({
   item:{
       backgroundColor:'#6495ED',
       padding:10,
       top:70,
       marginVertical:10,
       marginHorizontal:26,
       height:50
       
   },
   prod:{
   fontSize:20,
   fontStyle:'italic',
   color:'#fff'
   }
})




