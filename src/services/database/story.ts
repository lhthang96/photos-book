import firebase from 'firebase/app';
import { DatabaseRef } from 'src/common/constants';
import {
  PostBookContentPayload,
  PostStoryPayload,
  Story
} from '../../common/interfaces';

export const dbPostStory = async (
  storyPayload: PostStoryPayload,
  bookContentPayload: PostBookContentPayload
): Promise<void> => {
  const storyKey = firebase.database().ref(DatabaseRef.Story).push().key;
  const bookContentKey = firebase.database().ref(DatabaseRef.BookContent).push()
    .key;

  if (!storyKey || !bookContentKey) return undefined;

  await firebase
    .database()
    .ref(DatabaseRef.Story)
    .child(storyKey)
    .set({ bookContentId: bookContentKey, ...storyPayload });

  await firebase
    .database()
    .ref(DatabaseRef.BookContent)
    .child(bookContentKey)
    .set({ storyId: storyKey, ...bookContentPayload });
};

export const dbDeleteStory = async (story: Story): Promise<void> => {
  const { id, bookContentId } = story;

  await firebase
    .database()
    .ref(DatabaseRef.BookContent)
    .child(bookContentId)
    .remove();

  await firebase.database().ref(DatabaseRef.Story).child(id).remove();
};
