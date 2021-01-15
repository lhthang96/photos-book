import firebase from 'firebase/app';

export enum ContentType {
  Paragraph = 'paragraph',
  Photos = 'photos'
}

export interface Photo {
  id: string; // photo entity identifier
  storageRef: string; // firebase storage ref storing photo file

  // For responsive UI, storing photo width by percent of book page width
  // And also aspect ratio (width / height)

  // Advanced feature, can also allow user to choose specific position on the book page

  title?: string; // photo title
  description?: string; // photo description
}

export interface User extends firebase.User {}

export interface Book {
  id: string; // Book entity identifier
  cover: BookContent; // content displaying on the book cover
  backPage: BookContent; // content displaying on the book back page
  binding: BookContent; // content displaying on book binding
  chapters: Chapter[]; // book inside chapters.
}

export interface Chapter {
  id: string; // chapter entity identifier
  title?: string; // chapter title
  stories: Story[]; // chapter inside stories
}

export interface Story {
  id: string; // story entity identifier
  uid: string; // user id
  date: string; // story's date
  isPrivate: boolean; // only owner can read ?

  title?: string; // story title
}

export interface BookContent {
  id: string;
  storyId: string;
  content: (BookContentPhotos | BookContentParagraph)[];
}

export interface BookContentParagraph {
  id: string; // book content paragraph entity identifier
  bookContentId: string; // linked book content id
  type: ContentType.Paragraph; // content type
  order: number; // content order in book content, used for story content displaying in right position
  paragraph: string; // book content paragraph

  // TODO: Need to figure out a way to handle content container size
  // Paragraph: Original idea is counting paragraph characters
  // based on font-size, line-height,... can calculate height of book line
  // based on book page width, can calculate number of characters per book line
  // finally, (paragraph number of characters / book line characters) = number of book lines
  // => number of book lines * book line height = paragraph height

  // This solution is just an acceptable solution, because the formula assumes all character
  // have the same width
}

export interface BookContentPhotos {
  id: string; // book content photos entity identifier
  bookContentId: string; // linked book content id
  type: ContentType.Photos; // content type
  order: number; // content order in book content, used for story content displaying in right position
  photos: Photo[]; // book content photos

  // Need to figure out a way to handle content container size
  // Photos: Original idea is giving fixed width and height for photos
  // Need a preview of story for user

  title?: string; // book content photos title
  description?: string; // book content photos description
}
