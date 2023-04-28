//리듀서에서 재사용 할 수  있도록 ADD_BOOK 상수를 만들어 export한다.
export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
import uuid from "react-native-uuid";

//addBook이라는 함수는 type정보와 하나으 ㅣ인수로 도서객체를 반환하는 함수
export function addBook(book) {
  return {
    type: ADD_BOOK,
    book: { ...book, id: uuid.v4() },
  };
}

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}
