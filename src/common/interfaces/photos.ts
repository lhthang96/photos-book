export type IPhoto = {
  id: string;
  isPrivate: boolean;
  key?: string;
  title?: string;
  description?: string;
};

export type IDailyStory = {
  id: string;
  date: string;
  isPrivate: boolean;
  title?: string;
  content?: (string | IPhoto)[];
};
