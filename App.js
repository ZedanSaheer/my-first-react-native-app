import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
   Text
   , View 
   , SafeAreaView
   , Image 
   , TouchableWithoutFeedback
   , TouchableOpacity
   , TouchableNativeFeedback
  ,TouchableHighlight,
  Button,
  Alert} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" 
      color="orange"
      onPress={()=>Alert.alert("Zaakee , Be careful", "you are appi kuttan",[{text:"yes" , onPress: ()=> console.log("yes")}
      ,{text:"no", onPress: ()=> console.log("no")}
      ]
      )} 
      />
      <Button title="Click Me" 
      color="orange"
      onPress={()=>Alert.prompt("Zaakee , Be careful", "you are appi kuttan", (text)=>console.log(text)
      )} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center",
  },
});

