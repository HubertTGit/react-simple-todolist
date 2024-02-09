export interface TodoItem {
  id: string;
  task: string;
  isCompleted?: boolean;
}

export interface TodoReducerAction {
  type: TodoAction;
  task?: string;
  id: string;
}

export type TodoAction = 'add' | 'update' | 'toggle' | 'clear';

export type TodoFilterType = 'completed' | 'all' | 'open';
