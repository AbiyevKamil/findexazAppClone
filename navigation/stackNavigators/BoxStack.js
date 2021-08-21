import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Boxes from '../../screens/Boxes';
import colors from '../../assets/colors/colors';
import BoxTitle from '../../components/BoxTitle';
import AddBox from '../../screens/AddBox';

const Stack = createStackNavigator();

const BoxStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: props => <BoxTitle isHome={true} navigationDrawer={navigation} title={'Bağlamalar'} {...props} />,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
        name="Boxes"
        component={Boxes} />
      <Stack.Screen
        options={{
          headerTitle: props => <BoxTitle isHome={false} navigationDrawer={navigation} title={'Bağlamalar'} caption={'Yeni bağlama əlavə et'} {...props} />,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
        name="Add Box"
        component={AddBox} />
    </Stack.Navigator>
  );
}

export default BoxStack;