import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-brand"
            className="list-group-item list-group-item-action"
          >
            Create Brand
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
          <NavLink
            to="/dashboard/admin/loan-details"
            className="list-group-item list-group-item-action"
          >
            Loan Details
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
