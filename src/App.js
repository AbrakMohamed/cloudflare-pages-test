import React, { useState } from "react";
import {Turnstile} from "@marsidev/react-turnstile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);

  const handleVerify = (newToken) => {
    setToken(newToken);
    setVerified(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Cloudflare Turnstile CAPTCHA */}
        <div style={{ marginTop: "20px" }}>
          <h3>Complete CAPTCHA to Continue</h3>
          <Turnstile
            siteKey="0x4AAAAAAA-bq5_n5aKG6UCV" // 🔹 Replace with your Cloudflare Turnstile site key
            onSuccess={handleVerify}
          />
        </div>

        {/* Show verification message */}
        {verified ? (
          <p style={{ color: "lightgreen" }}>✅ CAPTCHA Verified!</p>
        ) : (
          <p style={{ color: "red" }}>❌ Please complete the CAPTCHA</p>
        )}

        {/* Button is disabled until CAPTCHA is verified */}
        <button disabled={!verified} style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}>
          Continue
        </button>
      </header>
    </div>
  );
}

export default App;
