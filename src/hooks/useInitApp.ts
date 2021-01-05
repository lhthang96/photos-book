import { useEffect } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

export const useInitApp = (): void => {
  const history = useHistory();

  const onCheckUserSignedIn = (): void => {
    if (!history) return;

    const user = firebase.auth().currentUser;

    if (!user) {
      history.push('/login');
    }
  };

  useEffect(() => {
    onCheckUserSignedIn();
  }, [history]);
};
