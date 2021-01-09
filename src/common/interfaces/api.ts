import { IDailyStory } from './photos';

export type IPostDiaryData = Pick<IDailyStory, 'date' | 'title' | 'content'>;
