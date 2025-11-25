export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 */}
        <div>
          <h3 className="text-gray-100 font-semibold text-lg mb-3">About</h3>
          <p className="text-sm leading-relaxed">
            A comprehensive exploration of consumable nanotechnology and its
            potential to transform modern healthcare systems in Canada.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-gray-100 font-semibold text-lg mb-3">Sections</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/benefits" className="hover:text-white">Benefits & Impact</a></li>
            <li><a href="/implementation" className="hover:text-white">Implementation Plan</a></li>
            <li><a href="/risks" className="hover:text-white">Risks & Mitigations</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-gray-100 font-semibold text-lg mb-3">Project Team</h3>
          <p className="text-sm">
            Zayad Alam<br />
            Brady Inglis<br />
            Nick Coffin<br />
            Mike Melchior
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12">
        © {new Date().getFullYear()} Medical Applications of Consumable Nanotechnology
      </div>
    </footer>
  );
}
