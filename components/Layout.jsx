export default function Layout({ children }) {
  return (
    <div className="bg-gray-200 text-black dark:bg-gray-900 dark:text-white h-screen">
      <div className="grid grid-rows-1 p-2 md:p-5 md:grid-cols-7">
        <div className="md:col-start-2 md:col-end-7">{children}</div>
      </div>
    </div>
  );
}
