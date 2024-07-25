import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnits, deleteUnit } from "../actions/unitActions";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const UnitList = () => {
  const dispatch = useDispatch();
  const unitState = useSelector((state) => state.unit);
  const [showModal, setShowModal] = useState(false);
  const [unitToDelete, setUnitToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);

  const handleDeleteClick = (id) => {
    setUnitToDelete(id);
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    if (unitToDelete) {
      dispatch(deleteUnit(unitToDelete));
      setUnitToDelete(null); // Clear the ID after deletion
    }
    setShowModal(false);
  };

  const handleDeleteCancel = () => {
    setShowModal(false);
    setUnitToDelete(null); // Clear the ID on cancel
  };

  if (unitState.loading) {
    return<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>;
  }
  if (unitState.error) {
    return <p>Error: {unitState.error}</p>;
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {unitState.units.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.description}</td>
              <td className="d-flex">
                <Link to={`/edit/${item.id}`} className="btn btn-outline-primary me-2">
                  Edit
                </Link>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="5">
              <Link to="/add" className="btn btn-success">
                Add +
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UnitList;
