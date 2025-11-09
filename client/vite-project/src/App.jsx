import React, { useState } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                📚 Book-verse
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Your Digital Library Manager
              </p>
            </div>
           
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <AddBook />
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <BookList />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Book-verse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
