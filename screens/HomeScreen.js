import React, {useEffect, useState} from 'react';
import { Image, View, FlatList } from 'react-native';

import { Service, ServiceModal } from '../components/Services';

import { _renderFooter, _renderBtn, _renderModal, _renderSpecies, _renderPlanet} from '../components/ScrollRender';
import { styles } from '../components/Style';

export default function HomeScreen() {
  
  const [people, setPeople] = useState([])
  const [specie, setSpecie] = useState([])
  const [planet, setPlanet] = useState([])
  const [nextPage, setNextPage] = useState(1)
  const [peopleFiltered, setPeopleFiltered] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
      getPeoples('people')
  },[])

  async function getPeoples(type) {
    const response = await Service(type,nextPage)
    if(response.status === 200) {
      const result = await response.json() 
      setPeople([...people,...result.results])
      setPeopleFiltered([...peopleFiltered,...result.results])
      if(result.next != null)
        setNextPage(nextPage+1)
    }
  }

  async function getModal(type, url) {
    console.log(url)
    const response = await ServiceModal(url)
    if(response.status === 200) {
      const result = await response.json() 
      (type === 'specie')?
      setSpecie(result):
      setPlanet(result)
      setModalVisible(!modalVisible);
    }
  }

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
                  item.birth_year,
                  item.eye_color,
                  item.gender,
                  item.hair_color,
                  item.height,
                  item.mass,
                  item.name,
                  item.skin_color,
              () => { getModal('specie',item.species[0]) },
              () => { getModal('planets', item.homeworld) }
            )
          }} 
      />
      { _renderModal(modalVisible, specie, planet , () => { setModalVisible(!modalVisible) }) }
    </View>
  );
}
