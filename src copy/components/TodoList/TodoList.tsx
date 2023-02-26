import React from 'react';

interface IItem {
  id: string;
  text: string;
}

interface IProps {
  items: Array<IItem>;
};

export const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

//export default TodoList;