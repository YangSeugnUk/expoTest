import React from 'react';
import {View, Text, Image, Button, TextInput, StyleSheet} from 'react-native';

const App = () => {
    return (
        <View>
          <Text>
            hi
          </Text>
          <Image
            source={{
              uri: "https://thumb.mt.co.kr/06/2020/07/2020070608543287598_1.jpg/dims/optimize/"
            }}
            style={{ width:200, height:200}}
          />
          <Button
            title="Press me"
            onPress={() => alert("hi")}
          />
          <TextInput
              style={styles.input}

            placeholder="hi"
            keyboardType="text"
          />
          
        </View>
    );
};


export default App;

const styles = StyleSheet.create({
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
  }
})