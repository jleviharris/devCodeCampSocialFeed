import React, {useState} from 'react';

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handlePost(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            postText: post,
            like: null,
            dislike: null
        };
        props.createNewPost(newPost);
    }

    return ( 
        <form onSubmit={handlePost}>
             <div class="form-group">
                <label>Name</label>
                <input class="form control" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div class="form-group">
                <label>Post</label>
                <textarea class="form control form-control-lg" type="text" value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit' class="btn btn-primary">Post</button>
        </form>
     );
}
 
export default CreatePost;
