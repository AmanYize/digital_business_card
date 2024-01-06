import profile_img from "../assets/profile-pic-aman.png";
function ProfileImg() {
  return (
    <div className="profile-box">
      <img className="profile-pic" src={profile_img} alt="profile" />
    </div>
  );
}
export default ProfileImg;
