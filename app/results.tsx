import { useLocalSearchParams } from "expo-router"
import {FlatList, Image, StyleSheet, Text, View,  } from "react-native"
import { PhotoStyle, photoStyles } from "../data/styles"
import { useState } from "react"


export default function resultsScreen() {
  const { photos } = useLocalSearchParams()
  const photoList = photos ? JSON.parse(String(photos)) as {uri:string, facing: string}[]:[]
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)

  function renderStyles({item}:{item:PhotoStyle}) {
    return(
      <View style={styles.stylesContainer}>
        <View style={styles.photoScroll}>
          {photoList.map((photo, index) => (
            <View key={index} style={styles.photoCard}>
              <Image
                source={{uri: photo.uri}}
                style={[
                  styles.eachPhoto,
                  photo.facing === "front" && {transform:[{scaleX:-1}]}
                ]}
              />
            </View>
          ))}
        </View>
        <Image
          source={item.frameAsset}
          style={styles.frameOverlay}
        />
        <Text>{item.name}</Text>
      </View>
    )
  }

  return (
    <View style={styles.photosContainer}>
      <FlatList
        data={photoStyles}
        renderItem={renderStyles}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    photosContainer:{
      flex:1,
      backgroundColor: "black"
    },
    stylesContainer:{
      position: "relative",
      alignItems: "center",
      marginBottom: 50, 
      gap: 100
    },
    frameOverlay:{
      position: "absolute",
      width: 250,
      height: 700,
      top: 40
    },
    photoScroll:{
      alignItems: "center",
      justifyContent: "center",
    },
    photoCard:{
        top: 70,
    },
    eachPhoto:{
        width: 200,
        height: 200,
        resizeMode: "cover",
        transform: [{scaleX: -1}]
    },
})