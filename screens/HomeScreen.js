import React, {useEffect, useState} from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { Service } from '../components/Services';

import { styles } from '../components/Style';

export default function HomeScreen(props) {
  
  const [people, setPeople] = useState([])
  const [nextPage, setNextPage] = useState(1)
  const [peopleFiltered, setPeopleFiltered] = useState([])

  useEffect(() => {
      getPeoples()
  },[])

  async function getPeoples() {
    const response = await Service(type='people',nextPage)
    console.log(response.status,nextPage)
    if(response.status === 200) {
      const result = await response.json() 
      setPeople([...people,...result.results])
      setPeopleFiltered([...peopleFiltered,...result.results])
      //console.log(nextPage)
      if(result.next != null)
        setNextPage(nextPage+1)
    }
  }

  searchFilterFunction = (text) => {    
    const newData = peopleFiltered.filter(item => {      
        const itemData = `${item.name}`;
        return itemData.indexOf(text) > -1;    
    })   
    setPeopleFiltered(newData)
  }

  _renderBtn = (nome, nasc, gender, onpress) =>
        <TouchableOpacity style={[{ marginBottom: 20 }]} onPress={() => onpress()} rejectResponderTermination>
            <View style={{ flex: 1 }}>
                    <Text style={[{ color: '#FFC208', fontSize:22, marginTop:5 }]}><Text style={[{ color: '#FFF', fontSize:16 }]}>{nome}</Text></Text>
                    <Text style={[{ color: '#FFC208', fontSize:16, marginTop:5 }]}>Data Nascimento: <Text style={[{ color: '#FFF', fontSize:16 }]}>{nasc}</Text></Text>
                    <Text style={[{ color: '#FFC208', fontSize:16, marginTop:5 }]}>Gender: <Text style={[{ color: '#FFF', fontSize:16 }]}>{gender}</Text></Text>
                    <Text style={[{ color: '#FFC208', fontSize:16, marginTop:5 }]}>Ver local de Nascimento</Text>
            </View>
        </TouchableOpacity>

  _renderFooter = () => {
      return (
        <View style={{alignSelf: 'center', marginVertical: 20}}>
          <ActivityIndicator />
        </View>
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.welcomeImage}
          />
      </View>
      <FlatList
          data={peopleFiltered}
          keyExtractor={item => item.name} 
          style={{ margin:20}}
          onEndReached={()=>{ getPeoples() }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={_renderFooter()}
          renderItem={({ item }) => {
              return _renderBtn(
                    item.name,
                    item.birth_year,
                    item.gender,
                () => {}
              )
          }} 
      />
    </View>
  );
}
