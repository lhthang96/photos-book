import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { Story } from 'src/common/interfaces/data';
import { DatabaseRef } from 'src/common/constants';
import { convertDatabaseJsonToArray } from 'src/common/utils';
import { DBData } from 'src/common/interfaces/firebase';

type UseGetStoriesData = {
  loading: boolean;
  stories: Story[];
};

export const useGetStories = (): UseGetStoriesData => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
      .database()
      .ref(DatabaseRef.Story)
      .on('value', (snapshot) => {
        setLoading(false);
        if (!snapshot.exists()) return;

        const convertedStories = convertDatabaseJsonToArray(
          snapshot.val() as DBData<Story>
        );

        setStories(convertedStories);
      });

    return (): void => firebase.database().ref('story').off();
  }, []);

  return { stories, loading };
};
