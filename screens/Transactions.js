import React, { useEffect } from 'react'
import { View, Text, ScrollView, FlatList, LogBox, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors'
import Transaction from '../components/Transaction'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'

const Transactions = ({ navigation }) => {
  const transactions = [
    {
      date: "16 gün əvvəl",
      description: 'Kuryer sifarişləri',
      status: 'ödənilmiş',
      amount: '₺1.00',
      payment_category: 'Nağd',
      id: '1'
    },
    {
      date: "16 gün əvvəl",
      description: 'Kuryer sifarişləri',
      status: 'ödənilmiş',
      amount: '₺1.00',
      payment_category: 'Nağd',
      id: '4'
    },
    {
      date: "16 gün əvvəl",
      description: 'Kuryer sifarişləri',
      status: 'ödənilmiş',
      amount: '₺1.00',
      payment_category: 'Nağd',
      id: '5'
    },
    {
      date: "16 gün əvvəl",
      description: 'Kuryer sifarişləri',
      status: 'ödənilmiş',
      amount: '₺1.00',
      payment_category: 'Nağd',
      id: '6'
    },
    {
      date: "16 gün əvvəl",
      description: 'Kuryer sifarişləri',
      status: 'ödənilmiş',
      amount: '₺1.00',
      payment_category: 'Nağd',
      id: '7'
    },
    {
      date: "16 gün əvvəl",
      description: 'Kuryer sifarişləri',
      status: 'ödənilmiş',
      amount: '₺1.00',
      payment_category: 'Nağd',
      id: '8'
    },
    {
      date: "2 ay əvvəl",
      description: 'Bağlama',
      status: 'ödənilmiş',
      amount: '$3.00',
      payment_category: 'Online',
      id: '2'
    },
    {
      date: "1 gün əvvəl",
      description: 'Balans əməliyyatı',
      status: 'ödənilmiş',
      amount: '$5.00',
      payment_category: 'Online',
      id: '3'
    },
  ]

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <View>
      <ScrollView style={{ padding: 10, backgroundColor: colors.bg_2 }}>
        <FlatList
          data={transactions}
          renderItem={info => (
            <Transaction
              date={info.item.date}
              description={info.item.description}
              status={info.item.status}
              amount={info.item.amount}
              payment_category={info.item.payment_category} />
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Balans artır')} style={styles.addMore}>
        <IconMaterialCom name={'plus'} size={35} color={colors.bg} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  addMore: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    borderRadius: 60,
    backgroundColor: colors.btn,
    padding: 10
  },
})

export default Transactions
