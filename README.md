# Flashcard App

This is a **Flashcard App** built with Next.js and React. The app fetches categories and word pairs, displays them as flashcards, and allows users to toggle between the word and its translation. Additionally, users can shuffle through word pairs and view translations on demand.

## Features

- **Category Selection**: Users can select categories (e.g., Animals) to load relevant word pairs.
- **Flashcard Display**: Displays either an Arabic or English word on the flashcard.
- **Toggle Translation**: Users can toggle between the word and its translation (English/Arabic).
- **Shuffle Functionality**: Users can shuffle through the words in the selected category.
- **Loading Spinners**: Displays a spinner while loading categories or words.

## Tech Stack

- **React**: For building the UI components.
- **Next.js**: Used for server-side rendering and routing.
- **react-spinners**: Used to show loading spinners.
- **Next.js API Routes**: Custom API routes that simulate fetching data from a server.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/flashcard-app.git
   cd flashcard-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Folder Structure

```
├── /api
│   ├── /categories
│   │   └── route.js  # Mock API for fetching categories
│   ├── /words
│   │   └── route.js  # Mock API for fetching words by category
├── /assets
│   └── /images       # Images used in the app (view, unview, shuffle)
│   └── /mock         # Mock data for categories and word pairs
├── /components       # React components
├── /pages            # Next.js pages
└── README.md         # Project README file
```

## API Routes

### `/api/categories`
This route returns the list of available categories.

#### Example Response:
```json
[
  {
    "id": 1,
    "name": "Animals"
  },
  {
    "id": 2,
    "name": "Colors"
  }
]
```

### `/api/words?category=Animals`
This route returns the list of word pairs for a given category.

#### Example Response:
```json
[
  {
    "english": "Dog",
    "arabic": "كلب"
  },
  {
    "english": "Cat",
    "arabic": "قطة"
  }
]
```

## Mock Data

You can simulate the data with the following mock files:

### `/assets/mock/mockData.js`
```javascript
export const categories = [
  { id: 1, name: 'Animals' },
  { id: 2, name: 'Colors' }
];

export const wordPairs = {
  Animals: [
    { english: 'Dog', arabic: 'كلب' },
    { english: 'Cat', arabic: 'قطة' }
  ],
  Colors: [
    { english: 'Red', arabic: 'أحمر' },
    { english: 'Blue', arabic: 'أزرق' }
  ]
};
```

## How It Works

1. **Category Fetching**: On initial render, the app fetches the list of categories from the `/api/categories` endpoint.
2. **Word Pairs Fetching**: When a category is selected, the app fetches word pairs from `/api/words?category={selectedCategory}`.
3. **Shuffling Words**: The app randomly selects a word from the word pairs and displays either the English or Arabic version.
4. **Translation**: The user can toggle the flashcard to view the translation of the displayed word.
5. **Loading State**: Spinners are shown while categories or words are being fetched.

## Running Tests

To run the tests, use:

```bash
npm test
```