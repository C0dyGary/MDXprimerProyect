/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function Card({ post: { title, date, slug, description } }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img src="/img/HU1.png" className="rounded-t-lg" />
      <div className="p-5">
        <Link href={`/blog/${slug}`}>
          <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <h6>{date}</h6>
        <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-3 py-2 text-[15px] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
