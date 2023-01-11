import React from "react";
import Preloader from "../../common/Preloader";
import style from "./Profile.module.css";
import baner from "/Users/novymac/Desktop/jsReact/new_app/src/components/assets/asd.jpeg";

function ProfileInfo(props) {
  if (!props.profile) {
    return <img className={style.baner} src={baner} />;
    // <Preloader />;
  }
  // debugger;
  return (
    <div>
      <img className={style.baner} src={baner} />
      <div>
        <img className={style.avatar} src={props.profile.photos.large} />

        <div className={style.fullName}>{props.profile.fullName} </div>
        <div>{props.profile.aboutMe} </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
