import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// console.developers.google.com
// npm install --save youtube-api-search

// 스타일은 아래와 같이 연결해서 사용할 수 있다.
import styles from './public/css/style.min.css';
//import styles from './public/css/style.scss'; // <- 이와 같이는 사용할 수가 없다.


const API_KEY = 'AIzaSyCw_fn9yB4zTqujwg7mU8kAwe20Qgtclq0';

// test to call youtube api
// https://console.developers.google.com/apis/credentials?project=holcle-1344

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    YTSearch({key: API_KEY, term: 'twice'}, (videos) => {
      console.info(videos);
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }

  render(){
    return (
      <div className="container">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ (selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#react'));
