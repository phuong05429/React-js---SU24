import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState([]);

    const onSubmit = formData => {
        axios.post('https://knowledgehub.demopolyct.online/api/unit', formData)
            .then(res => console.log('Post response:', res.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get('https://knowledgehub.demopolyct.online/api/unit')
            .then(res => {
                console.log('API response:', res.data);
                if (res.data && Array.isArray(res.data.data)) {
                    setData(res.data.data);
                } else {
                    console.error('Unexpected API response structure:', res.data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        name="name"
                        {...register('name', { required: true })}
                        className="form-control"
                    />
                    {errors.name && <span className="text-danger">Không được để trống</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        name="address"
                        {...register('address', { required: true })}
                        className="form-control"
                    />
                    {errors.address && <span className="text-danger">Không được để trống</span>}
                </div>
                <div>
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        {...register('description', { required: true })}
                        className="form-control"
                    />
                    {errors.description && <span className="text-danger">Không được để trống</span>}
                </div>
                <div className='mt-3'>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>

            <div className="mt-5">
                <h2>Bảng Dữ Liệu</h2>
                {Array.isArray(data) && data.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </>
    );
};

export default SignupForm;
