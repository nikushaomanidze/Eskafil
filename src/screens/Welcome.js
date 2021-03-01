import React from 'react';
import {View, Text, StyleSheet,SafeAreaView ,Image, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'


const Welcome =({ navigation })=>{
    return(
        <View style={styles.viewStyle}>
            <SafeAreaView>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>Eskafil</Text>
                    <View style={{flexDirection:'row'}}>
                        <Icon
                          raised
                          name='shopping-cart'
                          type='AntDesign'
                          size={30}
                          style={styles.iconStyle}
                          onPress={() =>  navigation.navigate('cart')} /> 
                        <Icon
                          raised
                          name='menu'
                          type='Feather'
                          size={30}
                          style={styles.iconStyle}
                          onPress={() =>  navigation.navigate('menu')} />
                    </View>
                </View>
                <View style={{marginTop:40}} >
                    <Text style={styles.textStyle}>Eskafil, your</Text>
                    <Text style={styles.textStyle}>future</Text>
                    <Text style={styles.textStyle}>in your hands.</Text>
                </View>
                <View style={styles.welcomeImages}>
                     <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}  >
                                     <Text style={{color:"white"}}>SHOP NOW</Text>
                     </TouchableOpacity>
                   <Image
                      source={{ uri: 'https://i.pinimg.com/originals/49/5a/87/495a87dede7f4c210d56fc7e9038887f.jpg' }}
                      style={{ width: 200, height: 300,alignSelf:'flex-end',marginTop:60,position:'absolute',marginEnd:30}} />
                      <Image
                      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKk9l80s-lVtB6wkRP-IvxSah-xrY6OYvnw&usqp=CAU' }}
                      style={{ width: 180, height: 200 , alignSelf:'flex-start', marginTop:100, position:'absolute' , marginLeft:20}} />
                      <Image
                      source={{ uri: 'data:image/jpeg;base64,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' }}
                      style={{ width: 150, height: 200 ,alignSelf:'center', marginTop:160,}} />
                </View>

            </SafeAreaView>

        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'white',
        flex:1
    },
    headerStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        alignItems:'center'

    },
    headerTextStyle:{
        fontSize:40,
        marginLeft:10,
        letterSpacing:0.5,
        fontWeight:'800',
    },
    iconStyle:{
        color:'black',
        
    },
    textStyle:{
        fontSize:50,
        marginLeft:10,
        fontWeight:'600'
    },
    button: {
        width:150,
        height:40,
        marginLeft:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#rgb(17, 15, 6)',
        marginTop:15,
        position:'relative'
      },

  });
  

export default Welcome