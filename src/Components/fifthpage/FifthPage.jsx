import React, { useState } from "react";
import StepsComp from "../Steps/StepsComp";
import Webcam from "react-webcam";
import { CameraOutlined, RetweetOutlined } from "@ant-design/icons";
import "./FifthPage.css";
import { useEffect } from "react";
import Countdown from "react-countdown";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const FifthPage = ({ inc, data, setDocImg, side }) => {
  const webcamRef = React.useRef(null);

  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
  const [web, setWeb] = useState(false);
  const [value, setValue] = useState(false);

  const handleClick = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  let videoConstraints = {
    facingMode: facingMode,
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setDocImg(imageSrc, side);

    inc();
  }, [webcamRef]);

  const renderer = ({ total, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
        <span
          style={{
            color: "white",
            background: `linear-gradient(#005aaa 100%, #0b477c 100%)`,
            width: "50px",
            height: "50px",
            clipPath: "circle()",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {seconds}
        </span>
      );
    } else {
      // Render a finished state
      return "";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("vivek");
      setValue(true);
    }, 2000);
  });

  return (
    <>
      <div className="content">
        <div className="fp-m-c">
          <img src="../../../logo.png" alt="logo" />
        </div>
        <StepsComp current={4} />
        {side === 1 ? <h3>Front of Your {data.document}</h3> : <h3>Back of Your {data.document}</h3>}
        <p>Place Your Document Into The Frame and take a clear photo</p>
        <Webcam
          id="webcam"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          screenshotQuality={1}
          onLoad={() => console.log("first")}
        />

        {value === true ? (
          <>
            <Countdown
              date={Date.now() + 5000}
              renderer={renderer}
              onComplete={() => {
                capture();
              }}
            ></Countdown>
          </>
        ) : (
          <h6>Image will be captured automatically in 5 sec</h6>
        )}

        <div onClick={handleClick} className="fp-b">
          Switch camera2
          <div className="fp-b-c">
            <RetweetOutlined className="capture" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthPage;
