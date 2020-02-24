import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { readAllPost, deletePost } from "../actions/index";
import PostListItem from "../components/post-list-item";

function PostList(props) {
  useEffect(() => {
    props.readAllPost();
  }, []);

  // The callback call deletePost, which is a Redux action
  function deletePostCallBack(post) {
    props.deletePost(post.id);
  }

  function renderPosts() {
    const { posts } = props;
    if (posts) {
      return posts.map(post => {
        return (
          <PostListItem
            key={posts.id}
            post={post}
            // This is a callback, to make the kid able to call a function in the parent.
            // Doc : https://reactjs.org/docs/lifting-state-up.html
            deletePostCallBack={post => deletePostCallBack(post)}
          />
        );
      });
    }
  }

  return (
    <div>
      <h1>Liste des posts</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderPosts()}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ readAllPost, deletePost }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
