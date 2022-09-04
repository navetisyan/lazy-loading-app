import { lazy, Suspense } from 'react';
const Users = lazy(() =>
  import(
    /* webpackChunkName: "lazy_users" */
    '../../components/users/users.component'
  )
);

const Home = () => {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <div>Users Found in the database</div>
        <Users />
      </Suspense>
    </div>
  );
};

export default Home;
