import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../Task';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
    const task = {
        name: 'Task 1',
        description: 'This is the first task',
        completed: false
    };

    const completedTask = {
        name: 'Task 2',
        description: 'This is the second task',
        completed: true
    };

    test('TaskComponent boundary renders the task name', () => {
        render(<Task task={task} onComplete={() => { }} />);
        const taskName = screen.getByText('Task 1');
        expect(taskName).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task description', () => {
        render(<Task task={task} onComplete={() => { }} />);
        const taskDescription = screen.getByText('This is the first task');
        expect(taskDescription).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task status as incomplete', () => {
        render(<Task task={task} onComplete={() => { }} />);
        const statusElement = screen.getByText('Status: Incomplete');
        expect(statusElement).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task status as completed', () => {
        render(<Task task={completedTask} onComplete={() => { }} />);
        const statusElement = screen.getByText('Status: Completed');
        expect(statusElement).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the correct button text for incomplete tasks', () => {
        render(<Task task={task} onComplete={() => { }} />);
        const buttonElement = screen.getByText('Mark Completed');
        expect(buttonElement).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the correct button text for completed tasks', () => {
        render(<Task task={completedTask} onComplete={() => { }} />);
        const buttonElement = screen.getByText('Mark Incomplete');
        expect(buttonElement).toBeInTheDocument();
    });

    test('TaskComponent boundary calls the onComplete function when the button is clicked', () => {
        const mockOnComplete = jest.fn();
        render(<Task task={task} onComplete={mockOnComplete} />);
        const buttonElement = screen.getByText('Mark Completed');
        fireEvent.click(buttonElement);
        expect(mockOnComplete).toHaveBeenCalledTimes(1);
    });
});
