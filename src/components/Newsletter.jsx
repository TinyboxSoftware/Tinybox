import { useEffect, useState } from 'preact/hooks';

const Newsletter = () => {
  const [isInit, setIsInit] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('submitted')
  }

  useEffect(() => {
    setIsInit(true);
  }, [])

  return (
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
  );
};

export default Newsletter;