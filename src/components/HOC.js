import React from 'react';

//just a normal function
//takes a component
const hoc = (WrappedComp) => {
  //return a React component
  const NewComp = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
      //makes  a token call to check if user is authenticated
      setLoggedIn(true);
      //setLoggedIn(false);
    }, []);

    //jsx
    return loggedIn ? <WrappedComp text='Logged In'/> : (<p>Not logged In</p>)
  }
  return NewComp;
}

export default hoc;