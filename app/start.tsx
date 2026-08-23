import {Alert, Image, Pressable, StyleSheet, Text,View} from "react-native"
import {router} from "expo-router"
import {useFonts} from "expo-font"
import {CameraView, CameraType, useCameraPermissions} from "expo-camera"
import {useRef, useEffect, useState} from "react"
import {setAudioModeAsync, useAudioPlayer} from "expo-audio"
import {Animated} from "react-native"






export default function startScreen () {
    const [currentPhoto,setCurrentPhoto] = useState(1)
    const photos = []
    const photoSound = useAudioPlayer(
        require("../assets/sounds/photosound.mp3")
    )
    const buttonScale = useRef(new Animated.Value(1)).current

    function pressIn(){
        Animated.spring(buttonScale,{
            toValue: 0.50,
            useNativeDriver: true,
        }).start()
    }

    function pressOut(){
        Animated.spring(buttonScale,{
            toValue: 1,
            useNativeDriver: true,
        }).start()

        
    }
    useEffect(()=>{
        setAudioModeAsync({
            playsInSilentMode:true,
        })
    },[])

    async function playPhotoSound(){
        await photoSound.seekTo(0)
        photoSound.play()
    }
    const[fontLoades] = useFonts({
        youthFont: require("../assets/fonts/youth.ttf")

    })


    function startAlert (){
        Alert.alert(
            "Nickai PhotoBooth instructions",
            "📸 The photoBooth will take 3 photos automatically.\n\n" +
            "⏱️ It will be a countdown of 2 seconds before each shot.\n\n" +
            "✨ Change your pose between photos\n\n" +
            "🎨 Afterward, choose your PhotoBooth style",

            [{text: "OK"}]
            
        )
    }
    async function waitOneSecond(): Promise<void>{
        return new Promise((resolve)=>{
            setTimeout(resolve,1000)
        })
    }
    const [currentCounter, setCurrentCounter] = useState(2)

    

    async function waitTwoSeconds(): Promise<void>{
        return new Promise((resolve)=>{
            setTimeout(resolve, 2000)
        })

    }
    async function countdown(){
        setCurrentCounter(2)
        await waitOneSecond()

        setCurrentCounter(1)
        await waitOneSecond()
    }
    async function takeThreePictures(){
        
        for (let count =0; count <3; count++){
            await countdown()
            setCurrentPhoto(count+1)
            await playPhotoSound()
            await takePicture()
            

            if (count <2){
                await waitTwoSeconds()

        }
    }
    }
    

    const cameraRef = useRef<CameraView>(null)

    async function takePicture(){
        
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync()
            photos.push(photo)
            
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

    useEffect(()=>{
        if (permission?.granted){
            startAlert()
        }
    },[permission?.granted])

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
                <Text style = {styles.photoCounter}>Photo {currentPhoto} of 3

                </Text>

                
                </View>

                <View style = {styles.countdownContainer}>
                    <Text style = {styles.countdown}>
                    {currentCounter}

                </Text>
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

                <Animated.View
                style ={{
                    transform: [{scale: buttonScale}]
                }}>

                <Pressable style = {styles.takePhotoButton}
                           onPress= {takeThreePictures}
                           onPressIn ={pressIn}
                           onPressOut = {pressOut}
                           />
                           
                           

                </Animated.View>
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
        flexDirection: "row"


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
        


    },
    photoCounter: {
        fontFamily: "youthFont",
        color: "white",
        fontSize: 30,
        top: 18,
        left: 50

    },
    countdown:{
        color: "white",
        fontSize: 60,
        textAlign: "center"


    },countdownContainer:{
        position: "absolute",
        top: 100,
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 3,
        elevation: 3,
    }
        
    
    

})
   


