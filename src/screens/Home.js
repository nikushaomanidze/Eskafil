import React, { Component } from 'react';  
import {Text,View,TouchableOpacity,SafeAreaView,FlatList,Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default class Home extends Component  {

constructor(){
  super()
  this.state={
    data:[],
    page:1
  }
}


getdata=async()=>{
  const respone= await fetch('https://us-central1-js04-b4877.cloudfunctions.net/api/products?_sort=id&_order=desc&fbclid=IwAR3Z0cawrv0wF7E3_nUbA0UA0lbyVXG2tdikOj1-t-D2xram5baN1xKCm1M?_limit=10&_page=' +this.state.page)

  const data= await respone.json() //აბდეითი
  this.setState({
    data:this.state.data.concat(data),
    page:this.state.page +1
  })
}

componentDidMount(){
  this.getdata()
}
myFooter=()=>{
  return(
    <View>
      <TouchableOpacity onPress={this.getdata} style={{width:300,height:50,backgroundColor:'yellow',marginBottom:80,justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:10}}>
        <Text style={{fontSize:30}}>more result</Text>
      </TouchableOpacity>
    </View>
  )
}






  render() {
    const { navigation } = this.props ;
     
    return (
      <View style={{flex:1, backgroundColor:'rgb(190, 212, 196)'}}>
        <SafeAreaView >
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:5}}>
             <Icon  name='arrow-back' type='Ionicons' size={35} style={{marginLeft:20}}  onPress={()=>navigation.navigate('menu')} />
             <Text style={{fontSize:20,fontWeight:'600',color:'gray'}}>Newly added</Text>
             <Icon  name='shopping-cart' type='AntDesign' size={35} style={{marginRight:20}}  onPress={()=>navigation.navigate('cart')} />
          </View>

          <FlatList
               data={this.state.data}
               keyExtractor={(item,index)=> index.toString()}
               renderItem={({item}) =>
                  <TouchableOpacity  onPress={()=>{navigation.navigate('Result', {item})}}

                      style={{backgroundColor:'black',marginTop:30,marginBottom:30,width:300,height:200,alignSelf:'center',borderRadius:10, position:'relative'}}> 
                     <Image  source={{ uri:item.image }} style={{width:300,height:200,borderRadius:10,resizeMode: 'cover',opacity:0.7 }}/>
                     <View style={{position:'absolute'}}>
                          <View>
                            <Icon  raised name='shopping-cart' type='AntDesign' size={22} color='green' containerStyle={{marginRight:30,opacity:0.7}} onPress={console.log(item.title) }/>
                          </View>
                           <Text style={{marginTop:18,marginLeft:10,fontSize:17,fontWeight:'500', color:"yellow"}}>{item.title}</Text>
                           <Text style={{marginTop:8,marginLeft:10,fontSize:20, letterSpacing:3,fontWeight:'600',color:'red'}}>{item.seller}</Text>
                           <Text style={{marginTop:8,marginLeft:10,fontSize:17,color:'green',fontWeight:'500'}}>{item.price} $</Text>
                     </View>
                      

                  </TouchableOpacity>
                          }
                   ListFooterComponent={this.myFooter}
           />
        </SafeAreaView>
      </View>
    );
  }
  

}