import React from "react";

export default function Estado({ pageProps: { prop }, children }) {
  return (
    <div>{prop.hasOwnProperty("posts") ? children : <div>{children}</div>}</div>
  );
}
