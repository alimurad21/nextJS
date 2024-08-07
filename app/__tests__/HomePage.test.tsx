import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Home from '../page';
import '@testing-library/jest-dom';

// Mock the axios module
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Home Page', () => {
  it('fetches and displays books', async () => {
    // Mock the API response
    mockedAxios.get.mockResolvedValue({
      data: [
        { _id: '1', title: 'Test Book', author: 'Test Author', description:'Test description' },
        { _id: '2', title: 'Another Test Book', author: 'Another Test Author', description:'Another Test description' },
      ],
    });

    render(<Home />);

    // Wait for books to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText('Test Book')).toBeInTheDocument();
      expect(screen.getByText('Another Test Book')).toBeInTheDocument();
    });
  });

  it('displays loading state while fetching', async () => {
    // Mock a delay
    mockedAxios.get.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({
      data: []
    }), 1000)));

    render(<Home />);

    // Assuming your loading state is represented by a specific element or text
    // Replace 'Loading...' with the actual text or element your app uses to indicate loading
    expect(screen.getByText('Loading...')).toBeInTheDocument(); 
  });
});
