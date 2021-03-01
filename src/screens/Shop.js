
import React, { useState, useEffect } from 'react'; 
import { SafeAreaView, Text, StyleSheet, View, FlatList ,Image, TouchableOpacity} from 'react-native';
import { Icon, SearchBar,} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import { Searchbar } from 'react-native-paper';

const Shop = () => {

  
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fetch('https://us-central1-js04-b4877.cloudfunctions.net/api/products')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  
  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity  onPress={()=>{navigation.navigate('Result', {item})}}

                      style={{backgroundColor:'black',marginTop:40,marginBottom:30,width:300,height:200,alignSelf:'center',borderRadius:10, position:'relative'}}> 
                     <Image  source={{ uri:item.image }} style={{width:300,height:200,borderRadius:10,resizeMode: 'cover',opacity:0.7 }}/>
                     <View style={{position:'absolute'}}>
                          <View>
                            <Icon  raised name='shopping-cart' type='AntDesign' size={22} color='green' containerStyle={{marginRight:30,opacity:0.7}} onPress={()=>console.log(item.title)} />
                          </View>
                           <Text style={{marginTop:18,marginLeft:10,fontSize:17,fontWeight:'500', color:"yellow"}}>{item.title}</Text>
                           <Text style={{marginTop:8,marginLeft:10,fontSize:20, letterSpacing:3,fontWeight:'600',color:'red'}}>{item.seller}</Text>
                           <Text style={{marginTop:8,marginLeft:10,fontSize:17,color:'green',fontWeight:'500'}}>{item.price} $</Text>
                     </View>
                      

                  </TouchableOpacity>
      
    );
  };


  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:'green'}}>
         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:5}}>
             <Icon  name='arrow-back' type='Ionicons' size={35} style={{marginLeft:20}}  onPress={()=>navigation.navigate('menu')} />
             <Text style={{fontSize:20,fontWeight:'600',color:'gray'}}>S H O P</Text>
             <Icon  name='shopping-cart' type='AntDesign' size={35} style={{marginRight:20}}  onPress={()=> navigation.navigate('cart')} />
          </View>
        <Searchbar
        style={{marginRight:25,marginLeft:25,marginTop:10,marginBottom:1, borderRadius:10}}
         placeholder="Search here"
         onChangeText={(text) => searchFilterFunction(text)}
         onClear={(text) => searchFilterFunction('')}
         value={search}
         />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    

  },
  itemStyle: {
    padding: 10,
    marginTop:50
  },
});

export default Shop;

