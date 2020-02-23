import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PrimarySearchAppBar from "./containers/header";
import PostForm from "./containers/post-form";
import Post from "./containers/post";
import PostList from "./containers/post-list";
import NotFound from "./components/not-found";

export default function App() {
  return (
    <Router>
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path="/">
          <PostList />
        </Route>
        <Route path="/post-list">
          <PostList />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/create-post">
          <PostForm />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
