import React from "react";

const FinalPage = () => {
  return (
    <div className="content final">
      <div className="fp-m-c">
        <img src="../../../logo.png" alt="logo" />
      </div>

      <h3>identification succeeded</h3>
      <div
        style={{
          width: "150px",
          height: "150px",
          clipPath: "circle()",
          background: "linear-gradient(#005aaa 100%, #0b477c 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="../../../tick.png" style={{ width: "70px" }} alt="tick" />
      </div>
    </div>
  );
};

export default FinalPage;
