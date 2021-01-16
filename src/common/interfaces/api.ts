import { BookContent, Story } from './data';

export type PostStoryPayload = Pick<
  Story,
  'uid' | 'date' | 'isPrivate' | 'title'
>;

export type PostBookContentPayload = {
  content: string; // JSON.stringify((BookContentPhotos | BookContentParagraph)[])
};
