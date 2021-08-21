import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'

const Transaction = ({ date, description, status, amount, payment_category }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftLine}></View>
      <View style={styles.infoCointainer}>
        <View>
          <Text style={{ fontSize: 16 }}>{date}</Text>
          <Text>{description}</Text>
          <Text style={{ color: 'green', textTransform: 'capitalize' }}>{status}</Text>
        </View>
        <View style={{ alignItems: 'flex-end', paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>{amount}</Text>
          <Text>{payment_category}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: colors.bg,
  },
  leftLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 5,
    backgroundColor: colors.btn
  },
  infoCointainer: {
    flex: 1,
    padding: 5,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export default Transaction
