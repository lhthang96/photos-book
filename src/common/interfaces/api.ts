import { IDailyStory } from './photos';
import { Story } from './data';

export type IPostDiaryData = Pick<IDailyStory, 'date' | 'title' | 'content'>;

export type PostStoryPayload = Pick<
  Story,
  'uid' | 'date' | 'isPrivate' | 'title'
>;
