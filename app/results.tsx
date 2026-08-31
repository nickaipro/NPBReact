import { useLocalSearchParams } from "expo-router"
import {ScrollView, Image, StyleSheet, Text, View,  } from "react-native"


export default function resultsScreen() {
  const { photos } = useLocalSearchParams()
  const photoList = photos ? JSON.parse(String(photos)) as string[]: []

  return (
    <View style={styles.photosContainer}>
      <ScrollView style ={styles.photoScroll}>
      {photoList.map((uri, index) => (
        <View key={index} style={styles.photoCard}>
          <Image
            source={{ uri }}
            style={styles.eachPhoto}
          />
        </View>
      ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    photosContainer:{
        flexDirection: "column",
        alignItems:  "center",
        

    },
    photoScroll:{
        flexDirection: "column",
        alignItems: "center"
    },
    photoCard:{
        width: "100%",
        height: "200%",


    },
    eachPhoto:{
        width: 100,
        height: 100,
        resizeMode: "cover"
    }

})