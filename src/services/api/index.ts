import firebase from 'firebase/app';
import { IPostDiaryData } from '../../common/interfaces';

export const postStory = async (data: IPostDiaryData): Promise<void> => {
  await firebase.database().ref('/diary').push().set(data);
};
