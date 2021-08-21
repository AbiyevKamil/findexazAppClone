import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors'

const MyLocation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Ofisimizə xoş gəlmişsiniz.</Text>
        <Text style={styles.text}>Əgər yerli anbarımızda olan bütün bağlamalarınız çatdırılma qiyməti ödənilibsə, QR kodu skan edərək növbə götürə bilərsiniz.</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>QR kodu skan et</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_2,
  },
  content: {
    backgroundColor: colors.bg,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btn: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.btn,
    alignItems: 'center',
  },
  btnText: {
    color: colors.bg,
    fontSize: 16,
    textTransform: 'uppercase'
  },
})

export default MyLocation
