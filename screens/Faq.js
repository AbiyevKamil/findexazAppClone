import React, { useEffect } from 'react'
import { View, Text, ScrollView, FlatList, LogBox } from 'react-native'
import colors from '../assets/colors/colors'
import Acordion from '../components/Acordion'

const Faq = () => {
  const data = [
    {
      question: 'Sifariş neçə günə çatdırılır?',
      answer: 'Bağlama Türkiyə anbarımıza daxil olduqdan sonra 3-5 iş günü ərzində Azərbaycana çatdırılır. Türkiyədən yüklərin göndərişi həftədə 2 dəfə həyata keçirilir.',
      id: 1,
    },
    {
      question: 'Geri qaytarma xidmətinin ("İade") qaydaları necədir?',
      answer: 'Məhsul mağaza tərəfindən yanlış, yararsız və zədələnmiş şəkildə göndərilərsə, geri qaytarma xidmətimizdən istifadə edə bilərsiniz. Bağlama geri qaytarılma üçün Bakı ofisinə daxil olduğu gündən etibarən növbəti 2 iş gün ərzində məhsul ofisi tərk etmədən yoxlanılarsa və yuxarıda qeyd edilən hallardan biri aşkarlanarsa, faktura sənədi ilə qəbul olunur. Elektronika məhsulları geri qaytarılmır. Sifarişlər çəkiyə uyğun tariflərlə geri qaytarılır.',
      id: '2',
    },
    {
      question: 'Bakı anbarında bağlamaların saxlanma müddəti nə qədərdir?',
      answer: 'Bağlamalar Bakı ofisində 30 gün müddətində pulsuz saxlanıla bilər. 30 gün sonra isə hər əlavə gün üçün hər bağlamanın çatdırılma haqqına 1 AZN əlavə edilir.',
      id: 3,
    },
    {
      question: 'Sifarişim sistemdə qeyd edilməyibsə, nə etməliyəm?',
      answer: 'Bağlamalar mağaza tərəfindən Türkiyə anbarına təslim edilənədək saytımızda bəyan edilməlidir. Bağlama düzgün bəyan edildiyi təqdirdə 24-48 iş saatı ərzində “Xarici anbarda” statusunu alır. Qeyd olunan zaman ərzində bağlamanız sistemdə əks olunmazsa, “Müraciətlər” bölməsindən bağlamanın “Teslimat detayı”-nı bizə göndərə bilərsiniz. Təkcə Türkiyə əməkdaşlarımızın imzası ilə təsdiqlənmiş bağlamalara görə məsuliyyət daşıyırıq. Bəzi hallarda mağaza bağlamanın üzərində müştəri kodu, ad, soyadınızı qeyd etmir, bu halda müraciətiniz araşdırılır və sizə məlumat verilir. Qeyd edək ki, araşdırmanın müddəti 15 gündür.',
      id: 4,
    },
    {
      question: 'Bəyənnamə nədir? Necə doldurulur?',
      answer: 'Gecikmələrin yaşanmaması və bağlamaların sistemdə düzgün qeyd edilməsi üçün müştərinin “Şəxsi kabinet”-ə daxil olaraq sifarişi haqqında məlumatı əvvəlcədən bəyan etməsi mütləqdir. Sifariş haqqında məlumat bağlama xarici anbara ÇATDIRILMAMIŞDAN əvvəl qeyd olunmalıdır. Bəyənnamədə bağlamanın izləmə nömrəsi (“Sifarişin nömrəsi” bölməsinə bu nömrələrdən birini yazmaq olar: “Sipariş numarası”, “Teslimat numarası”, “Gönderi numarası”, “Kargo takip numarası”), mağaza adı, məhsulun tipi qeyd edilir və satıcı tərəfindən təqdim edilmiş invoys sənədi (fatura) və ya məhsulun şəkli əlavə edilməlidir.',
      id: 5,
    },
    {
      question: '300 dollar limiti nədir?',
      answer: 'Azərbaycan Respublikasının qanunvericiliyinə əsasən 21 sentyabr 2020-ci il tarixindən etibarən fiziki şəxslər hər təqvim ayı ərzində ölkəyə ümumi dəyəri 300 ABŞ dolları ekvivalentindən artıq olmayan yük idxal edə bilər. Bağlamanın ümumi dəyəri 300 ABŞ dollarından çox olduqda qanunvericiliyə uyğun olaraq gömrük rüsumu ödənilir. 300 ABŞ dolları limitinə əşyanın öz dəyəri və saxlanılan bağlamanın daşınma haqqı daxildir. Bağlama təyin olunmuş limitin aşıldığı halda yalnız limiti keçmiş hissə üçün gömrük rüsumu hesablanacaqdır. Bağlamanın BCT-də saxlanılması zamanı ilk gün 15 AZN, sonrakı hər gün üçün 2 AZN (1 avro) saxlanma haqqı hesablanır. Xahiş edirik, sifariş verərkən diqqətli olun!',
      id: 6,
    },
  ]

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <ScrollView style={{ padding: 10, backgroundColor: colors.bg_2, flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Acordion question={item.question} answer={item.answer} />}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  )
}

export default Faq
