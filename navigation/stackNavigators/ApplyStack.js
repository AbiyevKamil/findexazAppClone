import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Applies from '../../screens/Applies';
import colors from '../../assets/colors/colors';
import ApplyTitle from '../../components/ApplyTitle';
import AddApply from '../../screens/AddApply';

const Stack = createStackNavigator();

const ApplyStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: props => <ApplyTitle navigationDrawer={navigation} isHome={true} title={'Müraciətlər'} {...props} />,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
        name="Applies"
        component={Applies} />
      <Stack.Screen
        options={{
          headerTitle: props => <ApplyTitle navigationDrawer={navigation} isHome={false} title={'Müraciətlər'} {...props} />,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
        name="Add Apply"
        component={AddApply} />
    </Stack.Navigator>
  );
}

export default ApplyStack;