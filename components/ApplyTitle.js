import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors'

const ApplyTitle = ({ title, isHome, navigationDrawer }) => {
  return (
    <View style={styles.container}>
      {isHome ?
        (<>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Pressable onPress={() => navigationDrawer.openDrawer()}>
              <IconMaterialCom style={{ padding: 5 }} name={'menu'} size={25} color={colors.black} />
            </Pressable>
            <Text style={{ fontSize: 22, marginLeft: 15 }}>{title}</Text>
          </View>
          <TouchableOpacity onPress={() => navigationDrawer.navigate('Add Apply')} >
            <IconMaterialCom style={{ padding: 5 }} name={'pen-plus'} size={25} color={colors.black} />
          </TouchableOpacity>
        </>) : (<>
          <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 22 }}>{title}</Text>
            <IconMaterialCom name={'pen-plus'} size={25} color={colors.black} />
          </View>
        </>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btnText: {
    fontSize: 14,
    color: colors.primary,
    textTransform: 'uppercase'
  },
})

export default ApplyTitle
