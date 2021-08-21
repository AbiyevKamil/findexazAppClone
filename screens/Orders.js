import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import DropDownPicker from 'react-native-dropdown-picker'

const Orders = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Hamısı", value: "Hamısı" },
    { label: "Səbət", value: "Səbət" },
    { label: "Sifariş gözlənilir", value: "Sifariş gözlənilir" },
    { label: "Sifariş verilib", value: "Sifariş verilib" },
    { label: "Ləğv edilib", value: "Ləğv edilib" },
  ]);
  const [orderList, setOrderList] = useState([]);
  const [value, setValue] = useState(items[0].label);
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <IconMaterialCom style={{ padding: 10 }} name={'filter'} size={26} color={colors.black} />
        <DropDownPicker
          value={value}
          open={open}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          containerStyle={{
            flex: 1,
          }}
          textStyle={{
            fontSize: 16
          }}
          style={styles.dropdown}
          tickIconContainerStyle={{
            display: 'none'
          }}
          dropDownContainerStyle={{
            elevation: 1000,
            zIndex: 1000,
            top: 0,
            width: '90%',
            left: 0,
          }}
        />
      </View>
      <View>
        {!orderList.length ? (
          <View style={styles.containerError}>
            <IconMaterialCom name={'view-list'} size={120} color={colors.primary} />
            <Text style={styles.errorText}>Sifariş yoxdur...</Text>
          </View>
        ) : (<></>)}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Add Order')} style={styles.addMore}>
        <IconMaterialCom name={'plus'} size={35} color={colors.bg} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  containerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bg_2,
    elevation: 1000,
    zIndex: 1000,
    fontSize: 16
  },
  dropdown: {
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    elevation: 1000,
    zIndex: 1000
  },
  containerError: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16
  },
  addMore: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    borderRadius: 60,
    backgroundColor: colors.btn,
    padding: 10
  },
});

export default Orders
