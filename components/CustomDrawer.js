import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  useTheme,
  Avatar,
  Drawer,
  Text,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';
import { logout } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

const CustomDrawer = (props) => {
  const paperTheme = useTheme();
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userInfoTop}>
              <Avatar.Image size={55} source={{ uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} />
              <View style={styles.userSection}>
                <Text style={styles.username}>Kamil Abiyev</Text>
                <Text style={styles.userId}>#111111</Text>
              </View>
            </View>
            <View style={styles.userInfoBottom}>
              <Text style={styles.values}>₺0.00</Text>
              <Text style={styles.values}>$0.00</Text>
            </View>
          </View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <IconMaterialCom
              name="location-exit"
              color={'#429bd5'}
              size={size}
            />
          )}
          labelStyle={{
            color: '#7c7c7c',
            fontSize: 16,
          }}
          label="Çıxış"
          onPress={() => dispatch(logout())}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: '#f3f3f3',
    padding: 10,

  },
  userInfoTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  userSection: {
    marginLeft: 10
  },
  username: {
    fontSize: 23,
    fontWeight: '700',
    color: '#848484',
  },
  userId: {
    fontSize: 14,
    marginTop: 5,
  },
  userInfoBottom: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  values: {
    fontSize: 22,
    color: '#848484',
    fontWeight: '700',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    backgroundColor: '#f3f3f3',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default CustomDrawer
