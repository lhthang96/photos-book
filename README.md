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

  - **id: string** - book entity identifier.
  - **cover: BookContent** - book cover image url.
  - **backPage: BookContent** - content displaying on the book back page
  - **bindingText?: BookContent** - text displaying on book binding
  - **chapters: BookChapter[]** - book inside chapters.

- `BookChapter`:

  - **id: string** - chapter entity identifier.
  - **title?: string** - chapter title.
  - **stories: BookStory** - chapter inside stories.

- `BookStory`:

```typescript
export interface Story {
  id: string; // story entity identifier
  uid: string; // user id
  date: string; // story's date
  isPrivate: boolean; // only owner can read ?

  title?: string; // story title
}
```
