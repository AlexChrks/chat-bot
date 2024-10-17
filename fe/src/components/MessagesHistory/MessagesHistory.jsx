import React from "react";
import Message from "../Message/Message";
import styles from "./MessagesHistory.module.css";
const MessagesHistory = ({ answers }) => (
  <>
    {answers.map((answer, idx) => {
      return (
        <div className={styles.history} key={idx}>
          <Message
            key={`${answer.question} - ${idx}`}
            messageText={answer.question}
            isQuestion={true}
          />
          <Message
            key={`${answer.selectedOption} - ${idx}`}
            messageText={answer.selectedOption}
            isQuestion={false}
          />
        </div>
      );
    })}
  </>
);

export default MessagesHistory;
