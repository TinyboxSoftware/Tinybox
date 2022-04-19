import { useEffect, useState } from "preact/hooks";

const ContactForm = () => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    setIsInit(true);
  }, []);

  return (
    <form method="POST" data-netlify="true">
      <div className="form-control">
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email </label>
        <input type="email" id="email" placeholder="Your email" required />
      </div>
      <div className="form-control">
        <label htmlFor="body">What do you want to work on? </label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="5"
          placeholder="a brief description of who you are and what you want to work together on"
        ></textarea>
      </div>
      <button disabled={!isInit}>
        {!isInit ? "..." : "Send Your Message"}
      </button>
    </form>
  );
};

export default ContactForm;
