// Footer.js
import React from "react";

class Footer extends React.Component {
  render() {
    const message = "© 2023 PodNagringa. All rights reserved.";

    return (
      <footer>
        <h4>{message}</h4>
      </footer>
    );
  }
}

export default Footer;
