import '../app.css';
import CustomButton from '../Button/Button'
const DisplayPosts = (props) => {
    return ( 
        <div className="bottom-container">
            {props.parentPosts.map((post) => {
                return ( 
                <div className="border-box" key={post.name}>
                    <div className='text-left name'>{post.name}</div>
                    <div className='text-center text'>{post.postText}</div>
                    <div className="container">
                        <div className="row">
                            <div className='text-end col'><CustomButton/> </div>
                        </div>
                    </div>
                </div>
                )
            })}
     </div>
     );
}
 
export default DisplayPosts;