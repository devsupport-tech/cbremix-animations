
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLists = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Team", path: "/team" },
        { name: "Careers", path: "/careers" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "News", path: "/news" },
        { name: "Events", path: "/events" },
        { name: "FAQ", path: "/faq" },
        { name: "Support", path: "/support" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms", path: "/terms" },
        { name: "Privacy", path: "/privacy" },
        { name: "Cookies", path: "/cookies" },
        { name: "Licenses", path: "/licenses" },
        { name: "Contact", path: "/contact" },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="block mb-6 flex items-center">
              <img 
                src="/lovable-uploads/6c410e36-5540-4b37-9199-b168d472fc1f.png" 
                alt="Superior Restoration Logo" 
                className="h-16 w-16 mr-3"
              />
              <div>
                <h2 className="text-2xl font-bold">
                  Superior<span className="text-secondary"> Restoration</span>
                </h2>
                <p className="text-sm text-gray-300">Management Services</p>
              </div>
            </Link>
            <p className="text-gray-300 max-w-sm mb-8">
              Providing expert restoration services for water damage, fire damage, and more. We help you recover quickly from property damage.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">123 Restoration Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">contact@superiorrestoration.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          {footerLists.map((list, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{list.title}</h3>
              <ul className="space-y-4">
                {list.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-light mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Superior Restoration and Management Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              Facebook
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              Twitter
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              Instagram
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
