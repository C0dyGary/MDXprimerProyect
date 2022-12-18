import Head from "next/head";
import { Inter } from "@next/font/google";
import { getAllPostMeta } from "../lib/posts";
import Card from "../components/Card";
import Link from "next/link";
import CardPost from "../components/CardPost";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>MI BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul className="">
          <div className="col-start-2 col-span-5 grid grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <li key={i}>
                <Card post={post} />
              </li>
            ))}
          </div>
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = getAllPostMeta();

  return {
    props: {
      posts,
    },
  };
}
