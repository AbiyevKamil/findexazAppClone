import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, LogBox } from 'react-native'
import { Avatar } from 'react-native-paper'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors'
import DropDownPicker from 'react-native-dropdown-picker'
import Box from '../components/Box'

const Boxes = ({ navigation }) => {
  const boxes = [
    {
      id: '123456',
      status: 'Təhvil verilib',
      title: 'Flo',
      name: 'Digər - ayaqqabı',
      cost: '29.99',
      payment_status: 'Ödənilib',
      amount: '4.50',
      overall_amount: '7.65',
      weight: '0.78',
    },
    {
      id: '123457',
      status: 'Təhvil verilib',
      title: 'Trendyol',
      name: 'Paltar - köynək',
      cost: '60.99',
      payment_status: 'Ödənilib',
      amount: '2.50',
      overall_amount: '5.60',
      weight: '0.30',
    },
    {
      id: '123458',
      status: 'Təhvil verilib',
      title: 'Flo',
      name: 'Digər - ayaqqabı',
      cost: '120.99',
      payment_status: 'Ödənilib',
      amount: '4.50',
      overall_amount: '7.65',
      weight: '0.78',
    },
    {
      id: '123459',
      status: 'Təhvil verilib',
      title: 'Flo',
      name: 'Digər - ayaqqabı',
      cost: '120.10',
      payment_status: 'Ödənilib',
      amount: '4.50',
      overall_amount: '7.65',
      weight: '0.78',
    },
  ]
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Hamısı", value: "Hamısı" },
    { label: "Səbət", value: "Səbət" },
    { label: "Sifariş gözlənilir", value: "Sifariş gözlənilir" },
    { label: "Sifariş verilib", value: "Sifariş verilib" },
    { label: "Ləğv edilib", value: "Ləğv edilib" },
  ]);
  const [value, setValue] = useState(items[0].label);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

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
      <ScrollView style={{ padding: 10 }}>
        <FlatList
          data={boxes}
          renderItem={item => <Box id={item.item.id} title={item.item.title} name={item.item.name} status={item.item.status} cost={item.item.cost} payment_status={item.item.payment_status} amount={item.item.amount} overall_amount={item.item.overall_amount} weight={item.item.weight} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Add Box')} style={styles.addMore}>
        <IconMaterialCom name={'plus'} size={35} color={colors.bg} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_2,
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

export default Boxes
