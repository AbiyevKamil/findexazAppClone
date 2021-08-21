import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../assets/colors/colors'

const News = ({ navigation }) => {
  const news = {
    title: 'Hotiç',
    body: 'Soyuq günlər artıq qapıdadır! Hazırlıq görməyin əsl vaxtıdır. Yeni kolleksiyalar hər kəsin zövqünə uyğun olan HOTİÇ markasının 60% endirimləri davam edir. Siz sifariş edin, biz gətirək.',
    date: '2020-11-20',
    image: 'https://api.findex.az/storage/news/1397a79c3aa006b1ef091ac6e1484b7c.png',
    url: 'https://www.hotic.com.tr/c/tum-urunler2-1366'
  }
  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('News Detail', { title: news.title, body: news.body, date: news.date, image: news.image, url: news.url })} style={{ backgroundColor: 'transparent' }}>
        <ImageBackground style={styles.imageContainer} imageStyle={{ borderRadius: 15 }} resizeMode={'contain'} source={{ uri: news.image }}>
          <Text style={{ position: 'absolute', top: 15, right: 10, color: colors.bg }}>{news.date}</Text>
          <View style={{ position: 'absolute', bottom: 0, left: 0, paddingVertical: 12, paddingHorizontal: 25, zIndex: 3, elevation: 1000, paddingBottom: 15 }}>
            <Text style={{ color: colors.bg, fontSize: 22 }}>{news.title}</Text>
            <Text style={{ color: colors.bg, fontSize: 18 }} lineBreakMode={'clip'} numberOfLines={6}>{news.body}</Text>
          </View>
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '35%',
              zIndex: 2,
              elevation: 500,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
        </ImageBackground>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  imageContainer: {
    width: '100%',
    minHeight: 378,
    borderRadius: 15,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default News
