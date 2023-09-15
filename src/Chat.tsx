
import "./Chat.scss";
import { MessageBubble } from "./MessageBubble";
import { ChatNavBar } from "./ChatNavBar";
import { TextBox } from "./TextBox";
import React,  {useState, useEffect} from "react";

function Chat() {
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
    setMessageList([[smallMessage, true], [largeMessage, false], [largeMessage, true]]);
    // setMessageList([[smallMessage, true], [largeMessage, false]]);
  }, [smallMessage, largeMessage]);

  useEffect(() => {
    // Scroll to the bottom of the main display every time a new message is 
    // added to the message list
    const mainDisplay = document.querySelectorAll(".main-display")[0];
    mainDisplay.scrollTop = mainDisplay.scrollHeight;
  }, [messageList]);

  const sendMessage: React.MouseEventHandler<HTMLElement> = (e: React.MouseEvent<HTMLElement>) => {
    // Kinda jank, I know
    const userInput = document.querySelectorAll(".form-control")[0] as HTMLInputElement;
    const userInputText = userInput.value;

    if (userInputText === "") {
      return;
    }

    if (messageList !== undefined) {
      setMessageList([...messageList, [userInputText, true]]);
    }

    userInput.value = "";
  }

  // https://getbootstrap.com/docs/4.3/utilities/overflow/
  // https://bootsnipp.com/snippets/6XlB5
  return (
    <div className="outer">
      <div className="row" style={{ margin: 0 }}>
        <div className="col-sm-2 main-chat-nav">
          <ChatNavBar/>
        </div>
        <div className="col-sm-10">
          <div className="row main-display">
            {messageList?.map(([message, fromUser], index) => {
              return (
                <MessageBubble
                  key={`message-bubble-${index}`}
                  message={message}
                  fromUser={fromUser}
                />
              );
            })}
          </div>
          <div className="row main-input">
            <TextBox onClick={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
