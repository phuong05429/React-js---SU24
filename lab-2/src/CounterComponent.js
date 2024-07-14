import React, { useState } from "react";

function CounterComponent(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="text-left">
       <a  href="public/img/image.png" className="avatar">
       <img src={`${process.env.PUBLIC_URL}/img/image.png`} alt="Avatar" />    
        </a>
      <p className="text-danger">You Clicked {count} time</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default CounterComponent;
