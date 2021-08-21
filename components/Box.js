import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors'


const Box = ({ id, status, title, name, cost, payment_status, amount, overall_amount, weight }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Avatar.Icon size={40} source={require('../assets/images/turkey-flag.jpg')} />
        <View style={styles.containerTopLeft}>
          <View>
            <Text style={{ fontSize: 16 }}>{id}</Text>
            <Text>Turkey</Text>
          </View>
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{ color: 'green' }}>{status}</Text>
              <IconMaterialCom style={{ marginLeft: 5 }} name={'radiobox-marked'} color={'green'} size={15} />
            </TouchableOpacity>
            <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
              <Text>Ətraflı</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerMiddle}>
        <View>
          <Text style={{ fontSize: 20, textTransform: 'uppercase', fontWeight: '700' }}>{title}</Text>
          <Text style={{ fontSize: 18, textTransform: 'uppercase' }}>{name}</Text>
          <Text style={{ fontSize: 18, textTransform: 'uppercase', borderBottomColor: colors.soft_black, borderBottomWidth: 1, paddingBottom: 3 }}>{cost}₺</Text>
          <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.soft_green, borderWidth: 1, borderColor: 'green', paddingVertical: 3, width: 100, justifyContent: 'center' }}>
            <IconMaterialCom name={'check-all'} size={20} color={'green'} />
            <Text>{payment_status}</Text>
          </View>
        </View>
        <IconMaterialCom style={{ alignSelf: 'center', transform: [{ rotateY: '180deg' }] }} name={'truck-fast'} size={80} color={colors.bg_2} />
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomCell}>
          <Text>Çəki:</Text>
          <Text>{weight}KQ</Text>
        </View>
        <View style={styles.containerBottomCell}>
          <Text>Qiymət:</Text>
          <Text>{amount}$</Text>
        </View>
        <View style={{ marginTop: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Text>{overall_amount}₼</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    padding: 5,
    marginBottom: 10,
    borderRadius: 4
  },
  containerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.bg_2
  },
  containerTopLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 5
  },
  containerMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
    paddingVertical: 15
  },
  containerBottom: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.bg_2,
    paddingVertical: 10
  },
  containerBottomCell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 1,
  },
})

export default Box
