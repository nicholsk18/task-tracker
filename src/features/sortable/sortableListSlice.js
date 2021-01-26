import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSortableList = createAsyncThunk(
  'list/sortableListFragmentStatus',
  async (id) =>
    await fetch(`http://localhost:3001/sortable/${id}`)
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      })
);

const sortableListSlice = createSlice({
  name: 'sortableList',
  initialState: {
    status: 'idle',
    list: [],
  },
  reducers: {
    // setSortableList: (state, action) => {
    //   console.log(action.payload);
    //   state.sortableList = [action.payload];
    // },
  },
  extraReducers: {
    [fetchSortableList.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchSortableList.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.list.push(action.payload);
    },
  },
});

// export const { setSortableList } = sortableListSlice.actions;

// export const fetchSortableList = (id) => (dispatch) => {
//   fetch(`http://localhost:3001/sortable/${id}`)
//     .then((res) => res.json())
//     .then((json) => {
//       dispatch(setSortableList({ id: json.id, one: json.one, two: json.two }));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const selectSortableList = (state) => state.sortableList.list;
export const isLoading = (state) => {
  // console.log(state.sortableList);
  return state.sortableList.status;
};

export default sortableListSlice.reducer;
