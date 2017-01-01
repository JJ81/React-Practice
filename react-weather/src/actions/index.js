/*
  middleware action과 연관, reducer와 중간 매개체 역할을 한다.
  그럼 이게 구체적으로 어떤 역할을 하는지 알아보자.
  https://www.npmjs.com/package/redux-promise

*/
import axios from 'axios'; // jQuery Ajax

const API_KEY = "dc14f98d65650a54790a7f349354441e";
//const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast?&appid=" + API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`; // us is country code after city code or name
  const request = axios.get(url); // promise is not return data.

  console.log('Request:', request);

  return {
    // 항상 타입을 가져야 한다.
    type: FETCH_WEATHER,
    payload: request // 페이로드에 promise는 넘긴다..
  };
}
