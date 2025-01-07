import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import React from 'react';

describe('To-Do List App', () => {
  test('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/To Do List/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders input and button', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add a task/i);
    const buttonElement = screen.getByText(/add/i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('allows adding a task', () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/add a task/i);
    const buttonElement = screen.getByText(/add/i);

    fireEvent.change(inputElement, { target: { value: 'Learn CI CD' } });
    fireEvent.click(buttonElement);

    const taskElement = screen.getByText(/learn ci cd/i);

    expect(taskElement).toBeInTheDocument();
  });

  test('shows toast if input is empty', () => {
    render(<App />);

    const buttonElement = screen.getByText(/add/i);

    fireEvent.click(buttonElement);

    const toastMessage = screen.getByText(/Task input cannot be empty!/i);
    expect(toastMessage).toBeInTheDocument();
  });

  test('clears the input after adding a task', () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText<HTMLInputElement>(/add a task/i);
    const buttonElement = screen.getByText(/add/i);

    fireEvent.change(inputElement, { target: { value: 'Learn Docker' } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
  });

});
