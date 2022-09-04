import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserItem from '../../components/user-item/user-item.component';
import { Header } from '../home/home.styles';
import { Message, ButtonBox } from './profile.styles';
import DataContext from '../../dataContext';

const Profile = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const user = data.find((data) => data.id === parseInt(userId));
      setUser(user);
    }
    // add following lines to change behavior of loading users data
    // on profile's page too
    // else {
    //   setData(loadCustomData());
    // }
  }, [userId, data]);

  return (
    <>
      {data ? (
        <>
          <Header>{user ? user.name : ''}</Header>
          <>
            {user ? (
              <div>
                <UserItem user={user} />
              </div>
            ) : (
              <Message>
                User doesn`t exist
                <ButtonBox onClick={() => navigate('/')}>Click</ButtonBox>
              </Message>
            )}
          </>
        </>
      ) : (
        <Message>
          Go to Main page for initialization
          <ButtonBox onClick={() => navigate('/')}>Click</ButtonBox>
        </Message>
      )}
    </>
  );
};

export default Profile;
