import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    setSession: (
      state,
      action: PayloadAction<{
        sessionId: number;
        scheduleId: number;
        activityId: number;
      }>
    ) => {
      state.session = action.payload;
    },
  },
});

export const { setSession, startLoading, finishLoading } = sessionSlice.actions;

export const fetchSession = (id: any) => (dispatch: any) => {
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

export const selectSession = (state: any) => state.session.session;
export const isLoading = (state: any) => state.session.loading;

export default sessionSlice.reducer;
