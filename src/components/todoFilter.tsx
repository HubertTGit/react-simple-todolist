import { Itodo, filterType } from '../utils/todoReducer';

type filterProps<T> = {
  onChange: (d: T) => void;
  filter: T;
  todos: Itodo[];
};

export default function TodoFilter({
  onChange,
  filter,
  todos,
}: filterProps<filterType>) {
  const allCss = `p-2 border rounded-md border-red-950 ${
    filter === 'all' && 'bg-red-950 text-white'
  }`;
  const completedCss = `p-2 border rounded-md border-red-950 ${
    filter === 'completed' && 'bg-red-950 text-white'
  }`;

  const openCss = `p-2 border rounded-md border-red-950 ${
    filter === 'open' && 'bg-red-950 text-white'
  }`;

  const all = todos?.length;
  const completed = todos?.filter((o) => o.isCompleted).length;
  const open = todos?.filter((o) => !o.isCompleted).length;

  return (
    <div className="w-full">
      <div className=" flex gap-2">
        <button className={allCss} onClick={() => onChange('all')}>
          all ({all})
        </button>
        <button className={openCss} onClick={() => onChange('open')}>
          open ({open})
        </button>
        <button className={completedCss} onClick={() => onChange('completed')}>
          completed ({completed})
        </button>
      </div>
    </div>
  );
}
