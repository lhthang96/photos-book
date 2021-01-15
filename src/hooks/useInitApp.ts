import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { AppPaths } from 'src/common/constants';

export const useInitApp = (): void => {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push(AppPaths.Login);
      }
    });
  }, []);
};
