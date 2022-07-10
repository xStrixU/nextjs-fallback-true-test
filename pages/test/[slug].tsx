import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps = async () => ({
  props: {
    foo: 'bar',
  },
});

const TestPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  console.log(router.isFallback);
  console.log(props);

  return <strong>Test Page</strong>;
};

export default TestPage;
