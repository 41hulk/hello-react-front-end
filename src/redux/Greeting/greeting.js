import axios from "axios";

const FETCH_DATA = "FETCH_DATA";

const initialState = {
  greetings: [],
};

export const getData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getGreeting = () => async (dispatch) => {
  await axios("http://127.0.0.1:3005/api/v1/greetings")
    .then((response) => response.json())
    .then((data) => {
      dispatch(getData(data));
    });
};

export default function greetReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_DATA:
      return { ...state, greetings: payload };

    default:
      return state;
  }
}
