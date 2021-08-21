import React from 'react'
import { useState } from 'react'
import { View, Text, Picker, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import colors from '../assets/colors/colors'

const AddApply = () => {
  const [selectedValue, setSelectedValue] = useState()
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: colors.bg, padding: 5 }}>
        <View style={{ backgroundColor: colors.input, paddingHorizontal: 5 }}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: "100%" }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Müraciətin növu" value="Müraciətin növu" />
            <Picker.Item label="Sifariş haqqında məlumat" value="Sifariş haqqında məlumat" />
            <Picker.Item label="Hesabımda mənə məxsus olmayan bağlamalar mövcuddur" value="Hesabımda mənə məxsus olmayan bağlamalar mövcuddur" />
            <Picker.Item label="Tapılmayan bağlama" value="Tapılmayan bağlama" />
            <Picker.Item label="Sifarişin alınması" value="Sifarişin alınması" />
            <Picker.Item label="Balansla bağlı" value="Balansla bağlı" />
            <Picker.Item label="Kuryer ilə bağlı" value="Kuryer ilə bağlı" />
            <Picker.Item label="Təklif və iradlar" value="Təklif və iradlar" />
            <Picker.Item label="Yanlış gələn sifariş" value="Yanlış gələn sifariş" />
            <Picker.Item label="Geri qaytarma" value="Geri qaytarma" />
            <Picker.Item label="Sistemdə qeyd olunmayan bağlama" value="Sistemdə qeyd olunmayan bağlama" />
            <Picker.Item label="Digər" value="Digər" />
            <Picker.Item label="Gömrükdə bəyan ilə bağlı" value="Gömrükdə bəyan ilə bağlı" />
          </Picker>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.button, { flex: 1 }]}>
            <Text style={styles.buttonText}>Sənəd seçin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginLeft: 5, flex: 1 }]}>
            <Text style={styles.buttonText}>Təsvir seçin</Text>
          </TouchableOpacity>
        </View>
        <TextInput multiline={true} placeholder={'Mətn'} style={{ minHeight: 80, paddingHorizontal: 10, backgroundColor: colors.input, fontSize: 16 }} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Göndər</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.bg_2,
  },
  button: {
    backgroundColor: "#429bd5",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
  },
})

export default AddApply
