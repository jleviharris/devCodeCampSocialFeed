import React, { useState } from 'react';


function App() {
  
  const[entries, setEntries] = useState([{name: 'Jon', postText: 'Hello world'}])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th>Post</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
