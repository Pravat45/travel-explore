import {Icon} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const similarDestinations = [
  {
    id: '1',
    title: 'Hawaii',
    image: require('../images/EXPEDITION.jpg'),
  },
  {
    id: '2',
    title: 'Japan',
    image: require('../images/JAPAN.jpg'),
  },
  {
    id: '3',
    title: 'India',
    image: require('../images/WATERFALLS.jpg'),
  },
  {
    id: '4',
    title: 'Maldives',
    image: require('../images/TOURS.jpg'),
  },
];

export default function Details({route, navigation}) {
  const renderItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={styles.categoriesBackground}
        imageStyle={{borderRadius: 20}}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={route.params.places.image}
        style={styles.headerBackground}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.backBtn}>
            <Icon
              name="caret-back-outline"
              style={{color: '#ccc', fontSize: 25}}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.placeName}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="star" style={{fontSize: 20, color: '#FCCD12'}} />
            <Text style={styles.ratingText}>{route.params.places.rating}</Text>
          </View>
          <Text style={styles.destinationName}>
            {route.params.places.title}
          </Text>
        </View>

        <View style={styles.heartView}>
          <Icon name="heart" style={{color: '#0359c9'}} />
        </View>
      </ImageBackground>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.bodyText}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.details}>{route.params.places.description}</Text>
          <TouchableOpacity>
            <Text style={styles.showMore}>Show more</Text>
          </TouchableOpacity>

          <Text style={[styles.description, {marginVertical: 30}]}>
            Similar Destinations
          </Text>

          <FlatGrid
            scrollEnabled={false}
            itemDimension={140}
            data={similarDestinations}
            renderItem={renderItem}
            style={{}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    width: '100%',
    height: 400,
  },
  backBtn: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    left: 30,
    top: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeName: {
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
  ratingText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  destinationName: {
    fontSize: 27,
    color: '#fff',
    fontWeight: 'bold',
  },
  heartView: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    right: 30,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    width: '100%',
    paddingHorizontal: 30,
    marginVertical: 20,
    marginBottom: 100,
  },
  description: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  details: {
    fontSize: 16,
    marginVertical: 20,
    lineHeight: 25,
    color: '#000000',
  },
  showMore: {
    fontSize: 18,
    color: '#0359c9',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  categoriesBackground: {
    height: 170,
    width: 170,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    width: 120,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
