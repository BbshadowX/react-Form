import { useState } from "react";
import SignUpForm from "./componets/SignUpForm";
import Authenticate from "./componets/Authenitcate";
import "./App.css";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setTok={setToken} />
      <Authenticate token={token} setTok={setToken} />
    </>
  );
}
