import React from 'react';
import Layout from './../components/Layout/Layout';

const Contact = () => {
  return (
    <Layout title="Contact Us">
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query or info about Bumblebee, feel free to contact us anytime..
            We are available 24x7...
          </p>
          <p className="mt-3">Email : www.contact@bumblebee.com</p>
          <p className="mt-3">Mobile : 9477 3395507</p>
          <p className="mt-3">Support : 9411 2255225 (toll free)</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
