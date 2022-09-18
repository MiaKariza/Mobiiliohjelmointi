import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [teksti, setTeksti] = useState('');
  const [lista, setLista] = useState([]);

  const lisaa = () => {
    setLista([...lista, { key: teksti }])
    setTeksti('');    
  };
  const tyhjaa = () => {
    setLista([]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput style={styles.input} onChangeText={(text) => setTeksti(text)} value={teksti}/>
      <View style={styles.nappirivi}>
        <Button title='Tyhjennä' onPress={tyhjaa} />
        <Button title='Lisää' onPress={lisaa} />
      </View>
      <Text style={styles.otsikko}>Ostoslista</Text>
      <FlatList
        data={lista}
        renderItem={({ item }) =>
          <Text>{ item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === "android" ? /* StatusBar.currentHeight == EI toimi jostain syystä*/ 100 : 0,
  },
  otsikko: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    borderBottomColor: '#05C203',
    backgroundColor: '#d3d3d3',
    borderRadius:5,
    borderBottomWidth: 1,
    width: '70%',
    height:50,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
  nappirivi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
});