import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';

function AllPlaces(route) {
  const [loadedPlaces, setLoadedPlaces] = useState([]); 
  const isFocused = useIsFocused();


  useEffect(() => {
    if(isFocused && route.params) {
      setLoadedPlaces();
    }
  }, [isFocused])
  return (
    

    <View style={{ flex: 1 }}>
      <PlacesList />
    </View>
  );
}

export default AllPlaces;
