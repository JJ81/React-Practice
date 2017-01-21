import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {
  all : [] // array of posts for all.
  ,post: null // single post selected.
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
