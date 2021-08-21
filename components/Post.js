import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors'


const Post = ({ id, status, payment_status, amount, location, count }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Avatar.Icon size={40} source={require('../assets/images/turkey-flag.jpg')} />
        <View style={styles.containerTopLeft}>
          <View>
            <Text style={{ fontSize: 16 }}>{id}</Text>
            <Text>Kuryer</Text>
          </View>
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{ color: 'green' }}>{status}</Text>
              <IconMaterialCom style={{ marginLeft: 5 }} name={'radiobox-marked'} color={'green'} size={15} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerMiddle}>
        <View>
          <Text style={{ color: colors.primary, fontSize: 22, textTransform: 'uppercase', fontWeight: '700' }}>{amount}₼</Text>
          <Text style={{ fontSize: 14, textTransform: 'uppercase' }}>{count} ədəd bağlama daxildir</Text>
          <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.soft_green, borderWidth: 1, borderColor: 'green', paddingVertical: 3, width: 100, justifyContent: 'center' }}>
            <IconMaterialCom name={'check-all'} size={20} color={'green'} />
            <Text>{payment_status}</Text>
          </View>
        </View>
        <IconMaterialCom style={{ alignSelf: 'center', transform: [{ rotateY: '180deg' }] }} name={'truck-fast'} size={80} color={colors.bg_2} />
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomCell}>
          <Text>{location}</Text>
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

export default Post
