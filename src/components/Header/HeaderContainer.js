import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((resp) => {
        if (resp.data.resultCode === 0) {
          let { id, email, login } = resp.data.data;
          props.setAuthUserData(id, email, login);
        }
      });
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
