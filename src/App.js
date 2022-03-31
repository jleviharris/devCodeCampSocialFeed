import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {
  
  const[Posts, setPosts] = useState([])

  function addNewPost(post){
    let tempPost = [post, ...Posts];
    
    setPosts(tempPost);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='border-box, text-left'>
      <CreatePost  createNewPost={addNewPost}/>
          </div>
          <div className='border-box, col-md-8'>
      <DisplayPosts parentPosts={Posts}/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
