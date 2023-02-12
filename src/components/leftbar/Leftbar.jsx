import Person2Icon from '@mui/icons-material/Person2';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import MailIcon from '@mui/icons-material/Mail';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CollectionsIcon from '@mui/icons-material/Collections';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EventIcon from '@mui/icons-material/Event';

import './Leftbar.scss'

const Leftbar = () => {
    return(
    <div className="Leftbar">
        <div className="container">
            <div className="menu">
                <div className='user'>
                <img src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <span>Jhon Doe</span>
                </div>
                <div className = "item">
                    <Person2Icon/>
                    <span>
                        Friends
                    </span>
                </div>
                <div className = "item">
                    <GroupsIcon/>
                    <span>
                        Group
                    </span>
                </div>
                <div className = "item">
                    <WatchLaterIcon/>
                    <span>
                        Time
                    </span>
                </div>
                <div className = "item">
                    <LocalGroceryStoreIcon/>
                    <span>
                        Shopping
                    </span>
                </div>
            </div>

            <hr />

            <div className="shortcuts">
                <div className = "item">
                    <MailIcon/>
                    <span>Messages</span>
                </div>
                <div className = "item">
                    <CollectionsIcon/>
                    <span>Gallery</span>
                </div>
                <div className = "item">
                    <OndemandVideoIcon/>
                    <span> Your Videos</span>
                </div>
                <div className = "item">
                    <EventIcon/>
                    <span>Calender</span>
                </div>
                <div className = "item">
                    <SportsEsportsIcon/>
                    <span>Gaming</span>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Leftbar;