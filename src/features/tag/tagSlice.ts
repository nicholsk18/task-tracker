import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    loading: true,
    tags: [],
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    setTags: (state, action: PayloadAction<[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { setTags, startLoading, finishLoading } = tagSlice.actions;

export const fetchTags = (tagIds: []) => (dispatch: any) => {
  // This is probably not needed as init state is true?!
  dispatch(startLoading());

  const data = {
    tagIds: tagIds,
  };

  fetch('http://localhost:3001/tags', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      dispatch(setTags(json));

      dispatch(finishLoading());
    });
};

export const selectTags = (state: any) => state.tag.tags;
export const isLoading = (state: any) => state.tag.loading;

export default tagSlice.reducer;
