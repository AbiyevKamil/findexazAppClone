import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from '../../screens/Orders';
import AddOrderTitle from '../../components/AddOrderTitle';
import AddOrder from '../../screens/AddOrder';
import colors from '../../assets/colors/colors';

const Stack = createStackNavigator();

const OrderStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={Orders}
        options={{
          headerTitle: props => <AddOrderTitle isHome={true} navigationDrawer={navigation} title={'Sifarişlər'} {...props} />,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Stack.Screen name="Add Order" component={AddOrder}
        options={({ navigation }) => ({
          headerTitle: props => {
            return <AddOrderTitle isHome={false} title={'Sifarişlər'} caption={'Yeni sifariş əlavə et'} {...props} />
          },
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        })}
      />
    </Stack.Navigator>
  );
}

export default OrderStack