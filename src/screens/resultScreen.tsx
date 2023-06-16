import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

const ResultScreen = ({ navigation, route }: any) => {
  const { acertos, erros } = route.params.result;

  return (
    <SafeAreaView style={s.container}>
      <Image
        style={s.bg}
        alt="background"
        source={require("../../assets/espaco1.jpg")}
      />
      <View style={s.content}>
        <Text style={s.txtB}>Resultados</Text>
        <Text style={s.txtB}>
          Acertos - <Text style={s.txtL}>{acertos}</Text>
        </Text>
        <Text style={s.txtB}>
          Erros - <Text style={s.txtL}>{erros}</Text>
        </Text>
        <TouchableOpacity
          style={s.btn}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={s.txtB}>Recomeçar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "80%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
  txtB: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  txtL: {
    color: "#fff",
    textAlign: "left",
    fontSize: 18,
    fontWeight: "normal",
  },
  btn: {
    width: "80%",
    backgroundColor: "#121212",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
});
