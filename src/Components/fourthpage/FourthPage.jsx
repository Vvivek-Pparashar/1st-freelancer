import React from "react";
import StepsComp from "../Steps/StepsComp";
import { ScanOutlined } from "@ant-design/icons";
import './FourthPage.css'

const FourthPage = ({ inc, data }) => {
  return (
    <div className="content">
      <div className="fp-m-c">
        <img src="../../../logo.png" alt="logo" />
      </div>
      <StepsComp current={3} />

      <h3>Confirm Documentation type</h3>
      <p>Please Have Your {data.document} ready to verify</p>
      <div
      className="dummy-webcam"
        // style={{ width: "400px", height: "200px", background: "#E8E8E8" }}
      ></div>
      <p style={{ color: "#005AAA99" }}>
        It'll take further steps and a selfie will be last and process will
        finish
      </p>
      <ScanOutlined style={{ fontSize: "100px", color: "#005AAA" }} onClick={inc}/>
      <p
        onClick={inc}
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          color: "#005AAA",
        }}
      >
        Scan Here
      </p>
    </div>
  );
};

export default FourthPage;
