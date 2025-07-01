import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-6 mt-20 border-t border-base-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-">STUDY BOND</h2>
          <p className="text-sm text-base-content/80 leading-relaxed">
            Connect, collaborate, and grow together. A platform for group study,
            assignments, and peer feedback.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-base-content/90">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/assignments" className="hover:text-primary transition">
                Assignments
              </Link>
            </li>
            <li>
              <Link
                to="/pending-assignments"
                className="hover:text-primary transition"
              >
                Pending Assignments
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-base-content/90">
            Contact & Support
          </h3>
          <p className="text-sm text-base-content/80">
            📧 Email: support@studybond.dev
          </p>
          <p className="text-sm text-base-content/80 mb-4">
            📞 Phone: +81-1234-567890
          </p>

          <div className="flex items-center space-x-4 mt-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-xl hover:text-blue-600 hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-xl hover:text-sky-500 hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-xl hover:text-gray-500 hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-xl hover:text-blue-500 hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-base-content/60 mt-12">
        © {new Date().getFullYear()} StudyBond. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
