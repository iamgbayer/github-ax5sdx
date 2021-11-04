import React from "react";
import { useAuth } from "@poc/common";

const App = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <h1>Members</h1>
    </div>
  );
};

export default App;
