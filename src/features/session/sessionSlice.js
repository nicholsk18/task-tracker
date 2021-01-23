import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    loading: true,
    session: {
      sessionId: 0,
      scheduleId: 0,
      activityId: 0,
    },
  },
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    },
  },
});

export const { setSession, startLoading, finishLoading } = sessionSlice.actions;

export const fetchSession = (id) => (dispatch) => {
  dispatch(startLoading());

  setTimeout(() => {
    fetch(`http://localhost:3001/session/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(
          setSession({
            sessionId: json.id,
            scheduleId: json.scheduleId,
            activityId: json.activityId,
          })
        );

        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log(error);
      });
  }, 1000);
};

export const selectSession = (state) => state.session.session;
export const isLoading = (state) => state.session.loading;

export default sessionSlice.reducer;
