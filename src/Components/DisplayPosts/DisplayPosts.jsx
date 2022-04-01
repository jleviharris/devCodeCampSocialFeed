import '../app.css';
import CustomButton from '../Button/Button'
const DisplayPosts = (props) => {
    return ( 
        <div className="bottom-container">
            {props.parentPosts.map((post) => {
                return ( 
                <div className="border-box" key={post.name}>
                    <div className='text-left name'>{post.name}</div>
                    <div className='text-left text'>{post.postText}</div>
                    <div className="container">
                        <div className="row">
                            <div className='text-end col'><CustomButton/> </div>
                            {/* <div className='border-box text-end col'><button  className="dislikeButton"><i className="fa fa-thumbs-down"></i></button></div> */}
                        </div>
                    </div>
                </div>
                )
            })}
     </div>
     );
}
 
export default DisplayPosts;