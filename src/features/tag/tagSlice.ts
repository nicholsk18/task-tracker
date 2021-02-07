import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    tag: {
      id: 0,
      name: '',
    },
  },
  reducers: {
    setTag: (state, action) => {
      state.tag = action.payload;
    },
  },
});

export const { setTag } = tagSlice.actions;

export const fetchTag = (id: any) => (dispatch: any) => {
  fetch(`http://localhost:3001/tag/${id}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
};

export const selectTag = (state: any) => state.tag.tag;

export default tagSlice.reducer;
