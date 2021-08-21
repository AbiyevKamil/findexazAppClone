import React from 'react'
import { useState } from 'react';
import { CheckBox, View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import colors from '../assets/colors/colors';

const AddBox = () => {
  const [checkbox, setCheckbox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder={'Sifarişin nömrəsi'} />
        <TextInput style={[styles.input, { marginTop: 0 }]} placeholder={'Məhsul tipi'} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputSliceLeft} keyboardType={'number-pad'} placeholder={'Say'} />
          <TextInput style={styles.inputSliceRight} placeholder={'Qiymət'} />
        </View>
        <TextInput style={styles.input} placeholder={'Mağaza'} />
        <Pressable onPress={() => setCheckbox(!checkbox)} style={{ flexDirection: 'row', alignItems: 'center' }} >
          <CheckBox value={checkbox} onValueChange={setCheckbox} />
          <Text>Məhsulun tərkibində maye var</Text>
        </Pressable>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.btn, { flex: 1, borderRadius: 0, marginTop: 10 }]}>
            <Text style={styles.btnText}>Sənəd seçin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { marginLeft: 10, flex: 1, borderRadius: 0, marginTop: 10 }]}>
            <Text style={styles.btnText}>Təsvir seçin</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.descText}>Bağlamanın keçərliliyi üçün sənəd bölməsinə məhsulunuzun təsvirini yerləşdirməyiniz şərtdir.</Text>
        <TextInput style={styles.textarea} multiline={true} placeholder={'Qeyd'} />
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

export default AddBox
