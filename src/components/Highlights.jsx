import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const Highlights = () => {
  return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="sectio__title">
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <div className="highlight">
                        <FontAwesomeIcon icon="bolt"/>
                    </div>
                    <h3 className="highlight__subtitle">
                        Easy and Quick
                    </h3>
                    <p className="highlight__para">
                        Get access to the book you purchased online instantly.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights