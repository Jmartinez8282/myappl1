import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
 
} from "react-native";


export default function Index() {


  return (
    <View style={styles.container}>
     
    <Text> Edit app/index.tsx to this screen.</Text>
    {/* <Image source={require('../assets/images/react-logo.png')}/> */}
    <TouchableNativeFeedback
      onPress={() => console.log("Image Pressed!!!")}
    >
    {/* <Image blurRadius={10} fadeDuration={6000} source={{
     
      width: 200,
      height:300,
      uri:"https://picsum.photos/200/300"
    }}/> */}
    <View style={{width:200, height:70, backgroundColor:'lightblue'}}></View>
    </TouchableNativeFeedback>
    </View>


  );
}

const backgroundStyle = {backgroundColor:"orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor:"cornflowerblue",
  justifyContent:'center',
  alignItems:"center"
   
  },
});
