import '../app.css';
const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.parentPosts.map((post) => {
                return ( 
                <div className="border-box">
                    <div className='text-left'>{post.name}</div>
                    <div className='text-left'>{post.postText}</div>
                    <div className="container">
                        <div className="row">
                            <div className='border-box, text-end, col'><button type="toggle" class="likeButton"><i class="fa fa-thumbs-up"></i></button></div>
                            <div className='border-box, text-end, col'><button type="toggle" class="dislikeButton"><i class="fa fa-thumbs-down"></i></button></div>
                        </div>
                    </div>
                </div>
                )
            })}
     </div>
     );
}
 
export default DisplayPosts;