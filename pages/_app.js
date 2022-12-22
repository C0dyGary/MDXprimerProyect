import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";

import Header from "../components/Header";
import Layout from "../components/Layout";
import Image from "next/image";

const components = {
  h1: (props) => (
    <h1 className="text-yellow-500 text-3xl capitalize p-3">
      {props.children}
    </h1>
  ),
  p: (props) => <p className="text-xl text-justify">{props.children}</p>,
  ul: (props) => <ul className="list-disc p-7">{props.children}</ul>,
  pre: (props) => (
    <pre className="bg-zinc-800 rounded-md drop-shadow-2xl m-1 p-3 text-sm text-left whitespace-pre-wrap">
      {props.children}
    </pre>
  ),
  img: (props) => (
    <img src={props.src} alt={props.alt} className="h-auto w-auto" />
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
            <div className="lg:grid md:grid-cols-5">
              <div className="lg:col-start-2 lg:col-end-5">
                <div className="box-content h-20 w-20"></div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-md shadow-lg shadow-gray-700/50 p-2 md:p-8">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </MDXProvider>
  );
}
