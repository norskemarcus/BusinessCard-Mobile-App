import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import the FontAwesome icons from Expo

const logo = require("./assets/images/netcompany.png");
const profileImage = require("./assets/images/profile.jpg");
const phone = "+4552340457";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}></Image>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.name}>Marcus Sebastian Holje</Text>
        <Text style={styles.title}>Software Developer</Text>
        <Text style={styles.email} onPress={() => Linking.openURL("mailto:${email}")}>
          msh@netcompany.com
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)} style={styles.contactButton}>
          <View style={styles.contactContainer}>
            <FontAwesome name="phone" size={20} color="#c2c6d1" style={styles.phoneIcon} />
            <Text style={styles.contactInfoButton}>{phone}</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.address}>
          Strandgade 3 {"\n"}
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
    backgroundColor: "#0c2444",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 330,
    height: 70,
    alignSelf: "center",
    marginBottom: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  name: {
    color: "#c2c6d1",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  title: {
    color: "#c2c6d1",
    fontSize: 18,
    marginTop: 5,
    textAlign: "center",
  },
  email: {
    color: "#c2c6d1",
    fontSize: 18,
    marginTop: 30,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  contactButton: {
    flexDirection: "row",
    justifyContent: "center", // Center the button horizontally
    alignItems: "center", // Center both vertically and horizontally
    marginTop: 20,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c2c6d1",
    borderRadius: 5,
    marginTop: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
  },
  phoneIcon: {
    marginRight: 7,
  },
  contactInfoButton: {
    color: "#c2c6d1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  address: {
    color: "#c2c6d1",
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
});
