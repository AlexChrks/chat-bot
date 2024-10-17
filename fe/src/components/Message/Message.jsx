import React from "react";
import styles from "./Message.module.css";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Message = ({ messageText, options, isQuestion, handleSelect }) => {
  return (
    <div
      className={
        isQuestion ? styles.messageWrapperQuestion : styles.messageWrapperAnswer
      }
    >
      <div className={isQuestion ? styles.question : styles.answer}>
        <p className={styles.messageText}>{messageText}</p>

        {options && (
          <div className={styles.optionsWrapper}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {options.length > 0 &&
                  options.map((option) => (
                    <FormControlLabel
                      key={option}
                      onChange={handleSelect}
                      value={option}
                      control={<Radio />}
                      label={option}
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                  ))}
              </RadioGroup>
            </FormControl>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
