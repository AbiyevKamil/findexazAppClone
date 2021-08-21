import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../assets/colors/colors';
import BoxTitle from '../../components/BoxTitle';
import News from '../../screens/News';
import NewsTitle from '../../components/NewsTitle';
import NewsDetail from '../../screens/NewsDetail';

const Stack = createStackNavigator();

const NewsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: props => <NewsTitle isHome={true} navigationDrawer={navigation} title={'Bağlamalar'} {...props} />,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
        name="News"
        component={News} />
      <Stack.Screen
        options={{
          headerTitle: props => <NewsTitle isHome={false} navigationDrawer={navigation} {...props} />,
          headerTransparent: true,
          headerTintColor: colors.black,
        }}
        name="News Detail"
        component={NewsDetail} />
    </Stack.Navigator>
  );
}

export default NewsStack;