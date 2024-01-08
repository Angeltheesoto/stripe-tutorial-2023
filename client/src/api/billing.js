import axios from "axios";
var server_url = process.env.REACT_APP_SERVER_URL;

export const createCheckout = async (userCredentials) => {
  let res = await axios.post(
    `${server_url}billing/create-checkout-session`,
    userCredentials
  );

  if (res) {
    console.log("response", res);
    const { url, sessionId } = res.data;
    return { url, sessionId };
  } else {
    return `Could not create checkout session: ${res}`;
  }
};
