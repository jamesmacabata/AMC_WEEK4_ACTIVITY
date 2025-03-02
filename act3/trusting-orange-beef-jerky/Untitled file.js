import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'stretching',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'drink coffee',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'eat breakfast',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'exercise',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'drink water',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'take shower',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'eat lunch',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'watch anime',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'playing mobile games',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'sleep',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'eat a snack',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'doing some homework',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'reading books',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'drawing',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'playing basketball',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'watching tv',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'cooking for lunch',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'eat together with family',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'drink milk',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'watch movie',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'midnight snack',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'brush teeth',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'floss',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'sleep',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'repeat',
  },
];

const COLORS = ['bd7acbea-c1b1-46c2-aed5-3ad53abb28ba','3ac68afc-c605-48d3-a4f8-fbd91aa97f63','58694a0f-3da1-471f-bd96-145571e29d72']

const Item = ({ item,onPress, backgrondColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
  
);

const App = () => (
  const [selectedId, setSelectedId] = usestate();

  const renderItem = {[ item, index]} => {
    
  }
 
