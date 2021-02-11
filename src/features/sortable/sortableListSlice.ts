import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sortableListSlice = createSlice({
  name: 'sortableList',
  initialState: {
    sortableList: [],
  },
  reducers: {
    setSortableList: (state, action: PayloadAction<[]>) => {
      state.sortableList = action.payload;
    },
  },
});

export const { setSortableList } = sortableListSlice.actions;

export const fetchSortableList = (idList: number[]) => (
  dispatch: any
): void => {
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

export const selectSortableList = (state: any): [] =>
  state.sortableList.sortableList;

export default sortableListSlice.reducer;
