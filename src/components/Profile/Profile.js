import React from "react";
import MyPostsContainer from "../MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;
