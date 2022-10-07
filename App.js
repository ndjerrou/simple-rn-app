import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef, useState } from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import SettingsScreen from './src/Screens/SettingsScreen';

export default function App() {
  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );

  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       setNotification(notification);
  //     });

  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log(response);
  //     });

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Settings'>
          {() => <SettingsScreen name='Marie' />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
