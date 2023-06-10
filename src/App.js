/*
  Instructions
    See the comment in List
*/

import * as React from "react";

class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.
    const {friends} = this.props

    return <ul>{
      friends.map((friend => (
        <li>{friend}</li>
      )))
      }</ul>;
  }
}

export default function App() {
  return <List friends={["Mikenzi", "Cash", "Steven", "Kimmy", "Doug"]} />;
}
