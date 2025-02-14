
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {useDeviceOrientation} from '@react-native-community/hooks'

export default function Index() {
  const orientation = useDeviceOrientation()
 

console.log('orientation is:', orientation)

  console.log(Dimensions.get('screen'))
  return (
    <View style={{backgroundColor:'orange', width:"100%", height: orientation ? "30%": "100%"}}></View>
  );
}

// const backgroundStyle = { backgroundColor: "orange" };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0

//   },
// });
