import firebase from 'firebase/app';
import { DatabaseRef } from 'src/common/constants';
import { PostStoryPayload } from '../../common/interfaces';

export const dbPushStory = async (
  payload: PostStoryPayload
): Promise<string | undefined> => {
  const storyKey = firebase.database().ref(DatabaseRef.Story).push().key;
  if (!storyKey) return undefined;

  await firebase.database().ref(DatabaseRef.Story).child(storyKey).set(payload);

  return storyKey;
};
