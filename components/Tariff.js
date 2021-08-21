import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'

const Tariff = ({ header, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      {data && <View >
        {data.map(item => {
          return (
            <View key={item.range} style={styles.item}>
              <Text style={styles.range}>{item.range}</Text>
              <Text style={styles.amount}><Text style={styles.amountFixed}>{item.amount.substring(0, 3)}</Text>{item.amount.substring(3)}</Text>
            </View>
          )
        })}
      </View>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.bg,
    marginBottom: 10,
    padding: 10
  },
  header: {
    alignSelf: 'center',
    fontSize: 18,
    color: colors.btn,
    paddingBottom: 5,
    width: "100%",
    textAlign: 'center',
  },
  item: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderTopWidth: 1,
    width: "100%",
    borderColor: colors.soft_black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  range: {
    fontSize: 16,
  },
  amountFixed: {
    fontSize: 16,
    color: colors.btn,
    fontWeight: '500'
  },
  amount: {
    fontSize: 14,
    color: colors.btn,
    fontWeight: '300'
  },
});

export default Tariff
