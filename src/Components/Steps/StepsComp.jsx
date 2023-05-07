import React from "react";
import { Steps } from "antd";
import './StepsComp.css'

const steps = [
  {
    title: "1",
    description: "First",
  },
  {
    title: "2",
    description: "First",
  },
  {
    title: "3",
    description: "First",
  },
  {
    title: "4",
    description: "First",
  },
  {
    title: "5",
    description: "First",
  },
  {
    title: "6",
    description: "First",
  },
];

const StepsComp = ({current}) => {
  const items = steps.map((item) => ({
    key: item.title,
  }));
  return <Steps id="stepscnt" current={current-1} items={items} />;
};

export default StepsComp;
