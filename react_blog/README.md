# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

###Getting Started###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:StephenGrider/ReduxSimpleStarter.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```



### install react-router and call API and make blog list page.
npm i --save react-router@2.0.0-rc5;
Router를 설정하여 기본적인 것을 테스트한 후에 블로그 리스트를 만들기 위해서 아래의 패키지를 설치한다.
npm i --save axios redux-promise;
promise는 applyMiddleware(redux)에 객체를 전달한다.
그리고 나서 action creator를 생성한다.
action폴더의 index.js에 코드를 작성한다.
action의 index.js에는 데이터를 호출하는 코드를 작성한다. API 포함
reducers 폴더에서 reducer_post.js 파일을 생성한 후에 동일 폴더의 index.js에 바인딩한다.
reducer_posts에서 데이터를 캐싱한다. 이곳에서 상태를 판단한다.
posts_index.js 컴퍼넌트 페이지에서 액션을 콜하고 이것을 connect와 연결하여 props에 바인딩 하여 라이프사이클 메서드
componentWillMount에 맞추어 API를 호출하는 액션에 정의된 메서드를 호출하게 된다.
블로그 폼을 작성하고 전송하기 위해서 아래 링크의 문서를 참조한다.
http://redux-form.com/6.5.0/docs/api/
npm i --save redux-form@4.1.3; // 버전마다 변경이 있기 때문에 버전을 정확히 하는 것이 좋다.
redux-form을 rootReducer에 import하고 reducer로서 등록한다.
validation 연결하기
validation이 통과하지 않을 경우 전송이 되지 않도록 되어 있다.
