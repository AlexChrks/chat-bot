export const noSessionData = {
  sessionId: "str",
  currentQuestion: {
    text: "Hi",
    options: ["Hello", "Leave me alone"],
  },
  answers: [], // empty history for a new session
};

export const exisitingSessionData = {
  sessionId: "string",
  currentQuestion: {
    text: "How are you?",
    options: ["Fine", "Bad"],
  },
  answers: [{ question: "Hi", selectedOption: "Hello" }],
};

export const updatedSessionData = {
  sessionId: "string",
  currentQuestion: {
    text: "What are you going to do?",
    options: ["Walk", "Gym"],
  },
  answers: [
    { question: "Hi", selectedOption: "Hello" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "How are you?", selectedOption: "Fine" },
  ],
};

export const endedConversationData = {
  message: "Conversation completed",
  answers: [
    { question: "Hi", selectedOption: "Hello" },
    { question: "How are you?", selectedOption: "Fine" },
    { question: "What are you going to do?", selectedOption: "Gym" },
  ], // full history of the conversation
};
