import React from "react";
import m from "./MyPosts.module.css";
import Post from "./Profile/MyPost/Post";

function MyPosts(props) {
  // debugger;
  let postsElem = props.posts.map((post) => (
    <Post message={post.message} key={post.id} likeCount={post.likeCount} />
  ));

  let newPostEl = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.updateNewPostCreator(text);
  };

  return (
    <div>
      <div className={m.myPosts}>
        <h3>My post</h3>
      </div>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostEl}
            value={props.newPostText}
          />
        </div>
        <div className={m.btn}>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={m.post}>{postsElem}</div>
    </div>
  );
}

export default MyPosts;
