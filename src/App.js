import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {
  
  const[Posts, setPosts] = useState([]);
  
  function addNewPost(post){
    let tempPost = [post, ...Posts];
    
    setPosts(tempPost);
  }

  return (
    <div className='container'>
        <h1 className='title'> <small className="text-white bg-dark">
            S</small>
            o<small className="text-white bg-dark">
            c</small>
            i<small className="text-white bg-dark">
            a</small>
            l<small className="text-white bg-dark">
            <i className="fa-solid fa-couch"></i>
            </small>
            F<small className="text-white bg-dark">
            e</small>
            e<small className="text-white bg-dark">
            d</small>
            </h1>
        <div className='col-md-12'>
          <div className='text-left'>
      <CreatePost  createNewPost={addNewPost}/>
          </div>
          <div >
      <DisplayPosts parentPosts={Posts}/>
      </div>
      </div>
      </div>
  );
}



export default App;
