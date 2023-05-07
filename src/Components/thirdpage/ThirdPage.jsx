import React from "react";
import StepsComp from "../Steps/StepsComp";
import { Radio, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./ThirdPage.css";

const ThirdPage = ({ inc, data, setDocument }) => {
  const onChange = (e) => {
    setDocument(e.target.value);
  };

  return (
    <div className="content">
      <div className="fp-m-c">
        <img src="../../../logo.png" alt="logo" />
      </div>
      <StepsComp current={2} />
      <h3>Select A Document</h3>
      <p>Which document would you like to verify</p>
      <Radio.Group onChange={onChange} value={data.document} className="option-doc">
        <Space direction="vertical">
          <Radio value={"Passport"}>Passport</Radio>
          <Radio value={"Identity Card"}>Identity Card</Radio>
          <Radio value={"Resident Visa"}>Resident Visa</Radio>
          <Radio value={"Drivers License"}>Drivers License</Radio>
          <Radio value={"Proof Of Address"}>Proof Of Address</Radio>
          <Radio value={"Document"}>Others</Radio>
        </Space>
      </Radio.Group>

      <div
        className={`next_btn ${data.document ? "" : "non-active"}`}
        onClick={() => data.document !== "" && inc()}
      >
        Next
        <div className="next_btn-c">
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
