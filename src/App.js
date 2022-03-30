import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {
  
  const[Posts, setPosts] = useState([{name: 'Jon', postText: 'Hello world', like: null, dislike:null}])

  return (
    <div>
      <CreatePost />
      <DisplayPosts parentPosts={Posts}/>
    </div>
  );
}

export default App;
