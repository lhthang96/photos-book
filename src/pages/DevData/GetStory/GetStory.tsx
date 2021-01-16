import React, { ReactElement, useEffect } from 'react';
import { StyledGetStory } from './GetStory.styles';
import { useGetFullStories } from 'src/hooks';
import { DevDataStoryItem } from './DevDataStoryItem';

export const GetStory: React.FC = () => {
  const { stories } = useGetFullStories();

  const renderStories = (): ReactElement[] =>
    stories.map((story) => <DevDataStoryItem key={story.id} story={story} />);

  return <StyledGetStory>{renderStories()}</StyledGetStory>;
};
