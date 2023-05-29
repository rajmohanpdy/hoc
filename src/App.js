import React from "react";
import "./styles.css";
import Comments from "./components/Comments";
import BlogPost from "./components/BlogPost";
import hoc from './components/HOC';

const NewComments = hoc(Comments);

export default function App() {
  return (
    <div className="App">
      <h1>Higher Order Component Example</h1>
      <NewComments />
      <BlogPost />
    </div>
  );
}
