import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

import './Navbar.scss'
import { Link } from 'react-router-dom';

let  Navbar = ()=> {
    return(
        <div className='navbar'>
            <div className="left">
                <Link to = '/' style={{textDecoration : "none"}}>
                <span>Meet'em</span>
                </Link>
                <HouseSidingOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <SplitscreenOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder='search'/>
                </div>
            </div>
            <div className="right">
                <MessageOutlinedIcon/>
                <NotificationsActiveOutlinedIcon/>
                <div className="user">
                    <img src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <span>Jhon Doe</span>
                </div>
            </div>
        </div>
        );
}
export default Navbar