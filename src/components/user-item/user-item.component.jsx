import Post from './post.component';

const UserItem = ({ user }) => {
  return (
    <>
      {user.posts.map((post) => {
        return <Post data={post} key={post.id} />;
      })}
    </>
  );
};

export default UserItem;
