import { Story } from './data';

export type PostStoryPayload = Pick<
  Story,
  'uid' | 'date' | 'isPrivate' | 'title'
>;
