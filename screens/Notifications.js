import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import colors from '../assets/colors/colors'
import Notification from '../components/Notification'

const Notifications = () => {
  const items = [
    {
      title: 'Bağlamanın təhvili',
      info: 'Neque porro quisquam est qui dolorem ipsum quiaNeque porro quisquam est qui dolorem ipsum quia',
      date: '2021-8-04 17:01:24',
      id: '1',
    },
    {
      title: 'Kuryer Sifarişi',
      info: 'Neque porro quisquam est qui dolorem ipsum quiaNeque porro quisquam est qui dolorem ipsum quia',
      date: '2021-8-04 17:01:24',
      id: '2',
    },
    {
      title: 'Bağlamanız yolda',
      info: 'Neque porro quisquam est qui dolorem ipsum quiaNeque porro quisquam est qui dolorem ipsum quia',
      date: '2021-8-04 17:01:24',
      id: '3',
    },
    {
      title: 'Bağlamanız yolda',
      info: 'Neque porro quisquam est qui dolorem ipsum quiaNeque porro quisquam est qui dolorem ipsum quia',
      date: '2021-8-04 17:01:24',
      id: '4',
    },
    {
      title: 'Bağlamanız yolda',
      info: 'Neque porro quisquam est qui dolorem ipsum quiaNeque porro quisquam est qui dolorem ipsum quia',
      date: '2021-8-04 17:01:24',
      id: '5',
    },
    {
      title: 'Bağlamanız yolda',
      info: 'Neque porro quisquam est qui dolorem ipsum quiaNeque porro quisquam est qui dolorem ipsum quia',
      date: '2021-8-04 17:01:24',
      id: '6',
    },
  ]
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg_2, padding: 10 }}>
      <FlatList
        data={items}
        renderItem={item => <Notification title={item.item.title} info={item.item.info} date={item.item.date} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  )
}

export default Notifications
