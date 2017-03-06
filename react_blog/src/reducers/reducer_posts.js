// @ Reducer

import { FETCH_POSTS } from '../actions/index';
const INITIAL_STATE = {
  all: [], // index page
  post : null // individual post
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all : action.payload.data }; // state에는 무엇이 넘어오는가??
    default:
      return state;
  }
}
