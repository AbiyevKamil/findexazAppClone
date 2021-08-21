import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Pressable } from "react-native";
import IconMaterialCom from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from 'react';
import colors from '../assets/colors/colors';

const Acordion = ({ answer, question }) => {
  const [expanded, setExpanded] = useState(false);
  useState(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [])

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setExpanded(!expanded)
  }
  return (
    <View>
      <Pressable style={styles.container} onPress={() => toggleExpand()}>
        <View style={styles.leftLine}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, marginLeft: 15, padding: 5 }}>
          <Text style={{ flex: 0.95, fontSize: 16 }}>{question}</Text>
          <IconMaterialCom name={expanded ? 'minus' : 'plus'} size={35} color={colors.btn} />
        </View>
      </Pressable>
      <View style={styles.answerContainer} />
      {
        expanded &&
        <View style={styles.answer}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.bg,
    position: 'relative',
    flex: 1,
    borderRadius: 5,
    marginBottom: 10
  },
  leftLine: {
    position: 'absolute',
    backgroundColor: colors.btn,
    left: 0,
    top: 0,
    width: 8,
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  answer: {
    padding: 10,
    backgroundColor: colors.bg,
    marginBottom: 10
  },
  answerText: {
    padding: 5,
  },
});

export default Acordion
