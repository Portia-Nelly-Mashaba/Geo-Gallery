import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/Map';
import { init } from './utils/database';
import * as SplashScreen from 'expo-splash-screen';
import PlaceDetails from './screens/PlaceDetails';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init().then(() => {
      setDbInitialized(true);
      SplashScreen.hideAsync(); // Hide the splash screen once the DB is initialized
    }).catch(err => {
      console.log('Database initialization error:', err);
    });
  }, []);

  if (!dbInitialized) {
    return null; // Render nothing while waiting for DB initialization
  }

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
            options={({ navigation }) => ({ 
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton 
                  icon='add' 
                  size={26} 
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
              title: 'Add a new Place'
            }}
          />
          <Stack.Screen 
            name="Map" 
            component={Map} 
            options={{
              title: 'Map'
            }} 
          />
          <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{ title: 'Loading Place...'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
