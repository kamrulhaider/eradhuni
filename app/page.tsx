"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
            >
              Get Started
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
                  Get Started
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
              Learn to Cook Bengali Delights with Pro Chefs!
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Video Tutorials, Recipes, and Grocery Shopping - All in One App.
              The all-in-one Bengali cooking app - Learn, Cook, and Shop
              groceries.
            </p>
            <button
              className="mt-8 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
              onClick={() => scrollToSection("subscribe")}
            >
              Get Started
            </button>
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

      {/* Explore Section */}
      <section id="explore" className="bg-red-50 py-16 scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Explore eRadhuni
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tincidunt sagittis eros. Duis quis euismod lorem.
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

      {/* Features Section */}
      <section id="features" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Why Choose E-Radhuni?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tincidunt sagittis eros. Duis quis euismod lorem.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="play-list.png"
                  alt="App Screenshot 3"
                  width={250}
                  height={400}
                  className="w-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Chef-Led Video Tutorials
              </h3>
              <p className="text-gray-600">
                Learn Shariah Safe, Halal, and More!
              </p>
            </div>
            <div className="p-6">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="party.png"
                  alt="App Screenshot 3"
                  width={250}
                  height={400}
                  className="w-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Recipes for Every Occasion
              </h3>
              <p className="text-gray-600">From Daily Meals to Eid Specials.</p>
            </div>
            <div className="p-6">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="natural-food.png"
                  alt="App Screenshot 3"
                  width={250}
                  height={400}
                  className="w-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shop Ingredients</h3>
              <p className="text-gray-600">
                Get Mustard Oil, Hilsa Fish, and More Delivered.
              </p>
            </div>
            <div className="p-6">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="rocket-01.png"
                  alt="App Screenshot 3"
                  width={250}
                  height={400}
                  className="w-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro Subscription</h3>
              <p className="text-gray-600">
                Ad-Free Experience, Exclusive Recipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="Cooking.jpg"
                alt="About E-Radhuni"
                width={500}
                height={300}
                className="w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-red-500 mb-4">
                About E-Radhuni
              </h2>
              <p className="text-gray-700 mb-4">
                E-Radhuni is a Bengali cooking platform, bringing authentic
                recipes and chef-led videos to your fingertips. Based in
                Bangladesh, we're passionate about making cooking easy, fun and
                accessible. Our mission is to preserve our rich heritage, a
                better alternative, and a community where food lovers can
                connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Our Team</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tincidunt sagittis eros. Duis quis euismod lorem.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="bg-blue-100 w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="people.png"
                  alt="Team Member 3"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Full name</h3>
              <p className="text-red-500">Position & UI Designer</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="people.png"
                  alt="Team Member 3"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Full name</h3>
              <p className="text-red-500">Position & UI Designer</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="people.png"
                  alt="Team Member 3"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Full name</h3>
              <p className="text-red-500">Position & UI Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="subscribe" className="py-16 bg-white scroll-mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Join 10,000+ subscribers</h2>
          <p className="text-gray-600 mb-6">
            Join our mailing list to get the latest news.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
                Subscribe
              </button>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <label className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  className="rounded text-red-500 focus:ring-red-500"
                />
                <span>Join our mailing list to get the latest news.</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("about")}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("team")}
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("features")}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#subscribe"
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => scrollToSection("subscribe")}
                  >
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    Blog post name goes here
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    Blog post name goes here
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    Blog post name goes here
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    See all resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500 mb-4">
                <a href="#hero" onClick={() => scrollToSection("hero")}>
                  <Image
                    src="logo.png"
                    alt="E-Radhuni App Screenshot"
                    width={500}
                    height={500}
                    className="h-20 w-full"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-100">
            Copyright © {new Date().getFullYear()} Company name
          </div>
        </div>
      </footer>
    </div>
  );
}
