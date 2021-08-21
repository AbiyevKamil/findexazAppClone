import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors'

const HomeTitle = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Balans artır')} style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balansı artır</Text>
        <IconMaterialCom name={'credit-card-outline'} size={30} color={colors.bg} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Bildirişlər')} >
        <IconMaterialCom
          name="bell-outline"
          color={colors.bg}
          size={30}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: "100%",
  },
  balanceContainer: {
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  balanceText: {
    marginRight: 10,
    color: colors.bg,
    fontSize: 16,
    fontWeight: '500'
  },
})

export default HomeTitle
