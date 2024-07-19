import React, { useState, useEffect } from "react";

function GeolocationComponent() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const handleGeolocationSuccess = (position) => {
      setPosition(position);
    };

    const handleGeolocationError = (error) => {
      console.error("Lỗi khi lấy vị trí:", error);
    };

    navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError);
  }, []);

  return (
    <div className="container mt-4 mb-5">
    {position ? (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Vị trí hiện tại:</h5>
          <p className="card-text">Vĩ Độ: {position.coords.latitude}</p>
          <p className="card-text">Kinh Độ: {position.coords.longitude}</p>
        </div>
      </div>
    ) : (
      <div className="alert alert-info" role="alert">
        Đang lấy vị trí...
      </div>
    )}
  </div>
  );
}

export default GeolocationComponent;