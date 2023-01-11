import React from "react";
import p from "./Post.module.css";
import ava from "/Users/novymac/Desktop/jsReact/new_app/src/components/assets/ava.png";

function Post(props) {
  return (
    <div>
      <div className={p.item}>
        <img src={ava}></img>
        {props.message}
        <div>
          <span>Like: {props.likeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
