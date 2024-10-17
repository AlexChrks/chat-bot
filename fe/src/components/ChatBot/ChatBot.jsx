import React, { useEffect, useState } from "react";
import styles from "./ChatBot.module.css";
import {
  exisitingSessionData,
  updatedSessionData,
  noSessionData,
  endedConversationData,
} from "../../mocks";
import Message from "../Message/Message";
import MessagesHistory from "../MessagesHistory/MessagesHistory";

const ChatBot = ({ orgId = "123" }) => {
  const [sessionData, setSessionData] = useState(null);

  const submitAnswer = (answer) => {
    const payload = {
      sessionId: sessionData.sessionId,
      selectedOption: answer,
    };

    // api POST request
    // update sessionData with response

    setSessionData(endedConversationData);
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    submitAnswer(value);
  };

  useEffect(() => {
    const getSessionData = async () => {
      // GET request to get sessionData
      setSessionData(updatedSessionData);
    };
    getSessionData();
  }, []);

  return (
    <>
      {sessionData && (
        <div className={styles.wrapper}>
          <div className={styles.chatHeader}>Chat bot conversation</div>

          <div className={styles.messagesWrapper}>
            <MessagesHistory answers={sessionData.answers} />

            {sessionData.currentQuestion && (
              <Message
                messageText={sessionData.currentQuestion.text}
                isQuestion={true}
                options={sessionData.currentQuestion.options}
                handleSelect={handleSelect}
              />
            )}

            {sessionData.message && <div>{sessionData.message}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
