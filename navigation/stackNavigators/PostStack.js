import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../assets/colors/colors';
import BoxTitle from '../../components/BoxTitle';
import Posts from '../../screens/Posts'
import AddPost from '../../screens/AddPost';

const Stack = createStackNavigator();

const PostStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: props => <BoxTitle isHome={true} navigationDrawer={navigation} title={'Kuryerlər'} {...props} />,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
        name="Posts"
        component={Posts} />
      <Stack.Screen
        options={{
          headerTitle: props => <BoxTitle isHome={false} navigationDrawer={navigation} title={'Kuryerlər'} caption={'Yeni kuryer sifariş edin'} {...props} />,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
        name="Add Post"
        component={AddPost} />
    </Stack.Navigator>
  );
}

export default PostStack