import { createSlice } from '@reduxjs/toolkit';

interface Topic {
    id: number;
    name: string;
    description: string;
    parentId: number;
}

interface Subject {
  id: number;
  name: string;
  topics: Topic[];
}

interface SubjectsState {
  subjects: Subject[];
}

const initialState: SubjectsState = {
  subjects: [],
};

const subjectsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addSubject: (state, action) => {
      state.subjects.push(action.payload);
    },
    deleteSubject: (state, action) => {
      state.subjects = state.subjects.filter((subject) => subject.id !== action.payload);
    },
    addTopic: (state, action) => {
      state.subjects.filter((subject) => subject.id === action.payload.subjectId)[0].topics.push(action.payload.topic);
  },
    deleteTopic: (state, action) => {
        const subject = state.subjects.filter((subject) => subject.id === action.payload.subjectId)[0];
        subject.topics = subject.topics.filter((topic) => topic.id != action.payload.topicId)
    }
}});

export const { addSubject, deleteSubject, addTopic, deleteTopic} = subjectsSlice.actions;

export default subjectsSlice.reducer;