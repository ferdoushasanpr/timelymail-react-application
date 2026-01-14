import { Link } from "react-router";

function Sidebar() {
  return (
    <aside className="w-60 bg-[#1e1e1e] border-r border-[#333] p-5 flex flex-col gap-5">
      <h2 className="text-blue-500 text-lg font-semibold">TimelyMail</h2>
      <nav className="flex flex-col gap-2">
        <Link
          to="/dashboard"
          className="cursor-pointer text-gray-400 hover:text-white"
        >
          Dashboard
        </Link>
        <Link
          to="/settings"
          className="cursor-pointer text-gray-400 hover:text-white"
        >
          Settings
        </Link>
        <Link
          to="/"
          className="cursor-pointer text-red-400 mt-5 hover:text-red-500"
        >
          Logout
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
