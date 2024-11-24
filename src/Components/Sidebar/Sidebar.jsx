import React, { useContext } from "react";
import "./Sidebar.css";
import { useState } from "react";
import { assets } from "../../assets/asset";
import { Context } from "../../Context/Context";
const Sidebar = () => {
  const [expand, setExpand] = useState(false);
  const {onSent, previousPrompt, setRecentPrompt, newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img
            onClick={() => setExpand((prev) => !prev)}
            className="menu"
            src={assets.menu_icon}
            alt=""
          />
          <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {expand ? <p>New Chat</p> : null}
          </div>
          {expand ? 
            <div className="recent">
              <p className="recent-title"> Recent </p>
              {previousPrompt.map((item,index)=>{
                return(
                        <div onClick={()=>loadPrompt(item)} className="recent-entry" key={index}>
                          <img src={assets.messenger_icon} alt="" />
                          <p>{item.slice(0,18)}...</p>
                        </div>
                )
              })}
            </div>
           : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {expand ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {expand ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {expand ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
