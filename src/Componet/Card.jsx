import React from 'react'

const Card = () => {
    return (
        <div>
            <h1>hello</h1>
            <div className="card">
                <img src="https://i.pinimg.com/originals/f0/b6/15/f0b615f78dd809d68ec389f4bc8d94bb.jpg" alt="Card Image" />
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some quick example text to build on the card.</p>
                    <a className="btn btn-primary">Read More</a>
                </div>
            </div>
            <h1>hello</h1>
            <div className="card">
                <img src="https://i.pinimg.com/originals/f0/b6/15/f0b615f78dd809d68ec389f4bc8d94bb.jpg" alt="Card Image" />
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some quick example text to build on the card.</p>
                    <a className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card