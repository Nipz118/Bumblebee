import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const CreateBrand = () => {
  return (
    <Layout title={'Dashboard - Create Brand'}>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Create Brand</h1>
        </div>
      </div>
    </Layout>
  );
};

export default CreateBrand;
