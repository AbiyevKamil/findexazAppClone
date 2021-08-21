import React from 'react'
import { View, Text, TouchableOpacity, Clipboard, StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'

const LocationInfo = ({ header, body }) => {
  const setContent = async (info) => {
    await Clipboard.setString(info)
  }
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
      <TouchableOpacity onPress={() => setContent(body)}>
        <IconMaterialCom style={{ padding: 5 }} name={'content-copy'} size={30} color={colors.btn} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.soft_black,
    borderBottomWidth: 1,
    marginBottom: 5
  },
  info: {
    flex: 0.95,
  },
  header: {
    fontSize: 16,
    fontWeight: '700'
  },
});

export default LocationInfo
