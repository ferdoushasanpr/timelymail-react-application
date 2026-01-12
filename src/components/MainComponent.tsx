import Sidebar from "./Sidebar";

interface MainComponentProps {
    children: React.ReactNode;
}

function MainComponent({ children }: MainComponentProps) {
    return (
        <div className="flex min-h-screen bg-[#121212] text-white font-sans">
          {/* Sidebar */}
          <Sidebar />
    
          {/* Main Content */}
          {children}
        </div>
      );
}

export default MainComponent;
