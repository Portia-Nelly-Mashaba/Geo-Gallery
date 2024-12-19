import { View, Text } from 'react-native';
import React from 'react';
import PlacesList from '../components/Places/PlacesList';

function AllPlaces() {
  return (
    <View style={{ flex: 1 }}>
      <PlacesList />
    </View>
  );
}

export default AllPlaces;
