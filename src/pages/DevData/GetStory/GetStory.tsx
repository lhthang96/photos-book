import React from 'react';
import { StyledGetStory } from './GetStory.styles';
import { useGetStories } from 'src/hooks';

export const GetStory: React.FC = () => {
  const { stories } = useGetStories();

  return <StyledGetStory>{JSON.stringify(stories)}</StyledGetStory>;
};
