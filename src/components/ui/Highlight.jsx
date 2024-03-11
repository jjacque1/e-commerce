import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Highlight = () => {
  return (
    <div className="highight">
      <div className="highlight">
        <FontAwesomeIcon icon="bolt" />
      </div>
      <h3 className="highlight__subtitle">Easy and Quick</h3>
      <p className="highlight__para">
        Get access to the book you purchased online instantly.
      </p>
    </div>
  );
};

export default Highlight;
