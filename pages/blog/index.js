import Main from '../../Layouts/Main/Main';
import BlogPostsList from '../../components/BlogPostsList/BlogPostsList';
import Subscribe from '../../components/Subscribe/Subscribe';

const Blog = ({ postsData, API_URL }) => {
  return (
    <Main headTitle='Tattoo one love blog'>
      <h1 className='visually-hidden'>Tattoo one love blog</h1>
      <BlogPostsList postsData={postsData} API_URL={API_URL} />
      <Subscribe API_URL={API_URL} />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/posts?`);
  const postsData = await res.json();

  return {
    props: {
      postsData,
      API_URL: API_URL,
    },
  };
};

export default Blog;
