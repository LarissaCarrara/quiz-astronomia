import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import { perguntas } from "../constants/perguntas";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeIn, RollInRight } from "react-native-reanimated";
const QuizScreen = ({ navigation }: any) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [result, setResult] = React.useState({
    acertos: 0,
    erros: 0,
  });

  const handleClickResult = (alternativa: string, index: number) => {
    if (alternativa === perguntas[index].respostaCorreta) {
      setResult((state) => {
        return {
          ...state,
          acertos: state.acertos + 1,
        };
      });
      setCurrentQuestion((state) => state + 1);
      return;
    }
    setResult((state) => {
      return {
        ...state,
        erros: state.erros + 1,
      };
    });
    setCurrentQuestion((state) => state + 1);
  };

  return (
    <SafeAreaView style={s.container}>
      <Image
        style={s.bg}
        alt="background"
        source={require("../../assets/espaco1.jpg")}
      />
      <Ionicons name="checkmark-done" style={{ width: 20 }} color={"green"} />
      <View style={s.content}>
        <View style={s.navigation}>
          <View style={s.navContent}>
            {currentQuestion > 0 && (
              <Ionicons
                style={{ position: "absolute", left: 0 }}
                onPress={() =>
                  setCurrentQuestion((state) => {
                    if (state === 0) {
                      return state;
                    }
                    return state - 1;
                  })
                }
                name="arrow-back"
                size={24}
                color="white"
              />
            )}
            {currentQuestion <= perguntas.length - 1 && (
              <Ionicons
                style={{ position: "absolute", right: 0 }}
                onPress={() =>
                  setCurrentQuestion((state) => {
                    if (state === perguntas.length - 1) {
                      return state;
                    }
                    return state + 1;
                  })
                }
                name="arrow-forward"
                size={24}
                color="white"
              />
            )}
          </View>
        </View>

        {perguntas.map((pergunta, indexPergunta) => {
          if (indexPergunta !== currentQuestion) return null;
          return (
            <View style={s.altContainer} key={indexPergunta}>
              <Text style={s.txtB}>{pergunta.pergunta}</Text>
              {pergunta.alternativas.map((alternativa, indexAlternativa) => {
                return (
                  <View
                    style={s.alternativaContent}
                    key={indexAlternativa}
                  >
                    <TouchableOpacity
                      style={s.alternativa}
                      onPress={() =>
                        handleClickResult(alternativa.id, indexPergunta)
                      }
                    >
                      <Text style={s.txtB}>{alternativa.id}</Text>
                      <Text style={s.txtL}>{alternativa.txt}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          );
        })}
        {currentQuestion === 7 && (
          <TouchableOpacity
            style={s.botao}
            onPress={() => navigation.navigate("result", { result })}
          >
            <Text style={s.txtB}>Finalizar Quiz</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    maxWidth: width * 0.8,
    minWidth: width * 0.8,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  navigation: {
    position: "absolute",
    top: "50%",
    width: width - 15,
    marginBottom: 30,
  },
  navContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
  altContainer: {
    gap: 10,
  },
  botao: {
    width: width * 0.8,
    backgroundColor: "#121212",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  pergunta: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  alternativaContent: {
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#121212",
  },
  alternativa: {
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#121212",
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
});
