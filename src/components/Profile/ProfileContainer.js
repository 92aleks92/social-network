import Profile from "./Profile";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

function ProfileContainer(props) {
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((resp) => {
        props.setUsersProfile(resp.data);
      });
  }, []);

  return <Profile {...props} profile={props.profile} />;
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);
