import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const Statements = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>MƏHSULLARIN DAŞINMASI XİDMƏTİNƏ AİD ŞƏRTLƏR:</Text>
      <View>
        <Text style={styles.child}>1) Məlumat üçün nəzərinizə çatdırırıq ki, “Find Express” MMC (həmçinin “Daşıyıcı” adlandırılacaq) istehsalçı olmayıb, heç bir satış xidməti təklif etmir.</Text>
        <Text style={styles.child}>2) “Daşıyıcı” heç bir halda göndərilən məhsulun keyfiyyətinə, forma və ölçüsünə, satış anbarında tükənmiş olmasına, satıcı firma tərəfindən “Daşıyıcı”nın ünvanına zamanında çatdırılmaması səbəbinə görə məsuliyyət daşımır.</Text>
      </View>
      <Text style={{ marginTop: 5 }}>
        Məhsul mağaza tərəfindən yanlış, yararsız və zədələnmiş şəkildə göndərilərsə, geri qaytarma xidmətimizdən istifadə edə bilərsiniz. Bağlama geri qaytarılma üçün Bakı ofisinə daxil olduğu gündən etibarən növbəti 2 iş gün ərzində məhsul ofisi tərk etmədən yoxlanılarsa və yuxarıda qeyd edilən hallardan biri aşkarlanarsa, faktura sənədi ilə qəbul olunur.<Text style={{ fontWeight: 'bold' }}>Sifarişlər çəkiyə uyğun tariflərlə geri qaytarılır.</Text>
      </Text>
      <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Qeyd: Yuxarıda qeyd olunan şərtlərə əməl olunmazsa, bağlamaların satıcıya geri göndərilməsi həyata keçirilmir.</Text>
      <Text style={styles.child}>1. Sifariş olunan məhsullar “Daşıyıcı” tərəfindən sığortalanmır, həmçinin “Daşıyıcı” bu məsələyə görə məsuliyyət daşımır.</Text>
      <Text style={styles.child}>2. Sifariş olunmuş məhsulun “Daşıyıcı”dan asılı olmayaraq gecikməsi hallarında (gömrük yoxlamaları, aviareyslərin gecikməsi və s.) “Daşıyıcı” məsuliyyətli deyil və bu vəziyyət sifarişdən imtina üçün səbəb sayıla bilməz.</Text>
      <Text style={styles.child}>3. Müştəri Türkiyədən həm "Sifariş et" xidmətimizlə, həm də "Xaricdəki ünvanlarım" bölməsindən istifadə etməklə öz kartı ilə birbaşa mağazadan sifariş edə bilər. Son olaraq, şəxsi hesabınıza daxil olaraq aldığınız məhsula uyğun bəyannamə əlavə etməyiniz mütləqdir.</Text>
      <Text style={styles.child}>4. Müştəri internet üzərindən alış zamanı çatdırılma ünvanı və şəxsi məlumatları tam və düzgün göstərməlidir.(xaricdəki ünvanlarım bölməsində olduğu kimi) Müştəri tərəfindən internet üzərindən alış zamanı çatdırılma ünvanı və ya şəxsi məlumatlar səhv və yaxud yalnış doldurularsa və nəticə etibarı ilə bu, yüklərin çatdırılmasında problem yaradarsa və yaxud çatdırmanı ümumiyyətlə mümkünsüz etdiyi halda Find Express MMC heç bir məsuliyyət daşımır. Problemli bağlamaların araşdırılma müddəti 15 iş günüdür.</Text>
      <Text style={styles.child}>5. Müştəri internet üzərindən alış zamanı çatdırılma ünvanı və şəxsi məlumatları tam və düzgün göstərməlidir.(xaricdəki ünvanlarım bölməsində olduğu kimi) Müştəri tərəfindən internet üzərindən alış zamanı çatdırılma ünvanı və ya şəxsi məlumatlar səhv və yaxud yalnış doldurularsa və nəticə etibarı ilə bu, yüklərin çatdırılmasında problem yaradarsa və yaxud çatdırmanı ümumiyyətlə mümkünsüz etdiyi halda Find Express MMC heç bir məsuliyyət daşımır. Problemli bağlamaların araşdırılma müddəti 15 iş günüdür.</Text>
      <Text style={styles.child}>6. Müştəri internet üzərindən alış zamanı çatdırılma ünvanı və şəxsi məlumatları tam və düzgün göstərməlidir.(xaricdəki ünvanlarım bölməsində olduğu kimi) Müştəri tərəfindən internet üzərindən alış zamanı çatdırılma ünvanı və ya şəxsi məlumatlar səhv və yaxud yalnış doldurularsa və nəticə etibarı ilə bu, yüklərin çatdırılmasında problem yaradarsa və yaxud çatdırmanı ümumiyyətlə mümkünsüz etdiyi halda Find Express MMC heç bir məsuliyyət daşımır. Problemli bağlamaların araşdırılma müddəti 15 iş günüdür.</Text>
      <Text style={styles.child}>7. Müştəri internet üzərindən alış zamanı çatdırılma ünvanı və şəxsi məlumatları tam və düzgün göstərməlidir.(xaricdəki ünvanlarım bölməsində olduğu kimi) Müştəri tərəfindən internet üzərindən alış zamanı çatdırılma ünvanı və ya şəxsi məlumatlar səhv və yaxud yalnış doldurularsa və nəticə etibarı ilə bu, yüklərin çatdırılmasında problem yaradarsa və yaxud çatdırmanı ümumiyyətlə mümkünsüz etdiyi halda Find Express MMC heç bir məsuliyyət daşımır. Problemli bağlamaların araşdırılma müddəti 15 iş günüdür.</Text>
      <Text style={styles.child}>8. Müştəri internet üzərindən alış zamanı çatdırılma ünvanı və şəxsi məlumatları tam və düzgün göstərməlidir.(xaricdəki ünvanlarım bölməsində olduğu kimi) Müştəri tərəfindən internet üzərindən alış zamanı çatdırılma ünvanı və ya şəxsi məlumatlar səhv və yaxud yalnış doldurularsa və nəticə etibarı ilə bu, yüklərin çatdırılmasında problem yaradarsa və yaxud çatdırmanı ümumiyyətlə mümkünsüz etdiyi halda Find Express MMC heç bir məsuliyyət daşımır. Problemli bağlamaların araşdırılma müddəti 15 iş günüdür.</Text>
      <Text style={styles.child}>9. Müştəri internet üzərindən alış zamanı çatdırılma ünvanı və şəxsi məlumatları tam və düzgün göstərməlidir.(xaricdəki ünvanlarım bölməsində olduğu kimi) Müştəri tərəfindən internet üzərindən alış zamanı çatdırılma ünvanı və ya şəxsi məlumatlar səhv və yaxud yalnış doldurularsa və nəticə etibarı ilə bu, yüklərin çatdırılmasında problem yaradarsa və yaxud çatdırmanı ümumiyyətlə mümkünsüz etdiyi halda Find Express MMC heç bir məsuliyyət daşımır. Problemli bağlamaların araşdırılma müddəti 15 iş günüdür.</Text>
      <Text style={styles.child}>10. Müştəri internet üzərindən alış zamanı çatdırılma ünvanı və şəxsi məlumatları tam və düzgün göstərməlidir.(xaricdəki ünvanlarım bölməsində olduğu kimi) Müştəri tərəfindən internet üzərindən alış zamanı çatdırılma ünvanı və ya şəxsi məlumatlar səhv və yaxud yalnış doldurularsa və nəticə etibarı ilə bu, yüklərin çatdırılmasında problem yaradarsa və yaxud çatdırmanı ümumiyyətlə mümkünsüz etdiyi halda Find Express MMC heç bir məsuliyyət daşımır. Problemli bağlamaların araşdırılma müddəti 15 iş günüdür.</Text>
      <Text style={styles.child}>11. Müştəri internet üzərindən alış zamanı çatdırılma ünvanı və şəxsi məlumatları tam və düzgün göstərməlidir.(xaricdəki ünvanlarım bölməsində olduğu kimi) Müştəri tərəfindən internet üzərindən alış zamanı çatdırılma ünvanı və ya şəxsi məlumatlar səhv və yaxud yalnış doldurularsa və nəticə etibarı ilə bu, yüklərin çatdırılmasında problem yaradarsa və yaxud çatdırmanı ümumiyyətlə mümkünsüz etdiyi halda Find Express MMC heç bir məsuliyyət daşımır. Problemli bağlamaların araşdırılma müddəti 15 iş günüdür.</Text>
      <Text style={styles.header}>ÖLKƏ ƏRAZİSİNƏ GƏTİRİLMƏSİ QADAĞAN OLUNAN MALLAR:</Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Pullar və poçt ödənişi nişanlarının buraxılmasına aid olan avadanlıqlar;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Bitki və toxumalar;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Canlı heyvanlar;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Tezalışan maddələr;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Dərmanlar;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Toksikoloji və zəhərli maddələr;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>İnfeksion və bioloji maddələr;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Kimyəvi reaktivlər, turşular və civə;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Pornoqrafiya məhsulları;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Tez xarab olan qida məhsulları;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Dövlət əhəmiyyətli sənədlər;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Öz qablaşdırılmasına və ya xüsusiyyətlərinə görə işçilər üçün təhlükə yaradan, digər məhsulların zədələnməsinə, çirklənməsinə səbəb olan göndərişlər;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Spirtli içkilər və tütün məhsulları;</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Xammal şəklində olan qiymətli metallar və qiymətli qaşlar.</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Müxtəlif növ batareyalar, powerbank-lar.</Text></Text>
      <Text style={styles.child}>{'\u2022'} <Text style={{ flex: 1, paddingLeft: 5 }}>Tibbi maska</Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  child: {
    marginLeft: 20,
    width: '95%',
    marginVertical: 2
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    padding: 10
  },
})

export default Statements
