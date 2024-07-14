import React from 'react';

const ComponentDetail = (props) => {
  const avatarUrl = `https://ui-avatars.com/api/?name=${props.author}&background=random`;

  return (
    <div className="card" style={{ maxWidth: '400px', margin: '10px auto' }}>
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img src={avatarUrl} alt="avatar" className="rounded-circle me-3" />
          <div>
            <strong>{props.author}</strong>
            <span className="text-muted ms-2">{props.timeAgo}</span>
          </div>
        </div>
        <p className="card-text text-start">{props.content}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-success">Approve</button>
          <button className="btn btn-outline-danger">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
