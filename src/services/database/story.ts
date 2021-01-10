import firebase from 'firebase/app';
import { PostStoryPayload } from '../../common/interfaces';

export const dbPushStory = async (payload: PostStoryPayload): Promise<void> => {
  await firebase.database().ref('/story').push().set(payload);
};
