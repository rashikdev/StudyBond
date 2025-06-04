const Footer = () => {
  return (
    <footer className="py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2 uppercase">Study Bond</h2>
          <p className="text-sm">
            Connect, collaborate, and grow together. A platform for group study,
            assignments, and peer feedback.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/assignments" className="hover:underline">
                Assignments
              </a>
            </li>
            <li>
              <a href="/create" className="hover:underline">
                Create Assignment
              </a>
            </li>
            <li>
              <a href="/pending" className="hover:underline">
                Pending Submissions
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Contact / Social */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact & Support</h3>
          <p className="text-sm">Email: support@studybond.dev</p>
          <p className="text-sm mb-2">Phone: +81-1234-567890</p>

          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-white/70">
        © {new Date().getFullYear()} StudyBond. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
