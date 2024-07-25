import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { postUnit } from "../actions/unitActions";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const UnitAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const unitState = useSelector((state) => state.unit);


    const onSubmit = (data) => {
        const currentTime = new Date().toISOString();
        data.created_at = currentTime;
        data.updated_at = currentTime;
        dispatch(postUnit(data));
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
        <div className="container mt-5">
            <h2 className="mb-4">Add User </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-outline-dark  ">
            Back
          </Link>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        id="name"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                        <div className="invalid-feedback">{errors.name.message}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address:
                    </label>
                    <input
                        id="address"
                        className={`form-control ${errors.address ? "is-invalid" : ""}`}
                        {...register("address", { required: "Address is required" })}
                    />
                    {errors.address && (
                        <div className="invalid-feedback">{errors.address.message}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        className={`form-control ${errors.description ? "is-invalid" : ""}`}
                        {...register("description", { required: "Description is required" })}
                    />
                    {errors.description && (
                        <div className="invalid-feedback">{errors.description.message}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
              
            </form>
        </div>
    );
};

export default UnitAdd;
