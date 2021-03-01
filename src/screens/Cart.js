import React from 'react';
import {View, Text,SafeAreaView} from 'react-native'
import { Icon} from 'react-native-elements';

const Cart =( {navigation: { goBack }})=>{
    return(
        <View style={{borderBottomWidth:1,borderBottomColor:'black',}}>
            <SafeAreaView style={{flexDirection:'row'}}>
            <Icon  name='arrow-back' type='Ionicons' size={35} style={{marginRight:90,marginLeft:10}}  onPress={()=>goBack()} />
             <Text style={{fontSize:30,alignSelf:'center',}}>No items</Text>
            </SafeAreaView>
        </View>
    )
} 


export default Cart