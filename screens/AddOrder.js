import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors';

const AddOrder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder={'Məhsulun linki'} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputSliceLeft} keyboardType={'number-pad'} placeholder={'Say'} />
          <TextInput style={styles.inputSliceRight} placeholder={'Ölçü'} />
        </View>
        <TextInput style={styles.input} placeholder={'Rəng'} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputSliceLeft} keyboardType={'number-pad'} placeholder={'Qiymət'} />
          <TextInput style={styles.inputSliceRight} keyboardType={'number-pad'} placeholder={'Daxili karqo qiyməti'} />
        </View>
        <TextInput style={styles.textarea} multiline={true} placeholder={'Qeyd'} />
        <Text style={styles.descText}>Ümumi məbləğ (+5%): 0.00₺</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Göndər</Text>
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
  form: {
    backgroundColor: colors.bg,
    padding: 10,
  },
  input: {
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.input,
    marginVertical: 10,
  },
  textarea: {
    minHeight: 80,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.input,
    marginVertical: 10,
  },
  inputSliceLeft: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.input,
  },
  inputSliceRight: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.input,
    marginLeft: 10
  },
  descText: {
    marginVertical: 10
  },
  btn: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.btn,
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: colors.bg,
    fontSize: 16,
    textTransform: 'uppercase'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddOrder
