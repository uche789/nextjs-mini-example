import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <div>
        <h1>Hello world! userAgent</h1>
    </div>
  )
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;