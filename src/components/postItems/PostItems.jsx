import './PostItems.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';


import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useState } from 'react';


const Post = ({post})=>{
    const liked = true;
    const [commentOpen, setCommentOpen]  = useState('false');
    return(
        <div className="post">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <Link to = {`/profile/${post.userId}`} style={{textDecoration:"none", color:'inherit'}}>
                            <span>{post.name}</span>
                        </Link>
                        <span>1 min ago</span>
                    </div>
                </div>
                <MoreVertOutlinedIcon/>
            </div>
            <div className="content">
                <span className="description">{post.desc}</span>
                <img src={post.img} alt="" />
            </div>
            <div className="interaction">
                <div className="likes">
                    {liked ? <FavoriteIcon/> : <FavoriteBorderOutlinedIcon/>}
                    <span> 2 Likes</span>
                </div>
                <div className="comment" onClick={()=> setCommentOpen(!commentOpen)}>
                    <AddCommentIcon/>
                    <span> 3 Comments</span>
                </div>
                <div className="share">
                    <SendIcon/>
                    <span>Share</span>
                </div>
            </div>
            {commentOpen && <Comments/>}
        </div>
    )
}

export default Post