Here’s a `README.md` file tailored to the application you’ve described. It covers the project overview, installation, usage, and testing instructions.

---

# BookStore Application

## Overview

The BookStore Application is a full-stack application built with Next.js, React, and Tailwind CSS. It allows users to view, add, edit, and delete books. The app features a clean and responsive UI, with components for listing books, viewing book details, and managing book records.

## Features

- **Book List**: Displays a list of books with titles and authors.
- **Book Details**: Shows detailed information about a selected book, with options to edit or delete.
- **Add New Book**: Allows users to add new books with details including title, author, published date, and description.
- **Edit Book**: Enables users to update existing book details.
- **Responsive Design**: Adapts to various screen sizes and devices.
- **Loading Skeletons**: Provides visual feedback while data is loading.

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**

   ```bash
   cd <project-directory>
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env.local` file in the root of the project with the following content:

   ```env
   NEXT_PUBLIC_API_URL=<your-api-url>
   ```

## Usage

1. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

2. **Build for production**

   ```bash
   npm run build
   ```

   Then start the production server with:

   ```bash
   npm start
   ```

## Testing

1. **Run unit tests**

   ```bash
   npm test
   ```

2. **Run tests with coverage**

   ```bash
   npm run test:coverage
   ```

## Project Structure

- **`app/_components/`**: Reusable UI components such as `BookDetails`, `BookForm`, `BookList`, `Navbar`, and `Footer`.
- **`app/pages/`**: Next.js page components, including routes for viewing, editing, and adding books.
- **`app/error.tsx`**: Custom error boundary component.
- **`app/globals.css`**: Global styles using Tailwind CSS.
- **`app/layout.tsx`**: Root layout component wrapping all pages.
- **`app/page.jsx`**: Home page displaying the list of books.
- **`ui/skeleton-card.jsx`**: Skeleton loading card component.
- **`app/__test__/index.test.js`**: Unit tests for the Home page.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

---

Feel free to adjust any sections according to your specific needs or project details!