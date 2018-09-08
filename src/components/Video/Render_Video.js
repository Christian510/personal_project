require('dotenv').config();
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from ' youtube-api-search';
import SearchBar from './components/Video/Search_Bar';
import VideoList from './components/Video/Video_List';


const {
    REACT_YOUTUBE_API_KEY
} = process.env



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: REACT_YOUTUBE_API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos })
        });
    }


    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos = {this.state.videos}/>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.querySelector('.container'))

