import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

function Rightbar({profile}) {
  

  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/giftbox.jpg" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b>and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/friend2.jpg" alt="" />
        <h4 className="rightbarTitle">
          Online Friends
        </h4>
        <ul className="rightbarFriendList">
         {Users.map(u=>(
          <Online key={u.id} user={u} />
         ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return(
        <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Mardid</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/priyanka.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/laugh.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/out.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/aarti.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/cover.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/beauty.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
        </>
      )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar