import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import BookPage from '../pages/books/[id]/page';
import { useRouter } from 'next/navigation';
import '@testing-library/jest-dom'; // Import jest-dom matchers

// Mock the axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Book Page', () => {
  const push = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  it('fetches and displays book details', async () => {
    // Mock the API response
    mockedAxios.get.mockResolvedValue({
      data: { _id: '1', title: 'Test Book', author: 'Test Author', publishedDate: '2022-01-01', description: 'Test Description' },
    });

    render(<BookPage />);

    await waitFor(() => {
      expect(screen.getByText('Test Book')).toBeInTheDocument();
      expect(screen.getByText('Test Author')).toBeInTheDocument();
    });
  });

  it('handles delete action', async () => {
    // Mock the API responses
    mockedAxios.get.mockResolvedValue({
      data: { _id: '1', title: 'Test Book', author: 'Test Author', publishedDate: '2022-01-01', description: 'Test Description' },
    });
    mockedAxios.delete.mockResolvedValue({});

    render(<BookPage />);

    // Simulate the delete action
    const deleteButton = screen.getByText('Delete');
    deleteButton.click();

    // Wait for the deletion to be processed
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/');
    });
  });
});
