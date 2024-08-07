import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookForm from '../_components/BookForm';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// Mock the axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Book Form Component', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  const setBook = jest.fn();

  it('should call onSubmit and navigate on successful form submission', async () => {
    // Mock the API response
    mockedAxios.post.mockResolvedValue({});

    const onSubmit = async () => {
      await mockedAxios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
        title: 'Test Book',
        author: 'Test Author',
        publishedDate: '2024-01-01',
        description: 'Test Description',
      });
    };

    render(
      <BookForm 
        book={{ title: '', author: '', publishedDate: '', description: '' }} 
        setBook={setBook} 
        onSubmit={onSubmit} 
      />
    );

    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Book' } });
    fireEvent.change(screen.getByLabelText(/Author/i), { target: { value: 'Test Author' } });
    fireEvent.change(screen.getByLabelText(/Published Date/i), { target: { value: '2024-01-01' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test Description' } });

    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_URL}`, {
        title: 'Test Book',
        author: 'Test Author',
        publishedDate: '2024-01-01',
        description: 'Test Description',
      });
      expect(push).toHaveBeenCalledWith('/');
    });
  });
});
