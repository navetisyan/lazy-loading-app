import { useState, useEffect } from 'react';
import customData from '../../data/customData';

const UsersList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(customData);
  }, []);

  return (
    <div>
      {data &&
        data.map((d) => {
          return (
            <div key={d.id}>
              <div>
                <strong>{d.name}</strong>
                <div>{d.username}</div>
                <div>{d.email}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UsersList;
