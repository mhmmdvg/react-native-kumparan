import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import utilities from '../tailwind.json';
import {TailwindProvider} from 'tailwind-rn/dist';
import HomeScreen from './screens/home/home';
import DetailPosts from './screens/home/component/detailPosts';
import {Provider} from 'react-redux';
import {store} from './redux';
import detailUser from './screens/home/component/detailUser';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Details"
              component={DetailPosts}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UserDetails"
              component={detailUser}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
};

export default App;
