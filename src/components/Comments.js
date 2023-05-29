import React from 'react';

const Comments = (props) => {
  return (
    <p>Comment {props.text}</p>
  );
}

Comments.defaultProps = {
  text: 'Not Logged In'
}

export default Comments;