import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import colors from '../assets/colors/colors'
import Tariff from '../components/Tariff'

const Tariffs = () => {
  const items = [
    {
      id: 1,
      header: 'Adi məhsullar',
      data: [
        {
          range: '0.01 kq-dan 0.2 kq-a qədər',
          amount: '$1.00'
        },
        {
          range: '0.21 kq-dan 0.5 kq-a qədər',
          amount: '$2.50'
        },
        {
          range: '0.51 kq-dan 0.75 kq-a qədər',
          amount: '$3.50'
        },
        {
          range: '0.76 kq-dan 1 kq-a qədər',
          amount: '$4.50'
        },
        {
          range: '1.01 kq-dan 10 kq-a qədər hər kq-a',
          amount: '$4.50'
        },
        {
          range: '10 kq-dan yuxarı hər kq-a',
          amount: '$4.00'
        },
      ],
    },
    {
      id: 2,
      header: 'MAYE MƏHSULLAR',
      data: [
        {
          range: '0.01 kq-dan 0.25 kq-a qədər',
          amount: '$2.00'
        },
        {
          range: '0.26 kq-dan 0.5 kq-a qədər',
          amount: '$4.00'
        },
        {
          range: '0.51 kq-dan 0.75 kq-a qədər',
          amount: '$6.00'
        },
        {
          range: '0.76 kq-dan 1 kq-a qədər',
          amount: '$7.00'
        },
        {
          range: '1.01 kq-dan yuxarı hər kq-a',
          amount: '$4.00'
        },
      ],
    },
    {
      id: 3,
      header: 'KURYER TARİFLƏRİ',
      data: [
        {
          range: 'Binəqədi (Novxanı, Sulutəpə, Xocasən)',
          amount: '₼4.00'
        },
        {
          range: 'Nəsimi',
          amount: '₼2.00'
        },
        {
          range: 'Sabunçu',
          amount: '₼3.00'
        },
        {
          range: 'Suraxanı (Hövsan)',
          amount: '₼4.00'
        },
        {
          range: 'Xəzər',
          amount: '₼4.00'
        },
        {
          range: 'Lənkəran',
          amount: '₼5.00'
        },
        {
          range: 'Pirallahı',
          amount: '₼5.00'
        },
        {
          range: 'Nizami',
          amount: '1.00'
        },
        {
          range: 'Sumqayıt',
          amount: '₼5.00'
        },
        {
          range: 'Sabunçu (Şuşa qəsəbəsi)',
          amount: '₼4.00'
        },
      ],
    },
  ]
  return (
    <View>
      <ScrollView style={{ padding: 10,backgroundColor: colors.bg_2 }}>
        {items.map(item => <Tariff key={item.id} header={item.header} data={item.data} />)}
      </ScrollView>
    </View>
  )
}

export default Tariffs
