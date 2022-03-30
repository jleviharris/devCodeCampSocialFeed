const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.parentPosts.map((post) => {
                return ( 
                <div>
                    <div>{post.name}</div>
                    <div>{post.postText}</div>
                    <div>{post.like}</div>
                    <div>{post.dislike}</div>
                </div>
                )
            })}
     </div>
     );
}
 
export default DisplayPosts;