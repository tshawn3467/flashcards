import { configureStore } from "@reduxjs/toolkit";
import topicsSliceReducer from "../features/topics/topicsSlice";
import quizzesSliceReducer from "../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes: quizzesSliceReducer
  },
});
