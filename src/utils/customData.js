import posts from '../data/posts.json';
import users from '../data/users.json';

const loadCustomData = () => {
  console.log('customData intializing...');
  const postsCollected = posts.reduce((aggr, post) => {
    const { userId, ...otherProps } = post;
    aggr[userId]
      ? aggr[userId].push({ ...otherProps })
      : (aggr[userId] = [{ ...otherProps }]);
    return aggr;
  }, {});

  return users.map((user) => {
    return { ...user, posts: postsCollected[user.id] };
  });
};

export default loadCustomData;
