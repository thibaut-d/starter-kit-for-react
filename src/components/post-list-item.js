import React from "react";

export default function PostListItem(props) {
  const { post } = props;
  return (
    <tr>
      <td>{post.title}</td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}
