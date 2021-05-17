export default function(state = null, action) {
  switch (action.type) {
    case "GET_MESSAGES":
      return action.payload;
    case "SEND_MESSAGE": {
      const newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    }
    default:
      return state;
  }
}
