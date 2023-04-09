import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from './../helpers/authHelper.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, NIC, age, mobile, address } = req.body;
    // validations
    if (!name) {
      return res.send({ message: 'Name is required' });
    }
    if (!email) {
      return res.send({ message: 'Email is required' });
    }
    if (!password) {
      return res.send({ message: 'password is required' });
    }
    if (!NIC) {
      return res.send({ message: 'NIC is required' });
    }
    if (!age) {
      return res.send({ message: 'Age is required' });
    }
    if (!mobile) {
      return res.send({ message: 'mobile number is required' });
    }
    if (!address) {
      return res.send({ message: 'Address is required' });
    }

    //check user
    const existingUser = await userModel.findOne({ email });
    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: 'Already registered, please login',
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      NIC,
      age,
      mobile,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in Registration',
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: 'Invalid email or password',
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'email is not registered',
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: 'invalid password',
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.status(200).send({
      success: true,
      message: 'logged in successfully',
      user: {
        name: user.name,
        email: user.email,
        NIC: user.NIC,
        age: user.age,
        mobile: user.mobile,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login',
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  try {
    res.send('Protected Routes');
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
