import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, LogBox } from 'react-native'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors'
import DropDownPicker from 'react-native-dropdown-picker'
import Post from '../components/Post'

const Posts = ({ navigation }) => {
  const posts = [
    {
      id: '#123456',
      status: 'Bağlama təhvil verilib',
      payment_status: 'Ödənilib',
      amount: '4.50',
      count: 1,
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '#123457',
      status: 'Bağlama təhvil verilib',
      payment_status: 'Ödənilib',
      amount: '4.50',
      count: 3,
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '#123458',
      status: 'Bağlama təhvil verilib',
      payment_status: 'Ödənilib',
      amount: '4.50',
      count: 2,
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '#123459',
      status: 'Bağlama təhvil verilib',
      payment_status: 'Ödənilib',
      amount: '4.50',
      count: 1,
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
          data={posts}
          renderItem={item => <Post id={item.item.id} count={item.item.count} location={item.item.location} status={item.item.status} payment_status={item.item.payment_status} amount={item.item.amount} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Add Post')} style={styles.addMore}>
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

export default Posts
