import React from "react";

export const ErrorAlert = type => {
  return (
    <div className="errorBorder">
      <div className="showError">
        <span>{type}</span>
      </div>
    </div>
  );
};

export const ConfirmationAlert = type => {
  return (
    <div className="confirmationBorder">
      <div className="showConfirmation">
        <span>{type}</span>
      </div>
    </div>
  );
};

export const findProductById = (array, id) => {
  return array.find(item => item.fields.id === id);
};

export const getFeaturedProducts = array => {
  return array.filter(item => item.fields.featured === true);
};

export const getProductsBrand = array => {
  return array.map(item => item.fields.company);
};

export const getMaxPriceValue = array => {
  const max = array
    .map(product => product.fields.price)
    .reduce((a, b) => {
      return Math.max(a, b);
    });
  return max;
};

export const getMinPriceValue = array => {
  const min = array
    .map(product => product.fields.price)
    .reduce((a, b) => {
      return Math.min(a, b);
    });
  return min;
};
