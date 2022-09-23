import "./sidebar.css"
import { Users } from "../../dummyData" 
import {Bookmark, Chat, PlayCircle, RssFeed, HelpOutline, WorkOutline, Event, School, Group } from "@mui/icons-material"
import CloseFriend from "../../components/closeFriend/CloseFriend"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListITem">
            <RssFeed  className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListITem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListITem">
            <PlayCircle  className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListITem">
            <Group  className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListITem">
            <Bookmark  className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmark</span>
          </li>

          <li className="sidebarListITem">
            <HelpOutline  className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListITem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListITem">
            <Event  className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListITem">
            <School  className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
         {Users.map(u=>(
          <CloseFriend key={u.id} user={u} />
         ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar