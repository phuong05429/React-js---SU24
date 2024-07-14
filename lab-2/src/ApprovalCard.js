import React from "react";

function Card () {
    return (
        <div className="card text-center" style={{ width: '18rem', margin: '20px auto' }}>
        <div className="card-body">
          <h5 className="card-title">Warning!</h5>
          <p className="card-text">Are you sure you want to do this?</p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-outline-success">Approve</button>
            <button className="btn btn-outline-danger">Reject</button>
          </div>
        </div>
      </div>
    )
}
export default  Card; 