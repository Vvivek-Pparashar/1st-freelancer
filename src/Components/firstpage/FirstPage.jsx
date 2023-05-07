import React from "react";
import "./FirstPage.css";
import {ArrowRightOutlined} from '@ant-design/icons';

const FirstPage = ({ inc }) => {
  return (
    <>
      <div className="a-m">
        <div className="fp-m-c">
          <img src="../../../logo.png" alt="logo" />
        </div>

        <p>Identity Verification</p>

        <div className="fp-b" onClick={inc}>
          Verify
          <div className="fp-b-c">
          <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
