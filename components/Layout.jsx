export default function Layout({ children }) {
  return (
    <div className="bg-gray-200 text-black dark:bg-gray-900 dark:text-white h-screen">
      <div className="grid grid-cols-7">
        <div className="col-start-2 col-span-5">
          <div className="grid grid-rows-1 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
