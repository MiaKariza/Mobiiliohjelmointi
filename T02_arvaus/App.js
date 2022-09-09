import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [aloitettu, setAloitettu] = useState(false);
  console.log('Aloitettu: ' + aloitettu);
  const [vastaus, setVastaus] = useState(Math.floor(Math.random() * 100) + 1);
  console.log('Oikea vastaus: ' + vastaus);
  const [arvaus, setArvaus] = useState('');
  console.log('Viimeisin arvaus: ' + arvaus);
  const [laskuri, setLaskuri] = useState(0);
  console.log('Arvauksia yhteensä ' + laskuri);
  const [vinkki, setVinkki] = useState('Guess number between 1 - 100');
  
  const peli = () => {    
    if (! aloitettu) {
      setVastaus(vastaus);
      setAloitettu(true);
      console.log(vastaus);
    }
    if (arvaus < vastaus) {
      setLaskuri(laskuri + 1);
      setVinkki('Your guess ' + arvaus + ' is too low');
      setArvaus('');
    } else if (arvaus > vastaus) {
      setLaskuri(laskuri + 1);
      setVinkki('Your guess ' + arvaus + ' is too high');
      setArvaus('');
    } else {
      setLaskuri(laskuri + 1);
      let kerta = laskuri + 1;
      Alert.alert('You guessed the number in ' + kerta + ' guesses.', 'Answer was ' + vastaus + '. ' + ' Play again!');
      setAloitettu(false);
      setVastaus(Math.floor(Math.random() * 100) + 1);
      setArvaus('');
      setLaskuri(0);
      setVinkki('Guess number between 1 - 100');      
    }

  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.otsikko}>{vinkki}</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} onChangeText={setArvaus} value={arvaus} keyboardType='numeric' />
      <Button title='Make a guess' onPress={peli}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otsikko: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#05C203',
    backgroundColor: '#d3d3d3',
    borderRadius:5,
    borderBottomWidth: 1,
    width:'30%',
    height:50,
    marginBottom:10,
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
  },
});
