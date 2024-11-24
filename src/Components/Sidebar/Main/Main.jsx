import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../../assets/asset";
import { Context } from "../../../Context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const nLmode = () => {
    if (mode.color == "black") {
      setMode({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
    }
  };
  return (
    <>
      <div className="main" style={mode}>
        <div className="nav">
          <p>Gemini</p>
          <div
            className={`image2 ${mode.color === "white" ? "dark-mode" : ""}`}
            onClick={nLmode}
          >
            <img
              src={mode.color === "white" ? assets.sun_icon : assets.moon_icon}
            />
          </div>

          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Developer.</span>
                </p>
                <p>How can I help you Today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>
                    Suggest beautiful nature to see on an upcoming road trip
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>Briefly summarize this concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>BrainStrom team bonding activities for our work retreat</p>
                  <img src={assets.messenger_icon} alt="" />
                </div>
                <div className="card">
                  <p>Improve the readibility of following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <>
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  </>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input ? (
                  <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display accurate info, including about people, so
              double-check it responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
