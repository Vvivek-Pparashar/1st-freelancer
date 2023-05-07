import React from "react";
import StepsComp from "../Steps/StepsComp";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CameraOutlined } from "@ant-design/icons";

const SixthPage = ({ inc, dec, data, side }) => {
  console.log(data);
  return (
    <div className="content">
      <div className="fp-m-c">
        <img src="../../../logo.png" alt="logo" />
      </div>
      <StepsComp current={4} />
      {side === 1 ? (
        <h3>Front of Your {data.document}</h3>
      ) : (
        <h3>Back of Your {data.document}</h3>
      )}
      <p>Place Your Document Into The Frame and take a clear photo</p>
      <img src={side === 1 ? data.docImgFront : data.docImgBack} alt="docimg" id="webcam" />
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

export default SixthPage;
