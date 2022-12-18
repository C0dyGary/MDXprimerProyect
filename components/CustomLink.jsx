import Link from "next/link";

import React from "react";

export default function CustomLink({ href, data }) {
  return (
    <div className="container ">
      <Link
        href={href}
        className="inline-flex items-center px-3 py-2 text-[15px] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3"
      >
        {data}
      </Link>
    </div>
  );
}
