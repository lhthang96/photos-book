export type IPhoto = {
  id: string;
  key?: string;
  title?: string;
  description?: string;
};

export type IDailyStory = {
  id: string;
  date: Date;
  title?: string;
  content?: (string | IPhoto)[];
};
