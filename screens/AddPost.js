import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors';
import DropDownPicker from 'react-native-dropdown-picker';

const AddPost = () => {
  const [itemsForNum, setItemsForNum] = useState([
    { label: "+99450", value: "+99450" },
    { label: "+99451", value: "+99451" },
    { label: "+99455", value: "+99455" },
    { label: "+99499", value: "+99499" },
    { label: "+99470", value: "+99470" },
    { label: "+99477", value: "+99477" },
  ]);
  const [openForNum, setOpenForNum] = useState(false);
  const [valueForNum, setValueForNum] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder={'Bağlamaları seçin'} />
        <TextInput style={styles.input} placeholder={'Rayon seçin'} />
        <TextInput style={styles.input} placeholder={'Ünvan'} />
        <TextInput style={styles.input} placeholder={'Təhvil alacaq şəxs'} />
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            items={itemsForNum}
            open={openForNum}
            value={valueForNum}
            setOpen={setOpenForNum}
            setValue={setValueForNum}
            defaultIndex={0}
            placeholder={itemsForNum[0].label}
            containerStyle={{ height: 50, width: 100, borderWidth: 0, borderRadius: 0, }}
            dropDownContainerStyle={{ borderWidth: 0, borderRadius: 0, top: -5, left: -15, zIndex: 20, elevation: 1000 }}
            style={styles.dropdownNum}
          />
          <TextInput style={styles.inputDropdown} keyboardType={'number-pad'} placeholder="Telefon" />
        </View>
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
    marginBottom: 10,
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
  dropdownContainer: {
    backgroundColor: '#F3F3F3',
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 3,
    fontSize: 18,
    fontWeight: '300',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    zIndex: 15,
    elevation: 1000,
    width: 70,
    backgroundColor: 'transparent',
    borderWidth: 0,

  },
  dropdownNum: {
    zIndex: 10,
    elevation: 900,
    width: 100,
    backgroundColor: 'transparent',
    borderWidth: 0,

  },
  inputDropdown: {
    flex: 1,
    fontSize: 18,
    fontWeight: '300'
  },
});

export default AddPost
