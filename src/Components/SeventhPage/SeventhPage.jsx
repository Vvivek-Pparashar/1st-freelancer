import React, { useEffect, useState } from "react";
import StepsComp from "../Steps/StepsComp";
import Webcam from "react-webcam";
import { CameraOutlined, RetweetOutlined } from "@ant-design/icons";
import Countdown from "react-countdown";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

const SeventhPage = ({ inc, data, setSelfImg }) => {
  const webcamRef = React.useRef(null);
  const [value, setValue] = useState(false);

  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);

  const handleClick = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSelfImg(imageSrc);

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
        <StepsComp current={5} />
        <h3>Get Ready For Video Selfie </h3>

        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored={true}
          style={{
            clipPath: "circle()",
          }}
          id="webcam"
          videoConstraints={{
            ...videoConstraints,
            facingMode,
          }}
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
          Switch camera
          <div className="fp-b-c">
            <RetweetOutlined className="capture" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhPage;
