import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="bg-gray-200 dark:bg-gray-900 h-screen grid grid-rows-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
