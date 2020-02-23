import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionsCreators, bindActionCreators } from "redux";
import { readAllPost } from "../actions/index";
import PostListItem from "../components/post-list-item";

function PostList(props) {
  useEffect(() => {
    props.readAllPost();
  }, []);

  function renderPosts() {
    const { posts } = props;
    if (posts) {
      return posts.map(post => {
        return <PostListItem key={posts.id} post={post} />;
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
  ...bindActionCreators({ readAllPost }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
