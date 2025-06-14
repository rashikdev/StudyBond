import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="text-base-content py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 uppercase">
            StudyBond
          </h2>
          <p className="text-sm leading-relaxed">
            Connect, collaborate, and grow together. A platform for group study,
            assignments, and peer feedback.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col space-y-2">
            <Link className="hover:underline" to="/">
              Home
            </Link>
            <Link className="hover:underline" to="/assignments">
              Assignments
            </Link>
            <Link className="hover:underline" to="create-assignment">
              Create Assignment
            </Link>
            <Link className="hover:underline" to="/pending-assignments">
              Pending Submissions
            </Link>
            <Link className="hover:underline" to="/login">
              Login
            </Link>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact & Support</h3>
          <p className="text-sm">📧 Email: support@studybond.dev</p>
          <p className="text-sm mb-3">📞 Phone: +81-1234-567890</p>

          <div className="flex space-x-4 text-xl mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-12 text-base-content/70">
        © {new Date().getFullYear()} StudyBond. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
