/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import { useEffect, useRef, FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setData, setIsImported } from '../../store/data/data.action';
import { dataItem } from '../../store/data/data.types';

import Loader from '../../components/loader/loader.component';
import ErrorHandler from '../../components/error-handler/error.component';
import { HomeWrapper, Header } from './home.styles';
import loadCustomData from '../../utils/customData';

type ModuleType = typeof import('../../components/users/users.component'); // This is the import type!

export function load(): Promise<ModuleType> {
  return import(
    /* webpackChunkName: "lazy_users" */
    '../../components/users/users.component'
  );
}

const Home = () => {
  const dispatch = useDispatch();
  const LazyUsers = useRef<FC | null>(null);

  const data = useSelector((state: RootState) => state.data.dataItems);
  const isLoaded = useSelector((state: RootState) => state.data.isLoaded);
  const isImported = useSelector((state: RootState) => state.data.isImported);

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

    return () => {
      dispatch(setIsImported(false));
    };
  }, []);

  useEffect(() => {
    (async () => {
      // if (data && !isImported) {
      if (data && !LazyUsers.current) {
        try {
          LazyUsers.current = (await load()).default;

          dispatch(setIsImported(true));
        } catch (err) {
          console.log('lazy loading failed... ', err);
        }
      }
    })();
  }, [data, LazyUsers]);

  interface initilizedType {
    data: dataItem[];
  }

  const initializing = () => {
    return new Promise<dataItem[]>((resolve) =>
      setTimeout(() => {
        //pretending that initialization lasts longer :)
        const result = loadCustomData();
        resolve(result);
      }, 500)
    );
  };

  return (
    <HomeWrapper>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        {(data && LazyUsers.current) || (isLoaded && isImported) ? (
          <>
            <Header>Users Found In The Store</Header>
            {LazyUsers.current ? <LazyUsers.current /> : ''}
          </>
        ) : (
          <Loader />
        )}
      </ErrorBoundary>
    </HomeWrapper>
  );
};

export default Home;
