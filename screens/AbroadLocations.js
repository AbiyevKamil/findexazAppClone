import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView, LogBox } from 'react-native'
import colors from '../assets/colors/colors'
import LocationInfo from '../components/LocationInfo'

const AbroadLocations = () => {
  const userInfo = [
    {
      header: 'Ad soyad',
      body: 'Kamil Abiyev Findex'
    },
    {
      header: 'Adres 1',
      body: 'Popular belief, Lorem Ipsum is not simply random text'
    },
    {
      header: 'İl şehir',
      body: 'Lorem'
    },
    {
      header: 'İlçe',
      body: 'Lorem'
    },
    {
      header: 'Adres başlığı',
      body: 'Findex'
    },
    {
      header: 'Semt/Mahalle',
      body: 'Lorem'
    },
    {
      header: 'ZIP/Post kodu',
      body: 'Lorem'
    },
    {
      header: 'Ülke',
      body: 'Türkiye'
    },
    {
      header: 'TC kimlik',
      body: '11111'
    },
    {
      header: 'Mobil telefon',
      body: '1111111'
    },
  ]

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 10, position: 'relative', borderBottomColor: colors.primary, borderBottomWidth: 1 }}>
        <Text style={{ padding: 5, alignSelf: 'center', fontSize: 22, color: colors.btn }}>
          Türkiyə
        </Text>
        <View style={{ position: 'absolute', left: '50%', width: 110, backgroundColor: colors.btn, height: 3, bottom: -1, marginLeft: -55 }}></View>
      </View>
      <View>
        <FlatList
          data={userInfo}
          renderItem={info => (
            <LocationInfo header={info.item.header} body={info.item.body} />
          )}
          keyExtractor={item => item.header}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});

export default AbroadLocations
