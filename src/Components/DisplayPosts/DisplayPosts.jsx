import '../app.css';
const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.parentPosts.map((post) => {
                return ( 
                <div>
                    <div className='border-box, text-center'>{post.name}</div>
                    <div className='border-box, text-center'>{post.postText}</div>

                    <div className='border-box, text-end'><button type="toggle" class="likeButton"><i class="fa fa-thumbs-up"></i></button></div>
                    <div className='border-box, text-end'><button type="toggle" class="dislikeButton"><i class="fa fa-thumbs-down"></i></button></div>
                    
                </div>
                )
            })}
     </div>
     );
}
 
export default DisplayPosts;