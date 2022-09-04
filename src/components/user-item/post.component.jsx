import { Article, Title, Content } from './post.styles';

const Post = ({ data }) => {
  return (
    <Article>
      <Title>{data.title}</Title>
      <Content>{data.body}</Content>
    </Article>
  );
};

export default Post;
