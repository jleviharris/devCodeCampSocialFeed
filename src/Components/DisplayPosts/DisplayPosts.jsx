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
                               {/* <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> */}
            {/* <i class="fa-solid fa-thumbs-up"></i> */}
                </div>
                )
            })}
     </div>
     );
}
 
export default DisplayPosts;