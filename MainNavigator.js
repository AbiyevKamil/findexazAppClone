import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { selectedIsLoggedIn } from './features/user/userSlice';
import LoginStack from './navigation/stackNavigators/LoginStack';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';
import MainDrawer from './navigation/drawerNavigators/MainDrawer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

const MainNavigator = () => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  return (
    <NavigationContainer theme={MyTheme}>
      {isLoggedIn ? <MainDrawer /> : <LoginStack />}
    </NavigationContainer>
  )
}

export default MainNavigator;
