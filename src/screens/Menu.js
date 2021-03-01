import React from 'react'
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
const Menu =({navigation, navigation:{ goBack }})=>{
return(
    <View style={{backgroundColor:'#412C2C',flex:1}}>
      <SafeAreaView>
          <Icon
                          name='close'
                          type='Feather'
                          size={50}
                          color='white'
                          style={styles.iconStyle}
                          onPress={ ()=> goBack()} />
           <View style={{ marginTop:150}}>
                     <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}  >
                                     <Text style={{color:"white",fontSize:40,fontWeight:'500'}}>Home</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Shop')}  >
                                     <Text style={{color:"white",fontSize:40,fontWeight:'500'}}>Shop</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('About')}  >
                                     <Text style={{color:"white",fontSize:40,fontWeight:'500'}}>About</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Contact')}  >
                                     <Text style={{color:"white",fontSize:40,fontWeight:'500'}}>Contact</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('cart')}  >
                                     <Text style={{color:"white",fontSize:40,fontWeight:'500'}}>My cart</Text>
                     </TouchableOpacity>
           </View>               

      </SafeAreaView>
    </View>
)
}
const styles = StyleSheet.create({
    iconStyle:{
        alignSelf:'flex-end',
        marginRight:30,
        marginTop:20
    },
    button:{
        marginLeft:30,
        marginTop:30,
    }

})
export default Menu