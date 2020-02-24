import { AT_POSTS } from "../actions/action-types";

export default function reducerPosts(state = [], action) {
  // action.type and action.payload is dispatched by an action function from actions/index.js
  switch (action.type) {
    case AT_POSTS.READ_ALL:
      return action.payload;
    case AT_POSTS.DELETE:
      return state.filter(post => {
        if (post.id == action.payload) {
          // in a filter, returning false will NOT return the original content and thus supress it from the state
          return false;
        } else {
          // in a filter, returning true will return the original content and thus keep it in the state
          return true;
        }
      });
    default:
      return state;
  }
}
