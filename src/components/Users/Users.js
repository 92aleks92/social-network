import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./User.module.css";
import altFoto from "../assets/catHead.png";
import Preloader from "../../common/Preloader";
import { NavLink } from "react-router-dom";

function Users(props) {
  const [data, setUsers] = useState([]);
  useEffect(() => {
    props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`,
        { withCredentials: true }
      )
      .then((resp) => {
        props.toggleIsFetching(false);
        setUsers(resp.data.items);
      });
  }, []);

  let onPageChenged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`,
        { withCredentials: true }
      )
      .then((resp) => {
        props.toggleIsFetching(false);
        setUsers(resp.data.items);
      });
  };
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let peges = [];
  for (let i = 1; i <= pagesCount; i++) {
    peges.push(i);
  }
  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      <div className={styles.select}>
        {peges.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(event) => {
                onPageChenged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {data.map((u) => (
        <div key={u.id} className={styles.user}>
          <span>
            <div className={styles.user}>
              <NavLink to={"./../profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : altFoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div className={styles.btn}>
              {u.followed ? (
                <button
                  onClick={() => {
                    console.log(u);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,

                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "50ef0d14-e3b2-40e2-a308-69324740a48f",
                          },
                        }
                      )
                      .then((resp) => {
                        if (resp.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={styles.follow}
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "50ef0d14-e3b2-40e2-a308-69324740a48f",
                          },
                        }
                      )
                      .then((resp) => {
                        if (resp.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <div className={styles.disContainer}>
            <div className={styles.dis}>
              <div>Name: {u.name}</div>
              <div>Status: {u.status}</div>
            </div>
            <div className={styles.dis}>
              <div>Country: {"u.data"}</div>
              <div>City: {"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
