import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function App() {
  const [Quote, setQuote] = useState("");
  const apiKey = "1I4os9K/VrUHx4P/37Uyqw==y3sQBWBxQInLeVTo";
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

  const fetchQuote = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      
      setQuote(response.data[0])
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle errors here
      console.error('API Error:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.Title}>𝙉𝙆 𝙌𝙪𝙤𝙩𝙚𝙯𝙯</Text>
        <Text style={styles.SubTitle}>
          Unleash the power of wisdom, one quote at a time
        </Text>
        <Image style={styles.mascot} source={require("./assets/mascot.png")} />
        {/* <Text style={{ ...styles.SubTitle, fontSize: 18, marginTop: 20 }}>
          Hey Buddy!{"\n"}Here is your Quote.
        </Text> */}
        <View style={styles.QuoteContainer}>
          <Text style={styles.Task}>"{Quote.quote}"{"\n"}{"\n"}<Text style={{color:'#FA2A55'}}>- {Quote.author}</Text></Text>
          
        </View>
        <TouchableOpacity style={styles.Button} onPress={fetchQuote}>
          <Text style={{ fontSize: 18, color: "aliceblue", fontWeight: "500" }}>
            Get New Quote
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor="aliceblue" barStyle={"dark-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center",
  },
  mascot: {
    marginTop: 25,
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  screenContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    boxSizing: "borderBox",
    width: "100%",
    paddingVertical: 50,
  },
  Title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#29465B",
  },
  SubTitle: {
    fontSize: 14,
    fontWeight: "300",
    color: "#2c2e33",
    textAlign: "center",
  },
  Task: {
    marginVertical: "10%",
    fontSize: 20,
    width: "95%",
    textAlign: "center",
    height: "auto",
    fontWeight: "500",
    color:'#2F0909'
  },
  Button: {
    backgroundColor: "#151B54",
    height: 50,
    width: 160,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 2,
  },
  QuoteContainer: {
    width: "90%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
