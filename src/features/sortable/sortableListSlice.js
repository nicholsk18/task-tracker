import { createSlice } from '@reduxjs/toolkit';

const sortableListSlice = createSlice({
  name: 'sortableList',
  initialState: {
    sortableList: {
      list: [],
    },
  },
  reducers: {
    setSortableList: (state, action) => {
      state.sortableList = action.payload;
    },
  },
});

export const { setSortableList } = sortableListSlice.actions;

export const fetchSortableList = (id) => (dispatch) => {
  fetch(`http://localhost:3001/sortable/${id}`)
    .then((res) => res.json())
    .then((json) => {
      // how to save this in the slice
      dispatch(setSortableList({ list: [json] }));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const selectSortableList = (state) => state.sortableList.sortableList;

export default sortableListSlice.reducer;
