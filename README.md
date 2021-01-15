# Photos Book

An application for posting story with photos, just like a blog but shown in a more elegant way, a book.

## Overview

### Features

Authenticated user:

- Posting a story of a day with title, content with both paragraph and photos.
- The UI idea is a book contains all the stories, content is shown as pages of the book.
- Paragraph content supports rich text (bold, italic, list, ...) - `optional`

Non-authenticated user:

- Can only read non-private stories.
- Can post story in trial mode. - `optional`

### Stacks

- `create-react-apps` with `typescript` template.
- `antd` + `styled-components`.
- `firebase`: authentication, database, storage.

### Goals

This apps is intented for practicing web applications skills, mainly focusing on front-end side with a support from `firebase` for the back-end side.

Practicing skills set:

- A process to build an entire react apps.
- Advanced CSS3 to build an elegant UI.
- Working with `firebase` services.

## Data structure

### Interfaces

- `User`: Firebase `User` interface.

- `Book`:

```typescript
export interface Book {
  id: string; // Book entity identifier
  cover: BookContent; // content displaying on the book cover
  backPage: BookContent; // content displaying on the book back page
  binding: BookContent; // content displaying on book binding
  chapters: Chapter[]; // book inside chapters.
}
```

- `Chapter`:

```typescript
export interface Chapter {
  id: string; // chapter entity identifier
  title?: string; // chapter title
  stories: Story[]; // chapter inside stories
}
```

- `Story`:

```typescript
export interface Story {
  id: string; // story entity identifier
  uid: string; // user id
  date: string; // story's date
  isPrivate: boolean; // only owner can read ?

  title?: string; // story title
}
```

- `BookContent`:

```typescript
export interface BookContent {
  id: string; // book content entity identifier
  storyId: string; // linked story id
  content: (BookContentPhotos | BookContentParagraph)[];
}
```

- `BookContentParagraph` & `BookContentPhotos`:

```typescript
export enum ContentType {
  Paragraph = 'paragraph',
  Photos = 'photos'
}

export interface BookContentParagraph {
  id: string; // book content paragraph entity identifier
  bookContentId: string; // linked book content id
  type: ContentType.Paragraph; // content type
  order: number; // content order in book content, used for story content displaying in right position
  paragraph: string; // book content paragraph
}

export interface BookContentPhotos {
  id: string; // book content photos entity identifier
  bookContentId: string; // linked book content id
  type: ContentType.Photos; // content type
  order: number; // content order in book content, used for story content displaying in right position
  photos: Photo[]; // book content photos

  title?: string; // book content photos title
  description?: string; // book content photos description
}

export interface Photo {
  id: string; // photo entity identifier
  storageRef: string; // firebase storage ref storing photo file

  title?: string; // photo title
  description?: string; // photo description
}
```
