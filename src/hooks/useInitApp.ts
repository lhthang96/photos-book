import { useEffect } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

export const useInitApp = (): void => {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push('/login');
      }
    });
  }, []);
};
