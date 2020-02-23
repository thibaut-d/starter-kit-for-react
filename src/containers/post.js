import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostContent from "../components/post-content";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { readPost } from "../actions/index";

function Post(props) {
  let { id } = useParams();

  useEffect(() => {
    props.readPost(id);
  }, []);

  console.log(props.post);

  function renderPostContent() {
    const { post } = props;
    if (post) {
      return <PostContent post={props.post} />;
    }
  }

  return (
    <div>
      Post number : {id}
      {renderPostContent()}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    post: state.activePost
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ readPost }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
