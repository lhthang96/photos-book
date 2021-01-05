import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { Button, Input } from 'antd';

export const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('lhthang96@gmail.com');
  const [password, setPassword] = useState('864859123');

  useEffect(() => {
    const user = firebase.auth().currentUser;

    if (user) {
      history.push('/');
    }
  }, []);

  const onSignIn = async (): Promise<void> => {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log('log result : ', result);
    } catch (error) {
      console.log('Login Page -> onSignIn -> error ', error);
    }
  };

  return (
    <div>
      <Input value={email} onChange={(event) => setEmail(event.target.value)} />
      <Input.Password
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="primary" onClick={onSignIn}>
        Sign In
      </Button>
    </div>
  );
};
