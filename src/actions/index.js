export const getMessages = (channel) => {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return {
        type: "GET_MESSAGES",
        payload: data.messages
      };
    });
};
