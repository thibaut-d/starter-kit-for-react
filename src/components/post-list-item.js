import React from "react";
import { Link } from "react-router-dom";

export default function PostListItem(props) {
  const { post } = props;
  return (
    <tr>
      <td>
        <Link to={`post/${post.id}`}>{post.title}</Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deletePost(post)}>
          Delete
        </button>
      </td>
    </tr>
  );

  function deletePost(post) {
    props.deletePostCallBack(post);
  }
}
