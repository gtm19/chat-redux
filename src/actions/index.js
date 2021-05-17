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

export const sendMessage = (channel, author, content) => {
  const body = { author, content };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then((data) => {
      return {
        type: "SEND_MESSAGE",
        payload: data
      };
    });
};
