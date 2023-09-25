import { useState } from "react";

export default function SignUpForm({ token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      "https://fsa-jwt-practice.herokuapp.com/signup"
    );
    const result = await response.json();
    setToken(result.token);
  }

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        >
          Username: <input />
        </label>
        <label
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        >
          Password: <input />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
