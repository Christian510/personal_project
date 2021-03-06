
import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './Search_Bar';
import VideoList from './Video_List';
import VideoDetail from './Video_Detail';
import './Video.css';
import Quotes from '../Quotes/Quotes';
import { Link } from 'react-router-dom'


const {
    REACT_APP_YOUTUBE_API_KEY
} = process.env

class RenderVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('falling pandas');
    }

    videoSearch(term) {
        YTSearch({ key: REACT_APP_YOUTUBE_API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <div>

                <h5> <span><Quotes /></span> </h5>

                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
                <div>
                    <Link to={'./User_Main'}><button><h1>Home</h1></button></Link>
                </div>
            </div>
        )
    }
}



export default RenderVideo
