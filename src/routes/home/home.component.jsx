/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import { lazy, useEffect, useRef, useState, useContext } from 'react';
import Loader from '../../components/loader/loader.component';
import { HomeWrapper, Header } from './home.styles';
import loadCustomData from '../../utils/customData';
import DataContext from '../../dataContext';

const Home = () => {
  const LazyUsers = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImported, setIsImported] = useState(false);
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    (async () => {
      try {
        if (data) return;
        const loadedData = await initializing();
        if (loadedData) {
          setData(loadedData);
          setIsLoaded(true);
        }
      } catch (err) {
        console.log('Something went wrong', err);
      }
    })();
  }, []);

  useEffect(() => {
    if (data && !isImported) {
      LazyUsers.current = lazy(() =>
        import(
          /* webpackChunkName: "lazy_users" */
          '../../components/users/users.component'
        )
      );
      setIsImported(true);
    }
  }, [data, isImported]);

  const initializing = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        //pretending that initialization lasts longer :)
        const result = loadCustomData();
        resolve(result);
      }, 500)
    );

  return (
    <HomeWrapper>
      {(data && LazyUsers.current) || (isLoaded && isImported) ? (
        <>
          <Header>Users Found In The Store</Header>
          <LazyUsers.current />
        </>
      ) : (
        <Loader />
      )}
    </HomeWrapper>
  );
};

export default Home;
