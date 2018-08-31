import Playlist from "../Playlist/Playlist";
import axios from "axios";
import Favorites from "../Favorites/Favorites";
import Header from "../Header/Header";
import Button from "../Button/Button";
import Video from "../Video/Video";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      videos: [],
      playlist: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this);
    this.deleteVideos = this.deleteVideos.bind(this);
    this.addVideos = this.addVideos.bind(this);
  }

  componentDidMount() {
    axios.get("/api/playlist").then(response => {
      this.setState({
        videos: response.data
      });
    });
  }

  deleteVideos(videoId) {
    axios.delete(`/api/playlist/${videoId}`).then(response => {
      this.setState({
        playlist: response.data
      });
    });
  }

  addVideos(val) {
    axios.post("/api/playlist", val).then(response => {
      console.log(response);
      this.setState({
        playlist: response.data
      });
    });
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }

  search(e) {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=${
          this.state.search
        }&maxResults=25&part=snippet&key=${process.env.REACT_APP_YOUTUBE_KEY}`
      )
      .then(res => {
        this.setState({ videos: res.data.items });
      });
  }

  render() {
    let videosToDisplay = this.state.videos.map((element, index) => {
      let stitchedSource = `https://www.youtube.com/embed/${
        element.id.videoId
      }`;
      return (
        <div key={index}>
          <Video vidSrc={stitchedSource} title={element.snippet.title} />
          <Button title="Save" addVideos={this.addVideos} element={element} />
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div className="search-container">
          <form onSubmit={this.search}>
            <input onChange={this.handleSearch} type="text" />
            <button className="search-button">Search</button>
          </form>
        </div>
        <div className="playlist-container">
          <Playlist videosToDisplay={videosToDisplay} />
          <Favorites
            video={this.state.playlist}
            delete={this.deleteVideos}
            search={this.search}
          />
        </div>
      </div>
    );
  }
}

export default Search;