import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Block, GridWrapper } from './users.styles';
import DataContext from '../../dataContext';

const UsersList = () => {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);

  const navigateToUser = (id) => {
    navigate(`/${id}`);
  };
  return (
    <GridWrapper>
      {data &&
        data.map((d) => {
          return (
            <Block key={d.id} onClick={() => navigateToUser(d.id)}>
              <div>
                <strong>{d.name}</strong>
                <div>{d.username}</div>
                <div>{d.email}</div>
              </div>
            </Block>
          );
        })}
    </GridWrapper>
  );
};

export default UsersList;
