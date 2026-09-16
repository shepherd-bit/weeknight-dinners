import { Navbar } from './components/Navbar';

export function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-neutral-100 font-['Inter']">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Placeholder for Home / Recipe Grid */}
        <div className="text-center text-neutral-400">
          <p className="text-lg">Recipe grid and routing coming up next...</p>
        </div>
      </main>
    </div>
  );
}

export default App;