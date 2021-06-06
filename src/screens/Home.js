import {Icon} from 'native-base';
import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const categoriesData = [
  {
    id: '1',
    title: 'Camps',
    image: require('../images/CAMPS.jpg'),
  },
  {
    id: '2',
    title: 'Tours',
    image: require('../images/TOURS.jpg'),
  },
  {
    id: '3',
    title: 'Expedition',
    image: require('../images/EXPEDITION.jpg'),
  },
  {
    id: '4',
    title: 'Swim',
    image: require('../images/SWIM.jpg'),
  },
];

const destinationsData = [
  {
    id: '1',
    title: 'Bhutan\nCultural Tour',
    image: require('../images/BHUTANCULTURALTOUR.jpg'),
    rating: '4.8 (215)',
    description:
      'Start and end in Paro ! With the Mountain Hikes tour 8 Days - Bhutan Cultural Tour with 3 Day Chelela Trek,  you have ...',
  },
  {
    id: '2',
    title: 'Japan\nCulture Tour',
    image: require('../images/JAPAN.jpg'),
    rating: '4.6 (219)',
    description:
      'Start and end in Paro ! With the Mountain Hikes tour 8 Days - Japan Cultural Tour with 3 Day Chelela Trek,  you have ...',
  },
  {
    id: '3',
    title: 'Bejing\nCultural Tour',
    image: require('../images/BEIJINGCULTURALTOUR.jpg'),
    rating: '4.9 (396)',
    description:
      'Start and end in Paro ! With the Mountain Hikes tour 8 Days - Bejing Cultural Tour with 3 Day Chelela Trek,  you have ...',
  },
  {
    id: '4',
    title: 'Brazil\nTour',
    image: require('../images/WATERFALLS.jpg'),
    rating: '4.7 (326)',
    description:
      'Start and end in Paro ! With the Mountain Hikes tour 8 Days - Brazil Cultural Tour with 3 Day Chelela Trek,  you have ...',
  },
];

export default function Home({navigation}) {
  // This function is used for categories
  const renderItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={styles.categoriesBackground}
        imageStyle={{borderRadius: 20}}>
        <Text style={styles.categoriesText}>{item.title}</Text>
      </ImageBackground>
    );
  };

  //  This function is used for top destimatiom deisgn
  const destinationsRenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {places: item})}>
        <ImageBackground
          source={item.image}
          style={styles.destinationBackground}
          imageStyle={{borderRadius: 20}}>
          <View style={styles.heartView}>
            <Icon name="heart" style={{color: '#0359c9'}} />
          </View>
          <View style={{position: 'absolute', left: 10, bottom: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" style={{fontSize: 20, color: '#FCCD12'}} />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            <Text style={styles.destinationName}>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* This is for header wich include profile picture and name  */}
        <View style={styles.headerContainer}>
          <Image
            source={require('../images/Profile.png')}
            style={{width: 60, height: 60}}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.welcome}>Welcome back</Text>
            <Text style={styles.profileName}>Ur Avg Coder</Text>
          </View>
        </View>
        {/* This is for search bar Container  */}
        <View style={styles.serachBarContainer}>
          <Text style={styles.explore}>Explore The World</Text>
          <View style={styles.searchBarView}>
            <View style={styles.searchBar}>
              <View style={styles.searchInnerView}>
                <Icon name="search-outline" style={{color: '#ccc'}} />
                <TextInput
                  placeholder="Search Places"
                  placeholderTextColor="#ccc"
                  style={{width: '100%', marginHorizontal: 10, fontSize: 14}}
                />
              </View>
            </View>
            <View style={styles.filterContainer}>
              <Icon name="funnel-outline" style={{color: '#ccc'}} />
            </View>
          </View>
        </View>
        {/* This is for Categories */}
        <View>
          <Text style={styles.categories}>Categories</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoriesData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        {/* This is for Top Destination */}
        <View style={styles.destinationContainer}>
          <Text style={styles.categories}>Top Destinations </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={destinationsData}
            renderItem={destinationsRenderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 70,
    marginBottom: 20,
    backgroundColor: '#f6f7fc',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  welcome: {
    fontSize: 14,
    color: '#c0c0c0',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
  },
  explore: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  serachBarContainer: {
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  searchBarView: {
    flexDirection: 'row',
    maxWidth: '100%',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 50,
    width: '77%',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
  },
  searchInnerView: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  filterContainer: {
    height: 50,
    width: '17%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destinationContainer: {
    marginVertical: 20,
  },
  categories: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 30,
  },
  categoriesView: {
    height: 180,
    width: 150,
    borderRadius: 25,
  },
  categoriesText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    bottom: 10,
  },
  categoriesBackground: {
    height: 180,
    width: 150,
    marginRight: 15,
    justifyContent: 'flex-end',
    marginVertical: 15,
    left: 20,
  },
  destinationBackground: {
    height: 230,
    width: 250,
    marginRight: 15,
    marginVertical: 15,
    left: 20,
  },
  heartView: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    right: 10,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  destinationName: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});
