import { useEffect, useState } from "preact/hooks";

const Newsletter = () => {
  const [isInit, setIsInit] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  useEffect(() => {
    setIsInit(true);
  }, []);

  return (
    <section>
      <h2>Newsletter</h2>
      <p>
        if you want to keep up with what Tinybox is up to, signup to the
        newsletter.
      </p>
      <form method="POST" action="/api/newsletter" onSubmit={onSubmit}>
        <div class="form-control">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <button disabled={!isInit}>Signup</button>
      </form>
    </section>
  );
};

export default Newsletter;
