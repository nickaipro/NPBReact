import {Image, Pressable, StyleSheet, Text,View} from "react-native"
import {router} from "expo-router"
import {useFonts} from "expo-font"
import {CameraView, CameraType, useCameraPermissions} from "expo-camera"
import {useRef, useEffect, useState} from "react"





export default function startScreen () {

    
    const[fontLoades] = useFonts({
        youthFont: require("../assets/fonts/youth.ttf")

    })

    const cameraRef = useRef<CameraView>(null)

    async function takePicture(){
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync()
            console.log(photo.uri)
        }
    }
    const[permission, requestPermission] = useCameraPermissions()

    const[facing, setFacing] = useState<CameraType>("back")

    function reverseCamera(){
        
        setFacing((current)=>{
            const newFacing =  current == "back" ? "front": "back"
            console.log("changing to", newFacing)
            return newFacing
        }
         
        

            
        )
    }


    

    useEffect(()=>{
        if (permission && !permission.granted)
            requestPermission()
    }, [permission])
    function handleCameraPermission() {
        requestPermission()
    }

    if (!fontLoades) {
        return null

    }

    if (!permission){
        return (
        <Text>Permission is charging</Text>
        )
    }

   
    
    
    

    if (permission) {

    if (!permission.granted) {
        return (
        <View style = {styles.container}>
            <View style = {styles.goBackContainer}>
            <Pressable style = {styles.goBackButton}
               onPress= {()=>router.back()}
                >
                    <Text style = {styles.goBackButtonText}>
                    ←
                    </Text>
                </Pressable>
                </View>
            
            
        </View>
        )
    }else {
        return (
        <View style = {styles.container}>
            <View style = {styles.goBackContainer}>
            <Pressable style = {styles.goBackButton}
               onPress= {()=>router.back()}
                >
                    <Text style = {styles.goBackButtonText}>
                    ←
                    </Text>
                </Pressable>
                </View>
            <View style = {styles.cameraContainer}>
                <CameraView style = {styles.camera}
                            facing = {facing}
                            ref = {cameraRef}></CameraView>
            </View>

            <View style = {styles.bottomContainer}>
                <Pressable style = {styles.reverseButton}
                           onPress={reverseCamera}
                
                >
                    
                    <Image style = {styles.reverseImage}
                    source ={require("../assets/images/reverse.webp")}></Image>

                </Pressable>

                <Pressable style = {styles.takePhotoButton}
                           onPress= {takePicture}></Pressable>
            </View>

            
                
            
            
        </View>
    )
    }
    }

    

}
const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "black"
        
    },
    photosButton: {
        backgroundColor: "#a411c5"

    },
    
    
    goBackButton: {
        
        
        backgroundColor: "grey",
        borderRadius: 30,
        width: 60,
        height: 60,
        borderWidth: 2,
        marginTop: 30,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        right: 15


    },
    goBackButtonText: {
        color: "white",
        fontSize: 30,
        
    },
    goBackContainer: {
        position: "absolute",
        top: -10,
        alignItems: "center",
        zIndex: 1,
        


    },
    cameraContainer: {
        flex: 1,
        bottom: 0,
        top: 30,
        justifyContent: "center",
        
        

    },
    camera: {
        width: 500,
        height: 500,
        
        marginTop: -100
    },
    bottomContainer: {
        position: "absolute",
        bottom: 50,
        left: 0,
        right:300,
        alignItems: "center",
        zIndex: 2,
        elevation: 2,
        flexDirection: "row",
        gap: 85,
        
        
        


    },
    reverseButton: {
        backgroundColor: "grey",
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        left: 15

    },
    reverseImage: {
        width: 40,
        height: 40,
    },
    
    
    takePhotoButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "white",
        borderWidth: 5,
        borderColor: "grey",
        


    }
        
    
    

})
   


