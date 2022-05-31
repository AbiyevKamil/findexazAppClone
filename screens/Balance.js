import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors';

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.header}>TRY balans artır</Text>
        <TextInput style={styles.input} keyboardType={'number-pad'} placeholder={'Məbləğ'} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Balansı artır</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Text style={styles.header}>USD balans artır</Text>
        <TextInput style={styles.input} keyboardType={'number-pad'} placeholder={'Məbləğ'} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Balansı artır</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_2,
    padding: 10,
  },
  item: {
    backgroundColor: colors.bg,
    padding: 15,
    marginBottom: 15
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15
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
  input: {
    backgroundColor: colors.bg_2,
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: '300'
  },
});

export default Balance
