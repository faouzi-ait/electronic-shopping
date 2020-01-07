import React from "react";
import { FaDolly, FaCircleNotch, FaDollarSign } from "react-icons/fa";

const ServiceComponent = ({ styleProp }) => {
  return (
    <>
      <div className={styleProp}>
        <div className="service-fa-icon">
          <FaDolly className="service-icon" />
        </div>
        <div className="service-title">
          <p className="title">Free Shipping</p>
        </div>
        <div className="title-desc">
          Lorem, ipsum dolor sit amet consecteur adipisicing alit. Est,
          voluptate!
        </div>
      </div>
      <div className={styleProp}>
        <div className="service-fa-icon">
          <FaCircleNotch className="service-icon" />
        </div>
        <div className="service-title">
          <p className="title">Free Return after 90 days</p>
        </div>
        <div className="title-desc">
          Lorem, ipsum dolor sit amet consecteur adipisicing alit. Est,
          voluptate!
        </div>
      </div>
      <div className={styleProp}>
        <div className="service-fa-icon">
          <FaDollarSign className="service-icon" />
        </div>
        <div className="service-title">
          <p className="title">Secured Payment</p>
        </div>
        <div className="title-desc">
          Lorem, ipsum dolor sit amet consecteur adipisicing alit. Est,
          voluptate!
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
