import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'

const TariffsTitle = ({ navigation, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} >{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Kalkulyator')} >
        <IconMaterialCom name={'calculator'} size={25} color={colors.black} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
  },
})

export default TariffsTitle
