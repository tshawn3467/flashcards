import { createSlice } from "@reduxjs/toolkit";


export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {
            id: '123',
            name: 'example',
            icon: 'icon url',
            quizIds: ['456']
        }
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics = {[action.payload.id]: 
                action.payload,
                quizIds: []
            }
        }
    }
});

export const selectTopics = (state) => state.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;