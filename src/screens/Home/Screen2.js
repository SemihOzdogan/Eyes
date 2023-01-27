import React, { useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, TextInput, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import categories, { menu, markets } from '../../mockData';
import Icon from "react-native-vector-icons/FontAwesome5";


const App = ({ navigation }) => {
  const [coord, setCoord] = useState(),
    [activeMenu, setActiveMenu] = useState(0),
    [activeCategory, setActiveCategory] = useState(0),

    initialRegion = {
      latitude: 41.0140121,
      longitude: 28.9659668,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
    {
      categoryText, categoryImage, categoryContainer, mapViewContainer, mapViewMainContainer,
      categorySubContainer, categoryScrollView, safeArea, headerContainer, headerSubContainer,
      searchInputContainer, searchInputImage, searchInput, filterButtonContainer, filterButton, filterButtonImage, categoryContainerWithShadow
    } = styles;
  Geolocation.getCurrentPosition(
    (c) =>
      setCoord({
        latitude: c.coords.latitude,
        longitude: c.coords.longitude,
      }),
    (error) => console.log(error),
    {
      enableHighAccuracy: true,
    },
  );
  return (
    <SafeAreaView style={safeArea}>
      <View style={headerContainer}>
        <View style={headerSubContainer}>
          <View style={searchInputContainer}>
            <Image source={require('../../img/search.png')} style={searchInputImage} resizeMode="contain" />
            <TextInput placeholder="Ara" style={searchInput} />
          </View>
          <View style={filterButtonContainer}>
            <TouchableOpacity onPress={() => alert("tıklandı")} style={filterButton} >
              <Image source={require("../../img/filtre.png")} style={filterButtonImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Text style={{ fontSize: 14, padding: 3, color: "#89807A", right: 15, }}>Daha Fazla</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View style={{ width: 60, height: "100%", flexDirection: "column-reverse", justifyContent: "center" }}>
            {menu.map((menu, index) => {
              return (
                <View key={menu.index} style={{ width: 50, height: 70, margin: 5, justifyContent: "center" }}>
                  <TouchableOpacity onPress={() => setActiveMenu(index)} >
                    <Text style={{ transform: [{ rotate: '270deg' }], textAlign: "center", fontSize: 14, color: index === activeMenu ? "#E95F65" : "#000" }}>{menu.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>


          <View style={{ flex: 5, flexDirection: "row" }}>

            <ScrollView
              horizontal={true}
              style={{ flex: 1 }}
              showsHorizontalScrollIndicator={false}>
              {markets.map((market) => {
                const avatars = market.avatars
                return (
                  <View key={market.index} style={{ flex: 1, borderRadius: 16, width: 164, padding: 5, paddingHorizontal: 5, marginHorizontal: 10 }}>
                    <View style={{ flex: 2, backgroundColor: "white", width: 164, justifyContent: "center", alignItems: "center", borderTopRightRadius: 16, borderTopLeftRadius: 16 }}>
                      <Image source={market.image} style={{ width: "90%", height: "90%" }} resizeMode="contain" />
                      <View style={{ position: "absolute", right: 18, bottom: 25, backgroundColor: "#747170", borderRadius: 16, paddingHorizontal: 8, paddingVertical: 4 }}>
                        <Text style={{ fontSize: 10, color: "white", fontWeight: "500" }}>{market.location}</Text>
                      </View>
                      <View style={{ width: 25, height: 25, borderRadius: 12.5, position: "absolute", right: 18, top: 12, backgroundColor: "#89807A", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                          <Icon name="bookmark" size={10} color="#24C690" />
                        </View>
                      </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: "white", width: 164, borderBottomRightRadius: 16, borderBottomLeftRadius: 16 }} >
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1.5, alignItems: "flex-start", justifyContent: "center" }}>
                          <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: "500", color: "#000000" }}>{market.name}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "row" }}>
                          {avatars.map((data, i) => {
                            return (
                              <View key={i} style={{ marginRight: -5 }}>
                                <Image source={data.avatar} style={{ width: 20, height: 20, }} />
                              </View>
                            );
                          })}
                          {avatars.length === 3 &&
                            <View style={{ width: 20, height: 20, position: "absolute", right: 10, top: 10, backgroundColor: "#eee", opacity: 0.7, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                              <Text style={{ fontSize: 6, fontWeight: "500", color: "#000" }}>+1</Text>
                            </View>
                          }
                        </View>
                      </View>
                      <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft: 10, }}>
                          <Image source={require("../../img/locate.png")} style={{ width: 15, height: 15 }} resizeMode="contain" />
                          <Text style={{ fontSize: 14, fontWeight: "500", color: "#89807A" }}>{market.city}</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                          <Image source={market.line} style={{ width: "90%", height: 20 }} resizeMode="stretch" />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>


          </View>
        </View>

      </View >
      <View style={categorySubContainer}>
        <ScrollView
          horizontal={true}
          style={{ flex: 1, }}
          contentContainerStyle={{ categoryScrollView }}
          showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            return (
              <TouchableOpacity key={category.value} activeOpacity={0.6} onPress={() => setActiveCategory(category.value)}>
                <View style={[activeCategory === index ? categoryContainerWithShadow : categoryContainer]}>
                  <Image source={category.icon} resizeMode="contain" style={categoryImage} />
                  <Text style={categoryText}>{category.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={mapViewMainContainer}>

        <MapView
          provider={PROVIDER_GOOGLE}
          mapPadding={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}
          region={initialRegion}
          style={mapViewContainer}
          initialRegion={initialRegion}
        // scrollEnabled={false}
        >
          <Marker coordinate={initialRegion} image={require('../../img/pin.png')} title="Bramın" />
        </MapView>
      </View>
    </SafeAreaView >

  );
};
export default App;

const styles = StyleSheet.create({

  searchInputContainer: {
    flex: 3,
    marginLeft: 22
  },
  searchInputImage: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 12,
    left: 15
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "#ccc",
    paddingLeft: 50,
    fontSize: 16
  },

  filterButtonContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },

  filterButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7
  },

  filterButtonImage: {
    width: 100,
    height: 100
  },

  headerSubContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  headerContainer: {
    flex: 1,
    justifyContent: "center",
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },

  categoryText: {
    color: "#8A8D9F",
    fontSize: 16,
    marginHorizontal: 5
  },
  categoryImage: {
    width: 20,
    height: 20
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    marginLeft: 5,
    padding: 10,
    margin: 5,
  },
  categoryContainerWithShadow: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    marginLeft: 5,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 4,
  },
  categorySubContainer: {
    width: "100%",
    height: 50,
  },
  categoryScrollView: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mapViewContainer: {
    width: "100%",
    height: "100%",
  },
  mapViewMainContainer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginHorizontal: 32
  },

});