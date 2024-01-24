import PokemonCard from './components/PokemonCard'
import { StyleSheet, View, Platform, SafeAreaView ,ScrollView} from 'react-native';

export default function App() {
  const agbadaData = {
    name:'Agbada',
    image:require('./assets/agbada8.jpg'),
    type:'fire',
    hp:'39',
    moves:['Scratch','Ember', 'Growl','Leer'],
    weaknesses:['Water','Rock'],
  }
  const omodeData = {
    name:'Omode',
    image:require('./assets/agbada9.jpg'),
    type:'water',
    hp:'39',
    moves:['Scratch','Ember', 'Growl','Leer'],
    weaknesses:['Water','Rock'],
  }
  const caftanData = {
    name:'Caftan',
    image:require('./assets/pic-1.jpg'),
    type:'grass',
    hp:'39',
    moves:['Scratch','Ember', 'Growl','Leer'],
    weaknesses:['Water','Rock'],
  }
  const senatorData = {
    name:'Senator',
    image:require('./assets/pic-3.jpg'),
    type:'electric',
    hp:'39',
    moves:['Scratch','Ember', 'Growl','Leer'],
    weaknesses:['Water','Rock'],
  }
  return (
    <SafeAreaView style={styles.container}>
              <ScrollView>
       <PokemonCard {...agbadaData}/>
        <PokemonCard {...omodeData}/>
        <PokemonCard {...caftanData}/>
        <PokemonCard {...senatorData}/>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 25
  },
});
