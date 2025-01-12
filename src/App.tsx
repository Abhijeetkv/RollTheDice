import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import DiceOne from '../assets/one.png'
import DiceTwo from '../assets/two.png'
import DiceThree from '../assets/three.png'
import DiceFour from '../assets/four.png'
import DiceFive from '../assets/five.png'
import DiceSix from '../assets/six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): React.JSX.Element {

  return (
    <View>
        <Text>text is here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2'
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: 700,
    textTransform: 'uppercase',
  }
});

export default App;
