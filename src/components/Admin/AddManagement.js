import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming axios is imported
 
const AddManagement = () => {
  let navigate = useNavigate();
  const [management, setManagement] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
  });
 
  const { name, email, phone, designation } = management;
 
  const onInputChange = (e) => {
setManagement({ ...management, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async (e) => {
    e.preventDefault();
// await axios.post("http://localhost:8000/api/create/", management);
    navigate('/');
  };
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-4 mt-2 shadow" style={{ border: 'rounded solid 6px', backgroundColor: '#E4F1FF', borderRadius: '10px' }}>
          <h2 className="text-center m-4 fs-3" style={{ fontFamily: 'Apple Chancery', fontWeight: 'bold' }}>
            Add Management
          </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label ml-0" style={{ fontWeight: 'bold' }}>
                Name
              </label>
              <input type={'text'} className="form-control" placeholder="Enter name" name="name" value={name} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label ml-0" style={{ fontWeight: 'bold' }}>
                Email
              </label>
              <input type={'text'} className="form-control" placeholder="Enter email" name="email" value={email} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label ml-0" style={{ fontWeight: 'bold' }}>
                Phone No.
              </label>
              <input type={'text'} className="form-control" placeholder="Enter phone no." name="phone" value={phone} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label ml-0" style={{ fontWeight: 'bold' }}>
                Designation
              </label>
              <input type={'text'} className="form-control" placeholder="Enter designation" name="designation" value={designation} onChange={(e) => onInputChange(e)} />
            </div>
            <button type="submit" className="btn" style={{ fontWeight: 'bold', borderRadius: '10px', borderRadius: '5px', color: 'white', backgroundColor: 'hsl(244, 77%, 14%)' }}>
              Add Management
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default AddManagement;