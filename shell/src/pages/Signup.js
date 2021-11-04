import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const auth = getAuth();

  return (
    <>
      <h1>Sign up</h1>

      <input
        type="text"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />

      <button
        onClick={() => {
          createUserWithEmailAndPassword(auth, email, password)
            .then(() => history.push("/"))
            .catch((error) => alert(error));
        }}
      >
        sign up
      </button>
    </>
  );
};
