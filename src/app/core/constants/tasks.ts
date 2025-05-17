import { Task } from '../models';

export const Tasks: Task[] = [
  {
    id: 1,
    title: 'Design landing page',
    description: 'Create a responsive UI for the homepage',
    dueDate: 1746403200000,
    completed: false,
  },
  {
    id: 2,
    title: 'Set up PostgreSQL DB',
    description: 'Initial DB schema and connection setup',
    dueDate: 1746489600000,
    completed: true,
  },
  {
    id: 3,
    title: 'Write task service',
    description: 'Create a task service for API integration',
    dueDate: 1746576000000,
    completed: false,
  },
];
