import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnits, patchUnit } from "../actions/unitActions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const UnitEdit = () => {
  const { id } = useParams(); // Get the ID from the URL
  const dispatch = useDispatch();
  const unitState = useSelector((state) => state.unit);

  const [unit, setUnit] = useState({
    name: '',
    address: '',
    description: ''
  });

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);

  useEffect(() => {
    if (unitState.units.length) {
      const foundUnit = unitState.units.find((u) => u.id === parseInt(id));
      if (foundUnit) {
        setUnit(foundUnit);
      }
    }
  }, [unitState.units, id]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUnit((prevUnit) => ({
      ...prevUnit,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(patchUnit(id, unit));
  };

  if (unitState.loading) {
    return <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>;
  }
  if (unitState.error) {
    return <p>Error: {unitState.error}</p>;
  }
  if (!unit) {
    return <p>Unit not found</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Unit</h2>
      <Link to="/" className="btn btn-outline-dark  ">
            Back
          </Link>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            id="name"
            className="form-control"
            value={unit.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            id="address"
            className="form-control"
            value={unit.address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            className="form-control"
            value={unit.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UnitEdit;
