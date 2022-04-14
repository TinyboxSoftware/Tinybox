import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async (event, context) => {
  try {
    const {
      payload: { email },
    } = JSON.parse(event.body);
    const buttondownUrl = "https://api.buttondown.email/v1/subscribers";

    const buttondownRes = await fetch(buttondownUrl, {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        tags: ["tinybox-website"],
      }),
    });

    if (buttondownRes.status === 201) {
      return {
        statusCode: 201,
        message: "You're all signed up! check your inbox.",
      };
    } else {
      console.log(await buttondownRes.json());
      return {
        statusCode: 400,
        error: "You're already subscribed, or your email is invalid.",
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      error: "something went wrong when signing you up... try again?",
    };
  }
};

export { handler };
