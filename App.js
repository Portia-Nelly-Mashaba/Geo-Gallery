import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/Map'; // Import the Map screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.primary800 }
        }}>
          <Stack.Screen 
            name="AllPlaces" 
            component={AllPlaces}  
            options={({navigation}) => ({ 
              title: 'Your Favorite Places',
              headerRight: ({tintColor}) => (
                <IconButton 
                  icon='add' 
                  size={24} 
                  color={tintColor} 
                  onPress={() => navigation.navigate('AddPlace')} 
                />
              ),
            })}
          />
          <Stack.Screen 
            name="AddPlace" 
            component={AddPlace} 
            options={{
              title:'Add a new Place'
            }}
          />
          <Stack.Screen 
            name="Map" 
            component={Map} 
            options={{
              title: 'Map'
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
