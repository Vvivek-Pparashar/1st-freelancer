import React, { useEffect, useState } from "react";
import StepsComp from "../Steps/StepsComp";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Watch } from "react-loader-spinner";

const NinthPage = ({ data, inc, goBack }) => {
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checker = async () => {
      console.log("Start");
      const response = await fetch(
        "https://namit2111-id-verfiy.hf.space/run/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: [data.docImgFront, data.selfImg],
          }),
        }
      );

      try {
        const data2 = await response.json();
        console.log(data2.data[0]);
        setChecked(true);
        console.log("finish");
      } catch (error) {
        console.log(false);
        setChecked(false);
      }

      setLoading(false);
    };

    console.log(data.document);
    checker();
  }, []);

  return (
    <div className="content">
      <div className="fp-m-c">
        <img src="../../../logo.png" alt="logo" />
      </div>
      <StepsComp current={6} />
      <h3>Analyzing Your Verifications</h3>
      <p>Please wait while we set things up for you</p>

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
        {loading ? (
          <Watch
            height="80"
            width="80"
            radius="48"
            color="white"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : checked ? (
          <img src="../../../tick.png" style={{ width: "70px" }} alt="tick" />
        ) : (
          <img src="../../../cross.png" style={{ width: "70px" }} alt="tick" />
        )}
      </div>
      <p>Front of {data.document}</p>
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
        {loading ? (
          <Watch
            height="80"
            width="80"
            radius="48"
            color="white"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : checked ? (
          <img src="../../../tick.png" style={{ width: "70px" }} alt="tick" />
        ) : (
          <img src="../../../cross.png" style={{ width: "70px" }} alt="tick" />
        )}
      </div>

      <p>Face Photo</p>

      {checked ? (
        <div className="next_btn" onClick={inc}>
          Next
          <div className="next_btn-c">
            <ArrowRightOutlined />
          </div>
        </div>
      ) : (
        <div className="next_btn" onClick={goBack}>
          Go back
          <div className="next_btn-c">
            <ArrowRightOutlined />
          </div>
        </div>
      )}
    </div>
  );
};

export default NinthPage;
