import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import CustomDrawer from '../../components/CustomDrawer';
import Boxes from '../../screens/Boxes';
import MyLocation from '../../screens/MyLocation';
import BoxStack from '../stackNavigators/BoxStack';
import OrderStack from '../stackNavigators/OrderStack';
import PostStack from '../stackNavigators/PostStack';
import ApplyStack from '../stackNavigators/ApplyStack';
import AbroadLocations from '../../screens/AbroadLocations';
import Transactions from '../../screens/Transactions';
import Balance from '../../screens/Balance';
import Settings from '../../screens/Settings';
import Tariffs from '../../screens/Tariffs';
import Calculator from '../../screens/Calculator';
import Shops from '../../screens/Shops';
import News from '../../screens/News';
import Faq from '../../screens/Faq';
import Statements from '../../screens/Statements';
import Notifications from '../../screens/Notifications';
import Contact from '../../screens/Contact';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import HomeTitle from '../../components/HomeTitle';
import colors from '../../assets/colors/colors';
import OrdersTitle from '../../components/OrdersTitle';
import TariffsTitle from '../../components/TariffsTitle';
import NewsStack from '../stackNavigators/NewsStack';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerActiveTintColor: '#7c7c7c', activeBackgroundColor: "#d5efff", drawerLabelStyle: { fontSize: 15 } }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={'Ana səhifə'}
        component={Home}
        options={({ navigation }) => ({
          drawerIcon: ({ size }) => (
            <Icon
              name="home-outline"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerTitle: props => <HomeTitle navigation={navigation} {...props} />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: colors.btn,
          },
          headerTintColor: colors.bg,
        })}
      />
      <Drawer.Screen
        name={'Mən burdayam'}
        component={MyLocation}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterial
              name="location-city"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Sifarişlər'}
        component={OrderStack}
        options={({ navigation }) => ({
          drawerIcon: ({ size }) => (
            <IconMaterial
              name="shopping-cart"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        })}
      />
      <Drawer.Screen
        name={'Bağlamalar'}
        component={BoxStack}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterial
              name="all-inbox"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Kuryerlər'}
        component={PostStack}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterial
              name="motorcycle"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Müraciətlər'}
        component={ApplyStack}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterialCom
              name="email-multiple"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Xaricdəki ünvanlarım'}
        component={AbroadLocations}
        options={{
          drawerIcon: ({ size }) => (
            <Icon
              name="location-outline"
              color={'#429bd5'}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name={'Tranzaksiyalar'}
        component={Transactions}
        options={{
          drawerIcon: ({ size }) => (
            <IconFont5
              name="coins"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Balans artır'}
        component={Balance}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterialCom
              name="wallet-plus-outline"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Tənzimləmələr'}
        component={Settings}
        options={{
          drawerIcon: ({ size }) => (
            <Icon
              name="ios-settings-outline"
              color={'#429bd5'}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name={'Tariflər'}
        component={Tariffs}
        options={({ navigation }) => ({
          drawerIcon: ({ size }) => (
            <Icon
              name="newspaper-outline"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerTitle: props => <TariffsTitle title={'Tariflər'} navigation={navigation} {...props} />
          ,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        })}
      />
      <Drawer.Screen
        name={'Kalkulyator'}
        component={Calculator}
        options={{
          drawerIcon: ({ size }) => (
            <IconFont
              name="balance-scale"
              color={'#429bd5'}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name={'Mağazalar'}
        component={Shops}
        options={{
          drawerIcon: ({ size }) => (
            <IconFont5
              name="store"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Xəbərlər'}
        component={NewsStack}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterialCom
              name="newspaper"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Tez-tez verilən suallar'}
        component={Faq}
        options={{
          drawerIcon: ({ size }) => (
            <IconAnt
              name="questioncircleo"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Daşınma şərtləri'}
        component={Statements}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterialCom
              name="truck-outline"
              color={'#429bd5'}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name={'Bildirişlər'}
        component={Notifications}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterialCom
              name="bell-outline"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
      <Drawer.Screen
        name={'Bizimlə əlaqə'}
        component={Contact}
        options={{
          drawerIcon: ({ size }) => (
            <IconMaterialCom
              name="phone-outline"
              color={'#429bd5'}
              size={size}
            />
          ),
          headerStyle: {
            backgroundColor: colors.bg_2,
          },
          headerTintColor: colors.black,
        }}
      />
    </Drawer.Navigator>
  )
}

export default MainDrawer
