import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    const navigate = useNavigate()
  
  const handleLogin = (e) => {
    e.preventDefault();

    fetch("https://api-tv-shows-bp.web.app/login", {
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
        navigate('/')
      })
      .catch(alert);
  };

  return (
    <>
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
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
        <input type="submit" value="Log in" />
      </form>
    </>
  );
}