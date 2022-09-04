import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import customData from '../../data/customData';
import UserItem from '../../components/user-item/user-item.component';
import { Header } from '../home/home.styles';

const Profile = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();

  useEffect(() => {
    const user = customData.find((data) => data.id === parseInt(userId));
    setUser(user);
  }, [userId]);

  return (
    <>
      <Header>{user ? user.name : ''}</Header>

      {user ? (
        <div>
          <UserItem user={user} />
        </div>
      ) : (
        <div>User doesn`t exist</div>
      )}
    </>
  );
};

export default Profile;
