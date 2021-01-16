import React, { ReactElement } from 'react';
import { StyledGetStory } from './GetStory.styles';
import { useGetStories } from 'src/hooks';
import { DevDataStoryItem } from './DevDataStoryItem';

export const GetStory: React.FC = () => {
  const { stories } = useGetStories();

  const renderStories = (): ReactElement[] =>
    stories.map((story) => <DevDataStoryItem key={story.id} story={story} />);

  return <StyledGetStory>{renderStories()}</StyledGetStory>;
};
