import React from "react";

function TitleComponent({ title }) {
  return (
    <>
      <p className="about-title">{title}</p>
      <div className="underline"></div>
    </>
  );
}

export default TitleComponent;
