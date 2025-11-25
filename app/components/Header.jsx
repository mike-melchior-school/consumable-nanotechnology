import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">

            <div className="w-full text-center p-8 text-3xl">
                Medical Applications of Consumable Nanotechnology
            </div>

            <div className="sticky top-0 z-50 bg-white shadow-md">
                <Navbar />
            </div>
        </header>
    );
}
