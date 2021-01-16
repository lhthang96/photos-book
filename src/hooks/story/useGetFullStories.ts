import { useEffect, useMemo, useState } from 'react';
import firebase from 'firebase/app';
import { BookContent, FullStory, Story } from 'src/common/interfaces/data';
import { DatabaseRef } from 'src/common/constants';
import { convertDatabaseJsonToArray } from 'src/common/utils';
import { DBData } from 'src/common/interfaces/firebase';

type UseGetStoriesData = {
  stories: FullStory[];
  loading: boolean;
};

export const useGetFullStories = (): UseGetStoriesData => {
  const [stories, setStories] = useState<Story[]>([]);
  const [bookContents, setBookContents] = useState<BookContent[]>([]);
  const [storiesLoading, setStoriesLoading] = useState(true);
  const [bookContentsLoading, setBookContentsLoading] = useState(true);

  useEffect(() => {
    firebase
      .database()
      .ref(DatabaseRef.BookContent)
      .on('value', (snapshot) => {
        setBookContentsLoading(false);
        if (!snapshot.exists()) {
          setBookContents([]);
          return;
        }

        const convertedBookContents = convertDatabaseJsonToArray(
          snapshot.val() as DBData<BookContent>
        );

        setBookContents(convertedBookContents);
      });

    return (): void => firebase.database().ref(DatabaseRef.BookContent).off();
  });

  useEffect(() => {
    firebase
      .database()
      .ref(DatabaseRef.Story)
      .on('value', (snapshot) => {
        setStoriesLoading(false);
        if (!snapshot.exists()) {
          setStories([]);
          return;
        }

        const convertedStories = convertDatabaseJsonToArray(
          snapshot.val() as DBData<Story>
        );

        setStories(convertedStories);
      });

    return (): void => firebase.database().ref(DatabaseRef.Story).off();
  }, []);

  const fullStories: FullStory[] = useMemo(() => {
    if (stories.length <= 0) return [];

    return stories.map(
      (story): FullStory => {
        const storyContent = bookContents.filter(
          ({ storyId }) => storyId === story.id
        );

        return { ...story, content: storyContent };
      }
    );
  }, [JSON.stringify(stories), JSON.stringify(bookContents)]);

  return {
    stories: fullStories,
    loading: bookContentsLoading || storiesLoading
  };
};
