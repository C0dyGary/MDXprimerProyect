import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";

import Header from "../components/Header";
import Layout from "../components/Layout";

const components = {
  h1: (props) => (
    <h1 className="text-yellow-500 text-2xl capitalize">{props.children}</h1>
  ),
  p: (props) => <p className="text-xl">{props.children}</p>,
  ul: (props) => <ul className="list-disc p-7">{props.children}</ul>,
  pre: (props) => (
    <pre className="bg-zinc-800 rounded-md drop-shadow-2xl m-1 p-5">
      {props.children}
    </pre>
  ),
};
export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Header />
      <Layout>
        {pageProps.hasOwnProperty("posts") ? (
          <>
            <div className="box-content h-20 w-20"></div>
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <div className="box-content h-20 w-20"></div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md shadow-lg shadow-gray-700/50 p-8">
              <Component {...pageProps} />
            </div>
          </>
        )}
      </Layout>
    </MDXProvider>
  );
}
