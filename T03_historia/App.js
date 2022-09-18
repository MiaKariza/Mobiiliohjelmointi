import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, View, FlatList } from 'react-native';
import { useState } from "react";
  
export default function App() {
  const [luku1, setLuku1] = useState('');
  const [luku2, setLuku2] = useState('');
  const [vastaus, setVastaus] = useState('');
  const [data, setData] = useState([]);

  const summa = () => {
    let summa = Number.parseInt(luku1) + Number.parseInt(luku2);
    setVastaus(summa);
    setData([...data, { key: luku1 + ' + ' + luku2 + ' = ' + summa }]);
    setLuku1('');
    setLuku2('');
  }
  const jaa = () => {
    let vahennys = Number.parseInt(luku1) - Number.parseInt(luku2);
    setVastaus(vahennys);
    setData([...data, { key: luku1 + ' - ' + luku2 + ' = ' + vahennys }]);
    setLuku1('');
    setLuku2('');
  }  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View >
        <Text style={styles.otsikko}>Laskin</Text>
        <Text style={styles.tulos}>Tulos: { vastaus }</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={text => setLuku1(text)} value={luku1} />
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={text => setLuku2(text)} value={luku2} />
      </View>
      <View style={styles.nappirivi}>
        <Button title='+' onPress={summa}/>
        <Button title='-' onPress={jaa}/>
      </View>
      <Text></Text>
      <FlatList        
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  otsikko: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 30,
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    borderBottomColor: '#05C203',
    backgroundColor: '#d3d3d3',
    borderRadius:5,
    borderBottomWidth: 1,
    width:150,
    height:50,
    marginBottom:10,
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
  },
  nappirivi: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
    alignItems: 'stretch',
  },
  tulos: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  }
});