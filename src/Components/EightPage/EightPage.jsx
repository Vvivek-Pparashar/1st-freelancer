import React from "react";
import StepsComp from "../Steps/StepsComp";
import { ArrowRightOutlined, CameraOutlined } from "@ant-design/icons";

const EightPage = ({ inc, data, dec }) => {
  return (
    <div className="content">
      <div className="fp-m-c">
        <img src="../../../logo.png" alt="logo" />
      </div>
      <StepsComp current={5} />
      <h3>Get Ready For Video Selfie </h3>
      <img
        src={data.selfImg}
        alt="selfImg"
        id="webcam"
        style={{ clipPath: "circle()" }}
      />
      <div onClick={dec} className="fp-b">
        Re-Take
        <div className="fp-b-c">
          <CameraOutlined className="capture" />
        </div>
      </div>

      <div className="next_btn" onClick={inc}>
        Next
        <div className="next_btn-c">
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default EightPage;
