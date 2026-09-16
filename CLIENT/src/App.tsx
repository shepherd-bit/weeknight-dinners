import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

export function App() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1a1a1a] font-['Inter']">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;