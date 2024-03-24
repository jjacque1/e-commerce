import React from 'react'

const Books = () => {
  return (
    <div id="books__body">
        <main id="books__main">
            <section>
                <div className="books__comtainer">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title book__header--title">
                                All Books
                            </h2>
                            <select name="" id="filter">
                            <option value="" selected disabled>Sort</option>
                                <option value="LOw_TO_HIGH">Price, Low to High</option>
                                <option value="HIGH_TO_LOw">Price, High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Books