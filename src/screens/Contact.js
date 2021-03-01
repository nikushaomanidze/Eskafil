import React from 'react'
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Linking} from 'react-native'
import { Icon } from 'react-native-elements';


const Contact =({ navigation })=>{
    return(
        <View style={{backgroundColor:'gray' , flex:1}}>
            <SafeAreaView style={{justifyContent:'center',alignItems:'center'}}>
              <Icon name='arrow-back' type='Ionicons' size={35} color='black' containerStyle={{marginRight:300, marginTop:30}} onPress={()=>navigation.navigate('menu')} />
              <Text style={{fontSize:35,marginTop:20}}>Contact us</Text>
                <Text style={{marginTop:50,textAlign:'center',marginRight:25,marginLeft:25, fontSize:20}}>You've got this. You've got us. Search our Knowledge Base to quickly find answers to your questions.
                                           You've got this. You've got us. Search our Knowledge Base to quickly find answers to your questions.</Text>
                <View style={{flexDirection:'row', marginTop:30}}>
                  <Text style={{fontSize:20}}> Adress :   </Text>  
                  <Text style={{fontSize:20}}>Tbilisi, rustaveli 25a.</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:15}}>
                  <Text style={{fontSize:20}}>Contact:   </Text>  
                  <Text  style={{fontSize:20, color:'white'}} onPress={()=>{Linking.openURL('tel:591446365');}} >+995 591 446 365</Text>
                </View>

            </SafeAreaView>
        </View>
    )
}

export default Contact