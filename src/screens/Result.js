import React from 'react'
import {View,Text,SafeAreaView,Image} from 'react-native'
import { Icon} from 'react-native-elements';

const Result= ({ route, navigation: { goBack } ,navigation })=>{

    const { item } = route.params

return( 
    <View style={{backgroundColor:'gray', flex:1}}>
        <SafeAreaView style={{paddingBottom:30}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:5}}>
            <Icon  name='arrow-back' type='Ionicons' size={35} style={{marginLeft:20}}  onPress={()=>goBack()} />
             <Text style={{fontSize:20,fontWeight:'600',color:'black'}}>{item.seller}</Text>
             <Icon  name='shopping-cart' type='AntDesign' size={35} style={{marginRight:20}}  onPress={()=> navigation.navigate('cart')} />
            </View>
            <Image  source={{ uri:item.image }} style={{width:350,height:350,borderRadius:10,resizeMode: 'cover',alignSelf:'center', marginTop:10 }}/>
            <Text style={{marginTop:18,marginLeft:10,fontSize:19,}}>{item.title}</Text>
            <Text style={{marginTop:8,marginLeft:10,fontSize:30, letterSpacing:3,fontWeight:'600',color:'red'}}>{item.seller}</Text>
            <Text style={{marginTop:8,marginLeft:10,fontSize:25,color:'green',fontWeight:'500'}}>{item.price} $</Text>
            <Text style={{marginTop:8,marginLeft:10,marginRight:10,fontSize:15,color:'black',fontWeight:'500',}}>{item.description}</Text>
        </SafeAreaView>
    </View>
) 
}
  export default Result