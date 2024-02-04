export interface Itodo {
  id: string;
  task: string;
  isCompleted?: boolean;
}

export interface IReducerPayload {
  type: ITodoActionType;
  task?: string;
  id: string;
}

export type ITodoActionType = 'add' | 'remove' | 'update' | 'toggle' | 'clear';

export type filterType = 'completed' | 'all' | 'open';

export default function reducer(
  draft: Itodo[],
  action: IReducerPayload
): Itodo[] {
  const data: Itodo = {
    task: action.task || '',
    id: action.id,
  };

  switch (action.type) {
    case 'add': {
      if (action.task?.length === 0) {
        return draft;
      }

      draft.unshift(data);

      return draft;
    }
    case 'remove': {
      return draft.filter((g) => g.id !== data.id);
    }
    case 'toggle': {
      const _draft = draft.find((g) => g.id === data.id);
      if (_draft) {
        _draft.isCompleted = !_draft.isCompleted;
      }

      return draft;
    }
    case 'clear': {
      draft = [];

      return draft;
    }
    case 'update': {
      const _draft = draft.find((g) => g.id === data.id);

      if (_draft) {
        if (data.task) {
          _draft.task = data.task;
        }
      }

      return draft;
    }
    default: {
      throw Error('unknown action');
    }
  }
}
