import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'

const Notification = ({ title, info, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftLine}></View>
      <View style={{ marginLeft: 15, padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '700', paddingVertical: 5 }}>{title}</Text>
        <Text style={{ paddingVertical: 5 }}>{info}</Text>
        <Text style={{ alignSelf: 'flex-end', color: colors.primary, paddingVertical: 5 }}>{date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: colors.bg,
    marginTop: 10
  },
  leftLine: {
    position: 'absolute',
    backgroundColor: colors.btn,
    left: 0,
    top: 0,
    width: 3,
    height: '100%'
  },
})

export default Notification
