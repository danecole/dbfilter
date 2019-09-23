import React, { Component } from 'react';
import axios from 'axios';
import Blog from './containers/Blog/Blog';
import Post from './components/Post/Post';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount () {
    axios.get('http://localhost:3001/posts')
    //promise data because it'll take time to download
    .then(response => {
        this.setState({posts: response.data});
       // console.log(response);

    });
    }

  render() {
    // map array into JSX elements
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title}/>
    });
    return (

      <div className="App">

        <div>
        <section className="Posts">
          {posts}
        </section>
      </div>


      </div>
    );
  }
}

export default App;