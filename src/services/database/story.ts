import firebase from 'firebase/app';
import { DatabaseRef } from 'src/common/constants';
import { PostStoryPayload } from '../../common/interfaces';

export const dbPushStory = async (payload: PostStoryPayload): Promise<void> => {
  await firebase.database().ref(DatabaseRef.Story).push().set(payload);
};
