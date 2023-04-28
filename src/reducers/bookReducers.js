//초기 상태
import { ADD_BOOK, REMOVE_BOOK } from "../Actions";
import uuid from "react-native-uuid";
import "react-native-get-random-values";

const initialState = {
  books: [{ name: "스즈메의 문단속", author: "신카이 마코토", id: uuid.v4() }],
};

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: //두번째 인수값의 type이 ADD_BOOK이면 새 books 배열을 반환
      return {
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      const index = state.books.findIndex((book) => book.id === action.book.id);
      return {
        books: [
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1),
        ],
      };

    default: // action의 type이 일치하는 case가 없다면 기존의 state 반환
      return state;
  }
};

export default bookReducers;
