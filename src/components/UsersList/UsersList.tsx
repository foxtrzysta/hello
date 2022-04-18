import users from '../../data/users';
import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map(({ name, attendance, average }, index) => {
          return (
            <UsersListItem
              name={name}
              attendance={attendance}
              average={average}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
