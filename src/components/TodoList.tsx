import { TodoItem } from './TodoItem';

import { ITodo } from '../types/data';

interface IProps {
  items: Array<ITodo>;
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
};

export const TodoList: React.FC<IProps> = (props) => {
  const { items, removeTodo, toggleTodo } = props;

  return (
    <div>
      {items.map(todo => (
        <TodoItem key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo} />
      ))}
    </div>
  );
};

//export default TodoList;