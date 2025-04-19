import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
    test('AppComponent boundary renders the Task List header', () => {
        render(<App />);
        const headerElement = screen.getByText('Task List');
        expect(headerElement).toBeInTheDocument();
    });

    test('AppComponent boundary renders all initial tasks', () => {
        render(<App />);
        const taskElements = screen.getAllByRole('heading', { level: 3 });
        expect(taskElements.length).toBe(3); // Ensure there are three tasks
    });

    test('AppComponent boundary renders the first task name and description', () => {
        render(<App />);
        const taskName = screen.getByText('Task 1');
        const taskDescription = screen.getByText('This is the first task');
        expect(taskName).toBeInTheDocument();
        expect(taskDescription).toBeInTheDocument();
    });

    test('AppComponent boundary renders the second task name and description', () => {
        render(<App />);
        const taskName = screen.getByText('Task 2');
        const taskDescription = screen.getByText('This is the second task');
        expect(taskName).toBeInTheDocument();
        expect(taskDescription).toBeInTheDocument();
    });

    test('AppComponent boundary renders the third task name and description', () => {
        render(<App />);
        const taskName = screen.getByText('Task 3');
        const taskDescription = screen.getByText('This is the third task');
        expect(taskName).toBeInTheDocument();
        expect(taskDescription).toBeInTheDocument();
    });

    test('AppComponent boundary indicates if a task is completed', () => {
        render(<App />);
        const statusElement = screen.getByText('Status: Completed'); // Check the status text
        expect(statusElement).toBeInTheDocument();
    });
});
