import React, { useState } from "react";
import "./SecondPage.css";
import StepsComp from "../Steps/StepsComp";
import SelectCountry from "./SelectCountry";
import { ArrowRightOutlined } from "@ant-design/icons";

const SecondPage = ({ inc, data, setCountry }) => {
  return (
    <div className="content">
      <div className="fp-m-c">
        <img src="../../../logo.png" alt="logo"/>
      </div>
      <StepsComp current={1} />

      <p>Select the country of your card issuer</p>
      <SelectCountry setCountry={setCountry} data={data}/>

      <div className={`next_btn ${data.country ? "" : "non-active"}`} onClick={()=>(data.country !== "") && inc()}>
        Next
        <div className="next_btn-c">
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
