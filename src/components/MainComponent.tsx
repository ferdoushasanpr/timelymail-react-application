interface MainComponentProps {
    children: React.ReactNode;
}

function MainComponent({ children }: MainComponentProps) {
    return (
        <div className="flex min-h-screen bg-[#121212] text-white font-sans">
          {/* Sidebar */}
          <aside className="w-60 bg-[#1e1e1e] border-r border-[#333] p-5 flex flex-col gap-5">
            <h2 className="text-blue-500 text-lg font-semibold">TimelyMail</h2>
            <nav className="flex flex-col gap-2">
              <div className="cursor-pointer text-gray-400 hover:text-white">
                Dashboard
              </div>
              <div className="cursor-pointer text-gray-400 hover:text-white">
                Settings
              </div>
              <div className="cursor-pointer text-red-400 mt-5 hover:text-red-500">
                Logout
              </div>
            </nav>
          </aside>
    
          {/* Main Content */}
          {children}
        </div>
      );
}

export default MainComponent;
