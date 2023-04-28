import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addBook, removeBook } from "./Actions";

const initialState = {
  name: "",
  author: "",
};

class Books extends Component {
  state = initialState;

  // key와 value 두개의 인수를 사용하는 udateInput 메서드
  // ...연산자를 이용해서 state를 업데이트
  // ...연산자는 기존의 state 키-값 쌍들을 새 state에 저장한 후
  // 새로운 키-값 쌍을 새 state에 추가
  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  //dispatch 호출 (connect 함수의 props로 참조)
  addBook = () => {
    this.props.dispatchAddBook(this.state);
    this.setState(initialState);
  };

  removeBook = (book) => {
    this.props.dispatchRemoveBook(book);
  };

  render() {
    const { books } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>도서</Text>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={styles.bookContainer}
        >
          {books.map((book, index) => (
            <View style={styles.book} key={index}>
              <Text style={styles.name}>{book.name}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text onPress={() => this.removeBook(book)}>삭제</Text>
            </View>
          ))}
        </ScrollView>
        {/* 작성 폼 */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox}
              placeholder="도서 제목"
              value={this.state.name}
              onChangeText={(value) => this.updateInput("name", value)}
            />
            <TextInput
              style={styles.inputBox}
              placeholder="도서 저자"
              value={this.state.author}
              onChangeText={(value) => this.updateInput("author", value)}
            />
          </View>
          <TouchableOpacity onPress={this.addBook}>
            <View style={styles.submitBtn}>
              <Text style={styles.btnText}>등록</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookContainer: {
    borderTopWidth: 1,
    borderTopColor: "#bbb",
    flex: 1,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
  name: {
    fontSize: 20,
  },
  book: {
    padding: 20,
  },
  author: {
    fontSize: 15,
    color: "#888",
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  inputBox: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 4,
    marginTop: 4,
    width: 200,
    borderRadius: 8,
    height: 34,
    paddingLeft: 10,
  },
  submitBtn: {
    width: 120,
    height: 80,
    borderRadius: 8,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 28,
    fontWeight: 600,
  },
});

//리덕스의 상태 객체를 인수로 전달받고 하나의 키를 포함한 객체를 반환
const mapStateToProps = (state) => ({
  books: state.bookReducers.books,
});

const mapDispatchToProps = {
  dispatchAddBook: (book) => addBook(book),
  dispatchRemoveBook: (book) => removeBook(book),
};

// connect : 값을 반환해주는 함수
export default connect(mapStateToProps, mapDispatchToProps)(Books);
