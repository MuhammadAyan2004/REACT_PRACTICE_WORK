function Header({ selectedTab, setSelectedTab }) {
  return (
    <header className="w-full border-b border-gray-300 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Social App
        </a>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#"
              className={`${selectedTab === "Home" && "bg-blue-600 hover:bg-blue-700 hover:text-white transition"}text-gray-700 hover:text-blue-600 transition px-4 py-2 rounded-lg`}
              onClick={() => setSelectedTab("Home")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`${selectedTab === "createPost" && "bg-blue-600 hover:bg-blue-700 hover:text-white transition"}text-gray-700 hover:text-blue-600 transition px-4 py-2 rounded-lg`}
              onClick={() => setSelectedTab("createPost")}
            >
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
