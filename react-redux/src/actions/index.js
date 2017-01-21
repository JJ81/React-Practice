import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=qwer1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type : FETCH_POSTS,
    payload : request
  };
}

export function createPost(props, cb) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  // TODO 제대로 처리가 되었는지 결과를 받을 수 있어야 한다.
  cb(null, request);

  return {
    type: CREATE_POST,
    payload: request
  }
}
