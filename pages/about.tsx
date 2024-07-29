import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Sam's Blog built with NextJS & `}</title>
      </Head>
      <Container>
        <Intro />
      </Container>
    </Layout>
  );
}
