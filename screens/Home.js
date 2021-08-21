import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native'
import colors from '../assets/colors/colors'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';

const Home = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.userContainer}>
          <IconFont5
            name={'user-circle'}
            size={35}
            color={colors.bg}
          />
          <Text style={styles.username}>Kamil Abiyev</Text>
          <Text style={styles.userId}>Müştəri kodu: #111111</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.values}>₺0.00</Text>
          <Text style={styles.values}>$0.00</Text>
        </View>
        <View style={styles.usedCash}>
          <Text style={styles.cash}>Cari ay: 0.00$</Text>
        </View>
      </View>
      <ScrollView style={styles.containerBottom}>
        <View style={styles.routesTop}>
          <TouchableOpacity onPress={() => navigation.navigate('Sifarişlər')} style={styles.routeContainerTopLeft}>
            <IconMaterial
              name="shopping-cart"
              color={'#429bd5'}
              size={40}
            />
            <Text style={styles.routeText}>Sifarişlər</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Bağlamalar')} style={styles.routeContainer}>
            <IconMaterial
              name="all-inbox"
              color={'#429bd5'}
              size={40}
            />
            <Text style={styles.routeText}>Bağlamalar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Kuryerlər')} style={styles.routeContainerTopRight}>
            <IconMaterial
              name="motorcycle"
              color={'#429bd5'}
              size={40}
            />
            <Text style={styles.routeText}>Kuryerlər</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.routesMiddle}>
          <TouchableOpacity onPress={() => navigation.navigate('Mən burdayam')} style={styles.routeContainer}>
            <IconMaterial
              name="location-city"
              color={'#429bd5'}
              size={40}
              style={{ fontWeight: '100' }}
            />
            <Text style={styles.routeText}>Mən burdayam</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.routesBottom}>
          <TouchableOpacity onPress={() => navigation.navigate('Xaricdəki ünvanlarım')} style={styles.routeContainer}>
            <Icon
              name="location-outline"
              color={'#429bd5'}
              size={40}
            />
            <Text style={styles.routeText}>Xaricdəki Ünvanlar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tranzaksiyalar')} style={styles.routeContainer}>
            <IconFont5
              name="coins"
              color={'#429bd5'}
              size={40}
            />
            <Text style={styles.routeText}>Tranzaksiyalar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.routesBottom}>
          <TouchableOpacity onPress={() => navigation.navigate('Müraciətlər')} style={styles.routeContainer}>
            <IconMaterialCom
              name="email-multiple"
              color={'#429bd5'}
              size={40}
            />
            <Text style={styles.routeText}>Müraciətlər</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tənzimləmələr')} style={styles.routeContainer}>
            <Icon
              name="ios-settings-outline"
              color={'#429bd5'}
              size={40}
            />
            <Text style={styles.routeText}>Tənzimləmələr</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => setModal(true)} style={styles.addMore}>
        <IconMaterialCom
          name={'text-box-plus'}
          size={25}
          color={colors.bg}
          style={{ padding: 15 }}
        />
      </TouchableOpacity>
      <Modal animationType={'fade'} onRequestClose={() => setModal(false)} transparent={true} visible={modal} statusBarTranslucent>
        <Pressable onPress={() => setModal(false)} style={styles.modalContainer}>
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Sifarişlər')}
              style={styles.modalItem}
            >
              <IconMaterial
                name="shopping-cart"
                color={'#429bd5'}
                size={35}
              />
              <Text style={styles.modalText}>Sifarişlər</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Bağlamalar')} style={styles.modalItem}>
              <IconMaterial
                name="all-inbox"
                color={'#429bd5'}
                size={35}
              />
              <Text style={styles.modalText}>Bağlamalar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Kuryerlər')} style={styles.modalItem}>
              <IconMaterial
                name="motorcycle"
                color={'#429bd5'}
                size={35}
              />
              <Text style={styles.modalText}>Kuryerlər</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Müraciətlər')} style={styles.modalItem}>
              <IconMaterialCom
                name="email-multiple"
                color={'#429bd5'}
                size={35}
              />
              <Text style={styles.modalText}>Müraciətlər</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.btn,
    flex: 1,
  },
  containerTop: {
    backgroundColor: colors.btn,
    paddingVertical: 16,
    paddingHorizontal: 15,
    paddingBottom: 60,
    flexDirection: 'row',
    position: 'relative'
  },
  userContainer: {
    flex: 1,
  },
  username: {
    color: colors.bg,
    fontSize: 23,
    fontWeight: '600',
    marginTop: 6,

  },
  userId: {
    color: colors.bg,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 0,

  },
  valueContainer: {
    minWidth: 80
  },
  values: {
    fontSize: 30,
    color: colors.bg
  },
  usedCash: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    backgroundColor: colors.bg,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  cash: {
    fontSize: 15,
    fontWeight: '500',
  },
  containerBottom: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: colors.bg_2,
    paddingHorizontal: 5,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  routesTop: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  routesMiddle: {
    marginBottom: 10,
  },
  routesBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  routeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: colors.bg,
    flex: 1
  },
  routeContainerTopLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: colors.bg,
    flex: 1,
    borderTopLeftRadius: 12,
  },
  routeContainerTopRight: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: colors.bg,
    flex: 1,
    borderTopRightRadius: 12,
  },
  routeText: {
    fontSize: 16,
    marginTop: 5
  },
  addMore: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: colors.btn,
    bottom: 15,
    right: 10,
    opacity: 0.9
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: colors.bg,
    width: '95%',
    maxWidth: 450,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalItem: {
    flex: 1,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 14,
    marginTop: 5
  },
})

export default Home
