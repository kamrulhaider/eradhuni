"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUserTie, FaClock, FaUtensils, FaShoppingCart } from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close mobile menu if open

    const section = document.getElementById(sectionId);
    if (section) {
      // Add a small offset to account for the fixed header
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Prevent the default hash link behavior
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.hash && link.hash.startsWith("#")) {
        e.preventDefault();
        const sectionId = link.hash.substring(1);
        scrollToSection(sectionId);
      }
    };

    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
          <div className="text-2xl font-bold text-red-500">
            <a href="#hero" onClick={() => scrollToSection("hero")}>
              <Image
                src="logo.png"
                alt="E-Radhuni App Screenshot"
                width={500}
                height={500}
                className="h-12 w-full"
              />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-red-500">
              About
            </a>
            <a href="#features" className="text-gray-700 hover:text-red-500">
              Features
            </a>
            <a href="#explore" className="text-gray-700 hover:text-red-500">
              Explore
            </a>
            <a
              href="#subscribe"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => scrollToSection("subscribe")}
            >
              Subscribe
            </a>
          </nav>
          <button
            className="md:hidden z-40"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-white z-30 pt-20 px-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-red-500 text-lg py-2"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-red-500 text-lg py-2"
                  onClick={() => scrollToSection("features")}
                >
                  Features
                </a>
                <a
                  href="#explore"
                  className="text-gray-700 hover:text-red-500 text-lg py-2"
                  onClick={() => scrollToSection("explore")}
                >
                  Explore
                </a>
                <a
                  href="#subscribe"
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-center text-lg mt-4"
                  onClick={() => scrollToSection("subscribe")}
                >
                  Subscribe
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-16"></div>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-b from-white to-red-50 py-16 scroll-mt-16"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-red-500 leading-tight">
              Master Bengali Cooking, From Your Home Kitchen
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Learn authentic Bengali dishes with step-by-step video tutorials
              taught by professional chefs. No matter your skill level — you can
              cook like a pro!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition flex items-center justify-center gap-2 text-lg"
                onClick={() => scrollToSection("explore")}
              >
                Explore Tutorials
              </button>
              <a
                href="#"
                className="bg-gray-200 text-red-500 px-6 py-3 rounded-md hover:bg-gray-300 transition flex items-center justify-center gap-2 text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the App
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="hero-banner.png"
              alt="E-Radhuni App Screenshot"
              width={300}
              height={500}
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Why Choose E-Radhuni?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 text-red-500">
                <FaUserTie size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Learn From Pro Chefs
              </h3>
              <p className="text-gray-600 text-base">
                Short videos, big flavor. Get guidance directly from experienced
                chefs who make even complex recipes easy.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 text-red-500">
                <FaClock size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Learn Anytime, Anywhere
              </h3>
              <p className="text-gray-600 text-base">
                Access our tutorials anytime on your mobile. Cook at your own
                pace, wherever you are.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 text-red-500">
                <FaUtensils size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Authentic Bengali Flavors
              </h3>
              <p className="text-gray-600 text-base">
                Explore traditional & modern Bengali recipes — passed down
                generations and now in your hands.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 text-red-500">
                <FaShoppingCart size={64} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Unique Ingredients (Coming Soon)
              </h3>
              <p className="text-gray-600 text-base">
                We’ll offer rare & special ingredients you can’t always find in
                local stores — to bring the real taste to your table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section id="explore" className="bg-white py-16 scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Start Your Cooking Journey with E-Radhuni
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Explore a wide range of Bengali recipes — from regular everyday
            meals to festive specials. Our clean and simple video tutorials are
            designed for home cooks, food lovers, and beginners alike. Start
            with what you love, master the basics, and explore the flavors of
            Bengal.
          </p>
        </div>
      </section>

      {/* App Screens Section */}
      <section id="app-screens" className="bg-red-50 py-16 scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            A Sneak Peek Into the App
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Here’s how easy and beautiful learning can be — our app is designed
            to guide, not confuse. From Home to Ingredient Highlights — it’s all
            one tap away.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="Home.jpg"
                alt="App Screenshot 1"
                width={250}
                height={400}
                className="w-full"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="Groceries.jpg"
                alt="App Screenshot 2"
                width={250}
                height={400}
                className="w-full"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="RecipeView.jpg"
                alt="App Screenshot 3"
                width={250}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            What Our Early Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-red-50 p-6 rounded-xl shadow flex flex-col items-center">
              <p className="text-lg text-gray-700 italic mb-4">
                "Finally, a platform that teaches Bengali cooking like it should
                be — simple, visual, and full of love!"
              </p>
              <span className="font-semibold text-red-500">
                – Rumi Akter, Home Chef
              </span>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow flex flex-col items-center">
              <p className="text-lg text-gray-700 italic mb-4">
                "E-Radhuni made me confident in the kitchen. I now cook for my
                family every weekend!"
              </p>
              <span className="font-semibold text-red-500">
                – Rafiul Islam, University Student
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Meet The Creators Behind E-Radhuni
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            We’re a team of passionate creators — designers, developers, and
            food lovers — working to make Bengali cooking accessible and
            enjoyable for everyone.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="bg-blue-100 w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <span className="text-5xl">🧑‍🎨</span>
              </div>
              <h3 className="text-xl font-semibold">Saimon Hossen</h3>
              <p className="text-red-500">UI/UX Designer</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold">Kamrul Haider</h3>
              <p className="text-red-500">Developer</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <span className="text-5xl">✍️</span>
              </div>
              <h3 className="text-xl font-semibold">Fahad Ahammad</h3>
              <p className="text-red-500">Content Writer & Marketer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="subscribe" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">
            Join the E-Radhuni Family!
          </h2>
          <p className="text-gray-600 mb-6">
            Get notified when we launch, and receive exclusive content, early
            tutorials, and special recipe updates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="📧 Enter your email to stay in the loop..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition flex items-center gap-2 text-lg">
                Notify Me First!{" "}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600 mb-4">
                E-Radhuni is your personal online cooking tutor. We make Bengali
                cooking easy through tutorials, not just ingredients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("hero")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("team")}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#explore"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("explore")}
                  >
                    Explore Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#subscribe"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("subscribe")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://facebook.com"
                  className="text-gray-600 hover:text-red-500 text-2xl"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  className="text-gray-600 hover:text-red-500 text-2xl"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.479 3.5 12 3.5 12 3.5s-7.479 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.1 0 12 0 12s0 3.9.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.521 20.5 12 20.5 12 20.5s7.479 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.9 24 12 24 12s0-3.9-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-red-500 text-2xl"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.401 3.678 1.358 2.721 2.315 2.448 3.451 2.39 4.732 2.332 6.012 2.32 6.421 2.32 12c0 5.579.012 5.988.07 7.268.058 1.281.331 2.417 1.288 3.374.957.957 2.093 1.23 3.374 1.288C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.417-.331 3.374-1.288.957-.957 1.23-2.093 1.288-3.374.058-1.28.07-1.689.07-7.268 0-5.579-.012-5.988-.07-7.268-.058-1.281-.331-2.417-1.288-3.374C19.365.401 18.229.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Let’s connect and cook together!
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500 mb-4">
                <a href="#hero" onClick={() => scrollToSection("hero")}>
                  E-Radhuni
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-100">
            &copy; 2025 E-Radhuni. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
