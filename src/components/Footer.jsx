// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Brand / Info */}
        <div>
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">
              <span className="text-[var(--color-primary)]">G</span>reen
              <span className="text-[var(--color-primary)]">B</span>asket
            </h1>
          </Link>
          <p className="text-sm text-[var(--color-neutral-light)] mt-2">
            Fresh groceries delivered to your doorstep.
          </p>
        </div>

        {/* Middle: Links */}
        <ul className="flex flex-wrap gap-6 text-sm">
          <li>
            <a
              href="#about"
              className="hover:text-[var(--color-secondary-light)] transition"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[var(--color-secondary-light)] transition"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#privacy"
              className="hover:text-[var(--color-secondary-light)] transition"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#terms"
              className="hover:text-[var(--color-secondary-light)] transition"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>

        {/* Right: Social Media */}
        <div className="flex gap-4">
          <a
            href="#"
            className="p-2 bg-[var(--color-secondary)] rounded-full hover:bg-[var(--color-secondary-dark)] transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 bg-[var(--color-secondary)] rounded-full hover:bg-[var(--color-secondary-dark)] transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 bg-[var(--color-secondary)] rounded-full hover:bg-[var(--color-secondary-dark)] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-[var(--color-neutral-dark)] pt-4 text-center text-xs text-[var(--color-neutral-light)]">
        © {new Date().getFullYear()} GreenBasket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
