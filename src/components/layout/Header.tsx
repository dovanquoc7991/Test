import { useState, useEffect, useRef } from 'react';
import { Heart, Calendar, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Close menu first
    setIsMenuOpen(false);
    
    // Small delay to ensure menu is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calculate position considering fixed header height
        const headerHeight = 96; // h-24 = 96px
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const menuItems = [
    { id: 'story', label: 'Câu Chuyện' },
    { id: 'events', label: 'Thông Tin Hôn Lễ' },
    { id: 'gallery', label: 'Album Ảnh' },
    { id: 'wishes', label: 'Lời Chúc' },
    { id: 'gift', label: 'Mừng Cưới' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' 
            : 'bg-white/80 backdrop-blur-sm shadow-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="text-rose-500"
              >
                <Heart size={20} fill="currentColor" />
              </motion.div>
              <div className="text-lg font-serif font-semibold text-gray-800 tracking-wide">
                Văn Cường <span className="text-rose-400 mx-1">&</span> Diễm My
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05, color: '#f43f5e' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Date Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-rose-50 to-pink-50 px-4 py-2 rounded-full border border-rose-200"
            >
              <Calendar size={16} className="text-rose-500" />
              <span className="text-sm font-semibold text-gray-700">27.12.2025</span>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-rose-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Date */}
        <div className="sm:hidden flex justify-center mt-2">
          <div className="flex items-center gap-2 bg-rose-50 px-3 py-1 rounded-full">
            <Calendar size={14} className="text-rose-500" />
            <span className="text-xs font-semibold text-gray-700">27.12.2025</span>
          </div>
        </div>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-24"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl z-50 md:hidden border-b border-rose-100"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(244, 63, 94, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-4 px-4 text-gray-700 font-medium rounded-xl transition-all duration-300 flex items-center gap-3 hover:text-rose-600"
                  >
                    <Sparkles size={16} className="text-rose-400 flex-shrink-0" />
                    <span className="flex-1">{item.label}</span>
                  </motion.button>
                ))}
              </nav>
              
              {/* Decorative Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-rose-100"
              >
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-300" />
                <Heart size={16} className="text-rose-400 fill-rose-400/30" />
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-300" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;