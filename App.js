import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const logo = require('./assets/images/netcompany.png');
const profileImage = require('./assets/images/profile.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}></Image>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.name}>Marcus Sebastian Holje</Text>
        <Text style={styles.title}>Software Developer</Text>
        <Text style={styles.contactInfo}>
        msh@netcompany.com
        </Text>
        <Text style={styles.contactInfo}>Phone: +45 90807060</Text>
        <Text style={styles.address}>Strandgade 3 {"\n"}
        1401 København K{"\n"}
        Denmark
        </Text>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c2444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 330, 
    height: 70, 
    alignSelf: 'center',
    marginBottom: 50
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center'
  },
  name: {
    color: '#c2c6d1',
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    color: '#c2c6d1',
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },
  contactInfo: {
    color: '#c2c6d1',
    fontSize: 18,
    marginTop: 5, 
    textAlign: 'center',
  },
  address: {
    color: '#c2c6d1',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});
