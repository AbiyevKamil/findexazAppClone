import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Pressable } from 'react-native'
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { LogBox } from 'react-native';


const SignUp = ({ navigation }) => {
  const [checked, setChecked] = useState('first');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [openForNum, setOpenForNum] = useState(false);
  const [openForID, setOpenForID] = useState(false);
  const [valueForNum, setValueForNum] = useState(null);
  const [valueForID, setValueForID] = useState(null);
  const [itemsForNum, setItemsForNum] = useState([
    { label: "+99450", value: "+99450" },
    { label: "+99451", value: "+99451" },
    { label: "+99455", value: "+99455" },
    { label: "+99499", value: "+99499" },
    { label: "+99470", value: "+99470" },
    { label: "+99477", value: "+99477" },
  ]);
  const [itemsForID, setItemsForID] = useState([
    { label: "AA", value: "AA" },
    { label: "AB", value: 'AB' },
    { label: "AZE", value: 'AZE' },
  ]);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Qeydiyyat</Text>
      <ScrollView style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Ad" />
        <TextInput style={styles.input} placeholder="Soyad" />
        <TextInput style={styles.input} keyboardType={'email-address'} placeholder="E-mail" />
        <Pressable onPress={() => {
          setShow(true)
          console.log(show)
        }} >
          <TextInput editable={false} selectTextOnFocus={false} style={styles.input} placeholder="Təvəllüd" />
        </Pressable>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <View style={styles.radioContainer}>
          <Pressable style={styles.radioButton} onPress={() => setChecked('first')} >
            <RadioButton
              value={'Kişi'}
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.radioButtonText}>Kişi</Text>
          </Pressable>
          <Pressable style={styles.radioButton} onPress={() => setChecked('second')} >
            <RadioButton
              value={'Qadın'}
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={styles.radioButtonText}>Qadın</Text>
          </Pressable>
        </View>
        {/* Take a look here later  */}
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            items={itemsForID}
            open={openForID}
            value={valueForID}
            setOpen={setOpenForID}
            setValue={setValueForID}
            defaultIndex={0}
            placeholder={itemsForID[0].label}
            containerStyle={{ height: 50, width: 70 }}
            dropDownContainerStyle={{ borderWidth: 0, borderRadius: 0, top: -5, left: -15, zIndex: 99999, elevation: 10000 }}
            style={styles.dropdown}
          />
          <TextInput style={styles.inputDropdown} keyboardType={'number-pad'} placeholder="Ş.V nömrəsi" />
        </View>
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
        <TextInput style={styles.input} placeholder="FİN Kod" />
        <TextInput style={styles.input} placeholder="Ünvan" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Şifrə" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Təkrar şifrə" />
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
          <Text style={styles.buttonText}>Təsdiqlə</Text>
        </TouchableOpacity>
        <View style={styles.suggestRegisterContainer}>
          <Text style={styles.suggestRegisterText}>
            Artıq hesabınız var?
          </Text>
          <Pressable
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.linkText}>
              Daxil olun
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  header: {
    fontSize: 30,
    fontWeight: "800",
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#F3F3F3',
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 22,
    fontSize: 18,
    fontWeight: '300',
  },
  button: {
    backgroundColor: "#429bd5",
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  suggestRegisterContainer: {
    maxWidth: 360,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  suggestRegisterText: {
    fontSize: 16,
    fontWeight: "300",
  },
  linkText: {
    fontSize: 16,
    color: "#429bd5",
    fontWeight: "300",
    marginLeft: 5,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 13,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 13,
    marginRight: 10,
  },
  radioButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  dropdownContainer: {
    backgroundColor: '#F3F3F3',
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginBottom: 22,
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

export default SignUp
