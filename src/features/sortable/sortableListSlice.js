import { createSlice } from '@reduxjs/toolkit';

const sortableListSlice = createSlice({
  name: 'sortableList',
  initialState: {
    sortableList: [],
  },
  reducers: {
    setSortableList: (state, action) => {
      state.sortableList = action.payload;
    },
  },
});

export const { setSortableList } = sortableListSlice.actions;

export const fetchSortableList = (idList) => (dispatch) => {
  const data = {
    idList: idList,
  };

  fetch('http://localhost:3001/sortable/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      dispatch(setSortableList(json));
    });
};

export const selectSortableList = (state) => state.sortableList.sortableList;

export default sortableListSlice.reducer;
