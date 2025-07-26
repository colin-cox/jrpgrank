export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JRPG Rank</h3>
            <p className="text-gray-300 text-sm">
              The definitive community-driven ranking of the greatest Japanese RPGs of all time.
              Vote for your favorites and discover new classics.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#criteria" className="hover:text-white transition-colors">
                  Ranking Criteria
                </a>
              </li>
              <li>
                <a href="#submit" className="hover:text-white transition-colors">
                  Submit a Game
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#discord" className="hover:text-white transition-colors">
                  Join Discord
                </a>
              </li>
              <li>
                <a href="#twitter" className="hover:text-white transition-colors">
                  Follow on Twitter
                </a>
              </li>
              <li>
                <a href="#reddit" className="hover:text-white transition-colors">
                  Reddit Community
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 JRPG Rank. Built with Next.js and deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  );
}