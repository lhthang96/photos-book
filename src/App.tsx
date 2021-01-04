import React, { useState } from "react";
import Firebase from "firebase";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async (): Promise<void> => {
    try {
      const result = await Firebase.auth().signInWithEmailAndPassword(
        username,
        password
      );
      console.log("log result : ", result);
    } catch (error) {
      console.log("log error: ", error);
    }
  };

  return (
    <div>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={onSignIn}>Sign in</button>
    </div>
  );
};

export default App;
