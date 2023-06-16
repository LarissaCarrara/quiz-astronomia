import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={s.container}>
      <Image
        style={s.bg}
        alt="background"
        source={require("../../assets/espaco1.jpg")}
      />
      <View style={s.txts}>
        <Text style={s.txtB}>Projeto Quiz - SENAI 2023</Text>
        <Text style={s.txtL}>
          <Text style={s.txtB}>Assunto:</Text> Astronomia
        </Text>
        <Text style={s.txtL}>
          Perguntas feitas com base em conhecimentos básicos sobre astronomia e
          temas gerais do nosso universo
        </Text>
      </View>

      <TouchableOpacity
        style={s.btn}
        onPress={() => navigation.navigate("quiz")}
      >
        <Text style={s.txtBtn}>Iniciar Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
  txts: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
    gap: 7,
  },
  txtB: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  txtL: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "normal",
  },
  txtBtn: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "normal",
    color: "#fff",
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
