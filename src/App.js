import React, { useState } from "react";
import FirstPage from "./Components/firstpage/FirstPage";
import SecondPage from "./Components/secondpage/SecondPage";
import ThirdPage from "./Components/thirdpage/ThirdPage";
import FourthPage from "./Components/fourthpage/FourthPage";
import FifthPage from "./Components/fifthpage/FifthPage";
import SixthPage from "./Components/SixthPage/SixthPage";
import SeventhPage from "./Components/SeventhPage/SeventhPage";
import EightPage from "./Components/EightPage/EightPage";
import NinthPage from "./Components/NinthPage/NinthPage";
import FinalPage from "./Components/FinalPage/FinalPage";
import "./App.css";

const App = () => {
  const [No, setNO] = useState(0);

  const [data, setData] = useState({
    country: "",
    document: "",
    docImgFront: "",
    docImgBack: "",
    selfImg: "",
  });

  const inc = () => {
    setNO(No + 1);
  };

  const dec = () => {
    setNO(No - 1);
  };

  const goBack = () =>{
    setNO(4);
  }

  const setDocImg = (content, side) => {
    if (side === 1) {
      setData({ ...data, docImgFront: content });
    } else {
      setData({ ...data, docImgBack: content });
    }
  };

  const setSelfImg = (content) => {
    setData({ ...data, selfImg: content });
  };

  const setCountry = (content) => {
    setData({ ...data, country: content });
  };

  const setDocument = (content) => {
    setData({ ...data, document: content });
  };
  return (
    <>
      <div className="m">
        {No === 0 ? <FirstPage inc={inc} data={data} /> : <></>}
        {No === 1 ? (
          <SecondPage inc={inc} data={data} setCountry={setCountry} />
        ) : (
          <></>
        )}
        {No === 2 ? (
          <ThirdPage inc={inc} data={data} setDocument={setDocument} />
        ) : (
          <></>
        )}
        {No === 3 ? <FourthPage inc={inc} data={data} /> : <></>}
        {No === 4 ? (
          <FifthPage inc={inc} data={data} setDocImg={setDocImg} side={1} />
        ) : (
          <></>
        )}

        {No === 5 ? <SixthPage inc={inc} data={data} dec={dec} side={1}/> : <></>}

        {No === 6 ? (
          data.document === "Drivers License" ? (
            <FifthPage inc={inc} data={data} setDocImg={setDocImg} side={2} />
          ) : (
            inc()
          )
        ) : (
          <></>
        )}

        {No === 7 ? (
          data.document === "Drivers License" ? (
            <SixthPage inc={inc} data={data} dec={dec} side = {2}/>
          ) : (
            inc()
          )
        ) : (
          <></>
        )}

        {No === 8 ? (
          <SeventhPage inc={inc} data={data} setSelfImg={setSelfImg} />
        ) : (
          <></>
        )}
        {No === 9 ? <EightPage inc={inc} data={data} dec={dec} /> : <></>}
        {No === 10 ? <NinthPage inc={inc} data={data} goBack={goBack}/> : <></>}
        {No === 11 ? <FinalPage inc={inc} data={data} /> : <></>}
      </div>
    </>
  );
};

export default App;
