import Header from './components/Header';
import RankingList from './components/RankingList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <RankingList />
      </main>
      <Footer />
    </div>
  );
}
