import firebase from 'firebase/app';

export enum ContentType {
  Paragraph = 'paragraph',
  Photos = 'photos'
}

export interface ContentPhoto {
  id: string;
  storageRef: string;

  // For responsive UI, storing photo width by percent of book page width
  // And also aspect ratio (width / height)

  // Advanced feature, can also allow user to choose specific position on the book page

  title?: string;
  description?: string;
}

export interface IUser extends firebase.User {}

export interface Story {
  id: string;
  uid: string;
  date: string;
  isPrivate: boolean;

  title?: string;
}

export interface StoryContent {
  id: string;
  storyId: string;
  content: (ContentPhotos | ContentParagraph)[];
}

export interface ContentParagraph {
  id: string;
  storyContentId: string;
  type: ContentType.Paragraph;
  order: number;
  paragraph: string;

  // TODO: Need to figure out a way to handle content container size
  // Paragraph: Original idea is counting paragraph characters
  // based on font-size, line-height,... can calculate height of book line
  // based on book page width, can calculate number of characters per book line
  // finally, (paragraph number of characters / book line characters) = number of book lines
  // => number of book lines * book line height = paragraph height

  // This solution is just an acceptable solution, because the formula assumes all character
  // have the same width
}

export interface ContentPhotos {
  id: string;
  storyContentId: string;
  type: ContentType.Photos;
  order: number;
  photos: ContentPhoto[];

  // Need to figure out a way to handle content container size
  // Photos: Original idea is giving fixed width and height for photos
  // Need a preview of story for user

  title?: string;
  description?: string;
}
