import { useState } from "react";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSignup = (e) => {
    e.preventDefault();

    fetch("https://api-tv-shows-bp.web.app/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password}),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
        setUser(data);
      })
      .catch(alert);
  };

  return (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">
          e-mail
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="password">

          password
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        <input type="submit" value="Sign up" />
      </form>
    </>
  );
}
