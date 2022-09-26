/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import { useEffect, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setIsImported } from '../../store/data/data.action';

import Loader from '../../components/loader/loader.component';
import ErrorHandler from '../../components/error-handler/error.component';
import { HomeWrapper, Header } from './home.styles';
import loadCustomData from '../../utils/customData';

const Home = () => {
  const dispatch = useDispatch();
  const LazyUsers = useRef(null);
  const data = useSelector((state) => state.data.dataItems);
  const isLoaded = useSelector((state) => state.data.isLoaded);
  const isImported = useSelector((state) => state.data.isImported);

  useEffect(() => {
    (async () => {
      try {
        if (data) return;
        const loadedData = await initializing();
        if (loadedData) {
          dispatch(setData(loadedData));
        }
      } catch (err) {
        console.log('Something went wrong', err);
      }
    })();

    return ()=> {
      dispatch(setIsImported(false));
    }
  }, []);

  useEffect(() => {
    (async () => {
     // if (data && !isImported) {
       if(data && !LazyUsers.current){
        try {
          LazyUsers.current = (
            await import(
              /* webpackChunkName: "lazy_users" */
              '../../components/users/users.component'
            )
          ).default;

          dispatch(setIsImported(true));
        } catch (err) {
          console.log('lazy loading failed... ', err);
        }
      }
    })();
  }, [data, LazyUsers]);

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
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        {((data && LazyUsers.current) || (isLoaded && isImported))  ? ( 
          <>
            <Header>Users Found In The Store</Header>
            <LazyUsers.current />
          </>
        ) : (
          <Loader />
        )}
      </ErrorBoundary>
    </HomeWrapper>
  );
};

export default Home;
