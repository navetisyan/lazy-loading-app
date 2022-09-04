import posts from './posts.json';
import users from './users.json';

export default (() => {
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
})();

//export default customData;
