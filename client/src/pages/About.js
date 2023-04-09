import React from 'react';
import Layout from './../components/Layout/Layout';

const About = () => {
  return (
    <Layout title="About">
      <div className="row aboutus">
        <div className="col-md-6">
          <img src="/images/about.png" alt="about" style={{ width: '100%' }} />
        </div>
        <div className="col-md-4">
          <p className="text-jestify mt-2">
            Bumblebee is a Buy Now Pay Later payment platform incubated under NX
            Brothers and was founded in Sri Lanka in 2023. We are passionate
            about evolving the merchant and consumer shopping experience by
            providing our customers with an easy, interest-free payment plan.
            Bumblebee will be completely free for customers who pay on time,
            helping people spend responsibly without incurring interest, fees,
            or extended debt. Bumblebee empowers customers to access the things
            they want and need, while still allowing them to maintain financial
            wellness and control, by splitting payments in three, for both
            online and in-store purchases.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
