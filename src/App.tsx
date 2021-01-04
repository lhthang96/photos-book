import React, { ChangeEvent, useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async (): Promise<void> => {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(username, password);
      console.log("log result : ", result);
    } catch (error) {
      console.log("log error: ", error);
    }
  };

  const onUploadFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files ? event.target.files[0] : undefined;
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      async (event: ProgressEvent<FileReader>) => {
        const readFile = event.target?.result;
        if (!readFile) return;

        const storage = firebase.storage();
        const storageRef = storage.ref();
        const fileRef = storageRef.child("test.pdf");
        const uploadingFile = new File([readFile], "Test upload");

        const snapshot = await fileRef.put(uploadingFile);
        console.log("log snapshot : ", snapshot);
      }
    );

    reader.readAsArrayBuffer(file);
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
      <div>
        <input type="file" multiple={false} onChange={onUploadFile} />
        <button>Upload</button>
      </div>
    </div>
  );
};

export default App;
