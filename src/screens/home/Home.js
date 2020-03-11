import React from "react";

import CategoryWrapper from "../../components/categoryWrapper/CategoryWrapper";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <CategoryWrapper />
        <CategoryWrapper />
      </div>
    );
  }
}

export default Home;
