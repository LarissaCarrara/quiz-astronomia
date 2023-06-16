import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/homeScreen";
import QuizScreen from "./src/screens/quizScreen";
import ResultScreen from "./src/screens/resultScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
          name="quiz"
          component={QuizScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
          name="result"
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
