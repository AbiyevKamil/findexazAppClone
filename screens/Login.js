import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
// import SvgFindex from '../shared/svgFindex'

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image} source={require('../assets/images/findex-logo.png')}
      />
      {/* <SvgFindex /> */}
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Şifrə" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Daxil ol</Text>
      </TouchableOpacity>
      <View style={styles.suggestRegisterContainer}>
        <Text style={styles.suggestRegisterText}>
          Hesabınız yoxdur?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.linkText}>
            Qeydiyyatdan keçin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    height: 220,
    width: 180
  },
  input: {
    backgroundColor: '#F3F3F3',
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 22,
    fontSize: 18,
    fontWeight: '300'
  },
  button: {
    backgroundColor: "#429bd5",
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  suggestRegisterContainer: {
    maxWidth: 360,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  suggestRegisterText: {
    fontSize: 16,
    fontWeight: "300",
  },
  linkText: {
    fontSize: 16,
    color: "#429bd5",
    fontWeight: "300",
    marginLeft: 5,
  },
})

export default Login
