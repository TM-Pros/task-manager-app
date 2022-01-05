// TASK
export interface Task {
  id: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  creatorId: string;
  milestoneId?: string;
  projectId?: string;
  name: string;
  state: 'Open' | 'Doing' | 'Done';
  deadline?: string;
  duration?: number; // In minutes.
  assigneeId?: string;
}

export interface TaskEvent {
  id: string; // TODO: TaskEvent.id useful or useless?
  createdAt: string;
  authorId: string;
  taskId: string;
}

// TODO: All kinds of TaskEvent

export interface TaskMessage {
  id: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  authorId: string;
  content: string;
  taskId: string;
}

export interface Activity {
  id: string;
  updatedAt: string;
  version: number;
  taskId: string; // Otherwise, what's the context?
  userId: string;
  start: string;
  end?: string;
  duration?: number; // In minutes.
  notes?: string;
}
