import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../styles/AuthStyles.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [NIC, setNIC] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', {
        name,
        email,
        password,
        NIC,
        age,
        mobile,
        address,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  console.log(process.env.REACT_APP_API);

  return (
    <Layout title="Register">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
            <div className="mb-3">
              <input
                type="text"
                value={NIC}
                onChange={(e) => setNIC(e.target.value)}
                className="form-control"
                id="exampleInputNIC1"
                placeholder="Enter Your NIC"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
                id="exampleInputAge1"
                placeholder="Enter Your Age"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="form-control"
                id="exampleInputMobile1"
                placeholder="Enter Your Mobile"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputAddress1"
                placeholder="Enter Your Address"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
