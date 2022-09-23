import Feed from "../../../components/feed/Feed"
import Rightbar from "../../../components/rightbar/Rightbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import Topbar from "../../../components/topbar/Topbar"
import  "./profile.css"


function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img className="profileCoverImg" 
                src="assets/beach.jpg" alt="" />
                <img className="profileUserImg" 
                src="assets/cover.jpg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Anthonny Gabriella </h4>
              <span className="profileInfoDesc">Welcome to my world!</span>
            </div>
        </div>
        <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
        </div>
        
    </div>
    </div>
   </>
  )
}

export default Profile