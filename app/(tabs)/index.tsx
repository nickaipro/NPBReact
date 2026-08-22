import {Pressable, Image, StyleSheet, Text, View} from "react-native";
import {useFonts} from "expo-font";
import {router} from "expo-router"



export default function Index(){

  const[constLoaded] = useFonts({
    youthFont: require("../../assets/fonts/youth.ttf")
  })

  const[fontLoaded] = useFonts({
    handFont: require("../../assets/fonts/Rockybilly.ttf")
  })   
  if (!constLoaded){
    return null

  }
  if (!fontLoaded){
    return null
  }

  return (
  <View style = {styles.container}>
    <Text style = {styles.title}>NICKAI</Text>
    <Text style = {styles.subtitle}>PhotoBooth</Text>
    <Image source = {require("../../assets/images/cameraPhoto.png")}
            style = {styles.principalImage}
    />
    <Pressable 
      style = {styles.startButton}
      onPress={()=> router.push("/start")}>
      <Text style = {styles.startButtonText}>Create your own photobooth</Text>
    </Pressable>
  </View>
  )
}


const styles = StyleSheet.create({
  
  container :{
    flex: 1,
    
    justifyContent :"flex-start",
    alignItems : "center",
    backgroundColor: "white",
  },
  title:{
    fontSize: 80,
    color: "#740ebd",
    marginTop: 120,
    fontFamily: "youthFont"
  },
  subtitle:{
    fontSize:20,
    color:"#a411c5",
    fontFamily: "handFont"
  },
  principalImage: {
    width: 300,
    height: 200,
    resizeMode: "center",
    
    
  },
  startButton: {
    marginTop: 60,
    backgroundColor: "#a411c5",
    width: 300,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    

  },
  startButtonText: {
    fontFamily: "youthFont",
    fontSize: 28,
    color: "white",

  }
  

})
