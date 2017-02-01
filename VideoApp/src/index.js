import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Downwards data flow. The most parent component should be resposible for fetching data.

// THIS IS RESTRICTED TO IP!!!!!
// Change at https://console.developers.google.com/apis/
const API_KEY = 'AIzaSyBDLui5HjS-REv6U2ovpk8SWy7czeKUY6Y';

// const is ES6 is simlar to var but it will never chnage it is a constant
// JSX allows for html in javascript, it looks like HTML but is really JS.
// ES6 () => {} is equal to function() {} however scop of this changes slightly

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key :API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
};

// Take this component's generated HTML and put it on the page (DOM)
// JSX calls React.createElement() so you take class App and wrap in JSX to instantiate
// You need to provide it a reference to exisiting DOM element

ReactDOM.render(<App />, document.querySelector('.container'));
