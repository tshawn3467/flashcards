import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";


export const quizzesSlice = createSlice ({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;

            state.quizzes[id] = {
                id: id,
                topicId: topicId,
                name: name,
                cardIds: cardIds
            };
        }
    }
})

export const addConnectQuiz = (payload) => {
    return (dispatch) => {

        dispatch(addQuizId(payload));
        dispatch(addQuiz(payload));
    }
}

export const selectQuiz = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;