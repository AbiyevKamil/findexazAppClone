import React from 'react'
import { View, Text, StyleSheet, ScrollView, Pressable, CheckBox, TextInput } from 'react-native'
import colors from '../assets/colors/colors'
import IconFont from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'

const Calculator = () => {
  const [result, setResult] = useState('0.00')
  const [checkbox, setCheckbox] = useState(false)
  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: colors.bg, padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20 }}>
          <IconFont name={'balance-scale'} size={90} color={colors.btn} />
          <View>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Yekun qiymət</Text>
            <Text style={{ alignSelf: 'flex-end', fontSize: 22, fontWeight: '700' }}>{result.length > 0 ? result + "$" : '0.00$'}</Text>
          </View>
        </View>
        <Pressable onPress={() => setCheckbox(!checkbox)} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }} >
          <CheckBox value={checkbox} onValueChange={setCheckbox} />
          <Text>Məhsulun tərkibində maye var</Text>
        </Pressable>
        <View>
          <TextInput style={styles.input} keyboardType={'number-pad'} placeholder="Çəki(kq)" />
          <TextInput style={styles.input} keyboardType={'number-pad'} placeholder="En(sm)" />
          <TextInput style={styles.input} keyboardType={'number-pad'} placeholder="Hündürlük(sm)" />
          <TextInput style={[styles.input, { marginBottom: 5 }]} keyboardType={'number-pad'} placeholder="Dərinlik(sm)" />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.bg_2
  },
  input: {
    backgroundColor: '#F3F3F3',
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: '300'
  },
})

export default Calculator
