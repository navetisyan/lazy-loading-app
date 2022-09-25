import { useNavigate } from 'react-router-dom';
import { Block, GridWrapper } from './users.styles';
import { useSelector } from 'react-redux';

const UsersList = () => {
  console.log('UsersList CALLED');
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.data.dataItems;
  });

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
