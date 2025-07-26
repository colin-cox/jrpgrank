export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold">JRPG Rank</h1>
            <span className="text-purple-200 text-sm font-medium bg-purple-800 px-3 py-1 rounded-full">
              Top 10 JRPGs
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#rankings" className="hover:text-purple-200 transition-colors">
              Rankings
            </a>
            <a href="#about" className="hover:text-purple-200 transition-colors">
              About
            </a>
          </nav>
        </div>
        <p className="mt-4 text-purple-100 max-w-2xl">
          Vote for your favorite JRPGs and see how they rank against the greatest games of all time.
          Real-time community-driven rankings updated with every vote.
        </p>
      </div>
    </header>
  );
}