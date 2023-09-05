// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import "./App.scss";
import { MessageBubble } from "./MessageBubble";
import { TextBox } from "./TextBox";
import React,  {useState, useEffect} from "react";

function App() {
  const smallMessage = "Hello";
  const largeMessage = (
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                    "Praesent sed vehicula nisi, sed feugiat justo. Etiam a sem" +
                    "justo. Nam varius egestas ipsum, sed sodales ex sagittis" +
                    "quis. Suspendisse varius mi eu dapibus egestas. Vivamus" + 
                    "purus enim, tempus sit amet odio et, suscipit imperdiet sem." + 
                    "Aenean nisl orci, pharetra ut bibendum ut, faucibus eget" + 
                    "tortor. Pellentesque habitant morbi tristique senectus et" + 
                    "netus et malesuada fames ac turpis egestas. Praesent a nunc" + 
                    "id eros gravida consequat. Aenean nibh lorem, venenatis non" + 
                    "enim eu, imperdiet rutrum tellus. Nulla consectetur placerat" + 
                    "erat, a fermentum ex bibendum a. Suspendisse id iaculis" + 
                    "augue. Integer ante mi, pulvinar et lectus ornare, gravida" + 
                    "consectetur orci. Duis imperdiet elit eu dui suscipit" + 
                    "sodales. Quisque fringilla rhoncus elementum. Donec placerat" + 
                    "vel nulla vitae congue. Aenean faucibus neque tellus," + 
                    "commodo pharetra arcu elementum eget." 
  );
  const [messageList, setMessageList] = useState<Array<[string, boolean]>>()
  
  useEffect(() => {
    setMessageList([[smallMessage, true], [largeMessage, false]]);
  }, [smallMessage, largeMessage]);

  // https://getbootstrap.com/docs/4.3/utilities/overflow/
  // https://bootsnipp.com/snippets/6XlB5
  return (
    <>
      <div className="container-fluid outer">
        <div className="row justify-content-center h-100">
          <div className="h-100 d-flex flex-column">
            <div className="row justify-content-center flex-grow-1 main-display">
              <div className="text-white">
                {messageList?.map(([message, fromUser], index) => {
                  return (
                    <MessageBubble
                      key={index}
                      message={message}
                      fromUser={fromUser}
                    />
                  );
                })}
              </div>
            </div>
          <TextBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
