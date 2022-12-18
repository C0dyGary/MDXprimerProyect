export default function CardPost({ children }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-md shadow-lg shadow-gray-700/50 drop-shadow-2xl">
      {children}
    </div>
  );
}
