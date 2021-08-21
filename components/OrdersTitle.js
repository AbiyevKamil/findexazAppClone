import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'

const OrdersTitle = ({ navigation, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} >{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Balans artır')} >
        <Text style={styles.btnText}>Hamısını ödə</Text>
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
  btnText: {
    fontSize: 14,
    color: colors.primary,
    textTransform: 'uppercase'
  },
})

export default OrdersTitle
