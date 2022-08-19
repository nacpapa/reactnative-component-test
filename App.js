import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import ScrollView from './components/Examples/ScrollView';
import PizzaTranslator from './components/Examples/PizzaTranslator';

const App = () => {
  return (
    <ScrollView />
    // <PizzaTranslator />;
  );
  // return (
  //   <ScrollView>
  //     <Text>Some text</Text>
  //     <View>
  //       <Text>Some more text</Text>
  //       <Image
  //         source={{
  //           uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
  //         }}
  //         accessibilityLabel={'This is a picture of a cat'}
  //         style={{
  //           width: 200,
  //           height: 200,
  //           backgroundColor: 'black',
  //         }}
  //       />
  //     </View>
  //     <TextInput
  //       style={{
  //         height: 40,
  //         borderColor: 'gray',
  //         borderWidth: 1,
  //       }}
  //       defaultValue="You can type in me"
  //     />
  //   </ScrollView>
  // );
};

export default App;
