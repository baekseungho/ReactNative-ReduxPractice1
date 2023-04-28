import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/reducers/index.js";
import Books from "./src/Books.js";

//rootReducer 의 내용을 sotre객체로 생성
const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      //Provider 컴포넌트로 감싼 Books컴포넌트 반환
      // Provider의 prop으로 store에 전달
      <Provider store={store}>
        <Books />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
