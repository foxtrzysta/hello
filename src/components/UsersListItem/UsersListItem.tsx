import React from 'react';
import { users } from '../../data/users';

const UsersListItem = (props: users) => {
  return (
    <li key={props.index}>
      <div>{props.average}</div>
      <div>
        <p>{props.name}</p>
        <p>{props.attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

export default UsersListItem;
