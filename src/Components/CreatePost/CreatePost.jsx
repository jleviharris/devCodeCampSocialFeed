import React, {useState} from 'react';

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handlePost(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            postText: post,
            // like: like,
            // dislike: dislike
        };
        props.createNewPost(newPost);
    }

    return ( 
        <form onSubmit={handlePost}>
            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type="text" value={post} onChange={(event) => setPost(event.target.value)} />
            <button type='submit'>Post</button>
        </form>
     );
}
 
export default CreatePost;
