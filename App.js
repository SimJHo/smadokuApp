import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Switch } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      
      <Image source={{uri: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"}} 
      style={styles.url_image} />
      
      <TextInput placeholder="이름을 입력해주세요" />
      
      <Button title="click" onPress={()=>{console.log("clicked");}}/>

      <Switch value={true} />
      
      <ScrollView>
        <Image source={{uri: "https://i.ytimg.com/vi/ByH9LuSILxU/maxresdefault.jpg"}} 
        style={styles.url_image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  local_image: {
    width: 100,
    height: 100,
  },
  url_image: {
    width: 200,
    height: 200,
  },
});
