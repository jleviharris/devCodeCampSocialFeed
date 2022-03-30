import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {
  
  const[Posts, setPosts] = useState([{name: 'Jon', postText: 'Hello world', like: null, dislike:null}])

  return (
    <div>
      <DisplayPosts parentPosts={Posts}/>
    </div>
  );
}

export default App;
