import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="bg-slate-900 border-b border-slate-700">
            {/* Main title  */}
            <div className="w-full text-center py-6 px-4">
                <h1 className="text-2xl md:text-3xl font-light text-white">
                    Medical Applications of 
                    <span className="text-cyan-400"> Consumable Nanotechnology</span>
                </h1>
                <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3"></div>
            </div>

            {/* Navbar */}
            <div className="bg-slate-800 border-b border-slate-700">
                <Navbar />
            </div>
        </header>
    );
}