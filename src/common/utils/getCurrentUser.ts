import firebase from 'firebase/app';

export const getCurrentUser = (): firebase.User | null =>
  firebase.auth().currentUser;
