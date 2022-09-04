import { lazy, Suspense } from 'react';
import Loader from '../../components/loader/loader.component';
import { HomeWrapper, Header } from './home.styles';

const Users = lazy(() =>
  import(
    /* webpackChunkName: "lazy_users" */
    '../../components/users/users.component'
  )
);

const Home = () => {
  return (
    <HomeWrapper>
      <Suspense fallback={<Loader />}>
        <div>Users Found in the database</div>
        <Users />
      </Suspense>
    </HomeWrapper>
  );
};

export default Home;
