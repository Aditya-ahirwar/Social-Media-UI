import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MailLockRounded } from "@mui/icons-material";
import Posts from '../../components/posts/Post'

const Profile = () => {
  return (
    <div className="profile">
        <div className="images">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="cover"/>
        <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" className="profilePic"/>
        </div>
        <div className="profileContainer">
            <div className="profileInfo">
                <div className="left">
                    <a href="http://facebook.com">
                        <FacebookTwoToneIcon fontSize="large" />
                    </a>
                    <a href="http://instagram.com">
                        <InstagramIcon fontSize="large" />
                    </a>
                    <a href="http://twitter.com">
                        <TwitterIcon fontSize="large" />
                    </a>
                </div>

                <div className="center">
                    <div>
                        <span>Jane Doe</span>
                        <button>Follow</button>
                    </div>
                    
                </div>

                <div className="right">
                    <MailLockRounded/>
                    <MoreVertIcon/>
                </div>
            </div>
            <Posts/>
        </div>
    </div>
  );
};

export default Profile;
  