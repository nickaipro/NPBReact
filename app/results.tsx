import { useLocalSearchParams } from "expo-router"
import { StyleSheet, Text, View,  } from "react-native"


export default function resultsScreen(){
    const {photos} = useLocalSearchParams()
    const photoList = photos ? JSON.parse(String(photos)) : []

    return(
        <View style = {styles.photosContainer}>
            

        </View>
        

    )


}

const styles = StyleSheet.create({
    photosContainer:{
        flexDirection: "column",

    }

})