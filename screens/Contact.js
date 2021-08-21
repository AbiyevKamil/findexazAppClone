import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors';
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
// import IconFeather from 'react-native-vector-icons/Feather';

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <IconMaterialCom style={{ padding: 25 }} name={'email-edit-outline'} size={25} color={colors.btn} />
        <View style={styles.content}>
          <Text style={styles.header}>Email</Text>
          <Text style={styles.body}>kamilabiyev1903@gmail.com</Text>
        </View>
      </View>
      <View style={styles.item}>
        <IconMaterialCom style={{ padding: 25 }} name={'phone-in-talk'} size={25} color={colors.btn} />
        <View style={styles.content}>
          <Text style={styles.header}>Telefon</Text>
          <Text style={styles.body}>+99411 111-11-11</Text>
        </View>
      </View>
      <View style={styles.item}>
        <IconMaterialCom style={{ padding: 25 }} name={'email-edit-outline'} size={25} color={colors.btn} />
        <View style={styles.content}>
          <Text style={styles.header}>Ünvan</Text>
          <Text style={styles.body}>Popular belief, Lorem Ipsum is not simply random text</Text>
        </View>
      </View>
      <View style={styles.item}>
        <IconMaterialCom style={{ padding: 25 }} name={'weather-sunset-up'} size={25} color={colors.btn} />
        <View style={styles.content}>
          <Text style={styles.header}>İş  günləri</Text>
          <Text style={styles.body}>10:00-20:00</Text>
        </View>
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
  item: {
    backgroundColor: colors.bg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
  },
  body: {
    fontSize: 16,
    width: "97%",
    paddingTop: 5,
  },
  content: {
    flex: 1,
  },
});

export default Contact
