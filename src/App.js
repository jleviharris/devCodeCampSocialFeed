import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {
  
  const[Posts, setPosts] = useState([{name: null, postText: null, like: null, dislike:null}])

  function addNewPost(post){
    let tempPost = [post, ...Posts];
    
    setPosts(tempPost);
  }

  return (
    <div>
      <CreatePost  createNewPost={addNewPost}/>
      <DisplayPosts parentPosts={Posts}/>
    </div>
  );
}

export default App;
