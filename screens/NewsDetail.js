import React from 'react'
import { View, Text, Image, Linking, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../assets/colors/colors';


const NewsDetail = ({ route, navigation }) => {
  const { title, image, body, date, url } = route.params;
  const openUrl = async () => {
    try {
      Linking.openURL(url)
    } catch (err) {
      console.log(err)
      alert("Can't open url.")
    }
  }
  return (
    <View>
      <LinearGradient
        colors={['#fff', 'rgba(255,255,255, 0.5)', 'rgba(255,255,255, 0.2)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '18%',
        }}
      />
      <Image style={{ zIndex: -5, width: '100%', height: 240, marginTop: '15%' }} source={{ uri: image }} />
      <Text style={{ paddingHorizontal: 10, marginTop: 15, color: colors.black, fontSize: 22 }}>{title}</Text>
      <Text style={{ paddingHorizontal: 10, color: colors.primary, fontSize: 18 }}>{body}</Text>
      <Pressable style={{ marginVertical: 15, marginHorizontal: 10 }} onPress={() => openUrl()}>
        <Text>https://www.hotic.com.tr/c/tum-urunler2-1366</Text>
      </Pressable>
    </View>
  )
}

export default NewsDetail