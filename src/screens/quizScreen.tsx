import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { perguntas } from "../constants/perguntas";

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
      console.log("acertou");
      return;
    }
    setResult((state) => {
      return {
        ...state,
        erros: state.erros + 1,
      };
    });
    console.error("errou");
    setCurrentQuestion((state) => state + 1);
  };

  return (
    <SafeAreaView style={s.container}>
      <Image
        style={s.bg}
        alt="background"
        source={require("../../assets/espaco1.jpg")}
      />
      <View style={s.content}>
        {perguntas.map((pergunta, indexPergunta) => {
          if (indexPergunta !== currentQuestion) return null;
          return (
            <View style={s.altContainer} key={indexPergunta}>
              <Text style={s.txtB}>{pergunta.pergunta}</Text>
              {pergunta.alternativas.map((alternativa, indexAlternativa) => {
                return (
                  <TouchableOpacity
                    style={s.alternativa}
                    key={indexAlternativa}
                    onPress={() =>
                      handleClickResult(alternativa.id, indexPergunta)
                    }
                  >
                    <Text style={s.txtB}>{alternativa.id}</Text>
                    <Text style={s.txtL}>{alternativa.txt}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
        {currentQuestion === 7 && (
          <Button
            title="Finalizar Teste"
            onPress={() => navigation.navigate("result", { result })}
          />
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
  altContainer: {
    gap: 10,
  },
  pergunta: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  alternativa: {
    borderWidth: 1,
    borderColor: "black",
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
