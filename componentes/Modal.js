import React, {useState} from 'react'
import {View,Text,Modal, Button} from 'react-native'

export default function(){
   const [sim,setSim]=useState(true)
    return(
          <View>
              <Modal 
              animationType="slide"
              transparent={false}
              visible={sim}

              >
                  <Text>
                      ola mundo
                  </Text>
                  <Button 
                  title="fechar"
                  onPress={()=>{setSim(false)}}
                  on
                  />
              </Modal>
          </View>
 
   );

}