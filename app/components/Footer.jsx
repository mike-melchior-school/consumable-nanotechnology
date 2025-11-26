export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Nanotechnology Solutions</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Transforming healthcare through advanced consumable nanotechnology. 
            Precision engineering for better patient outcomes.
          </p>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Sections</h4>
            <ul className="space-y-1 text-xs">
              <li><a href="/" className="text-slate-400 hover:text-cyan-400">Home</a></li>
              <li><a href="/nanotechnology" className="text-slate-400 hover:text-cyan-400">What is Nano?</a></li>
              <li><a href="/benefits" className="text-slate-400 hover:text-cyan-400">Benefits</a></li>
              <li><a href="/implementation" className="text-slate-400 hover:text-cyan-400">Implementation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Team</h4>
            <div className="text-xs text-slate-400 space-y-1">
              <p>Zayad Alam</p>
              <p>Brady Inglis</p>
              <p>Nick Coffin</p>
              <p>Mike Melchior</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Medical Nanotechnology Research
          </p>
        </div>
      </div>
    </footer>
  );
}