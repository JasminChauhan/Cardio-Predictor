// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Heart } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export function Header() {
//   const pathname = usePathname();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="bg-blue-600 p-2 rounded-lg">
//               <Heart className="w-6 h-6 text-white" />
//             </div>
//             <span className="font-bold text-xl text-gray-900 hidden sm:inline-block">
//               CardioPredict
//             </span>
//           </Link>

//           <nav className="flex items-center space-x-6">
//             <Link
//               href="/"
//               className={`text-sm font-medium transition-colors hover:text-blue-600 ${
//                 pathname === '/' ? 'text-blue-600' : 'text-gray-600'
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/prediction"
//               className={`text-sm font-medium transition-colors hover:text-blue-600 ${
//                 pathname === '/prediction' ? 'text-blue-600' : 'text-gray-600'
//               }`}
//             >
//               Assessment
//             </Link>
//             <Link href="/prediction">
//               <Button size="sm">
//                 Get Started
//               </Button>
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

'use client'
import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Enhanced Header Component
export function Header() {
  const [pathname, setPathname] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Assessment', path: '/prediction' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/10'
        : 'bg-slate-900/80 backdrop-blur-md border-b border-white/5'
      }`}>
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              {/* <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div> */}
              <img
                src="/logo.png"
                alt="Human Heart"
                className="w-12 h-10 group-hover:scale-110 transition-transform"
              />

            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 hidden sm:inline-block">
              CardioPredict
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setPathname(item.path)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${pathname === item.path
                    ? 'text-white'
                    : 'text-blue-100/70 hover:text-white'
                  }`}
              >
                {pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30"></div>
                )}
                <span className="relative z-10">{item.name}</span>
                {pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <Link href="/prediction" className="ml-4">
              <button className="group relative px-6 py-2 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center text-white font-semibold text-sm">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => {
                    setPathname(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${pathname === item.path
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white'
                      : 'text-blue-100/70 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/prediction" className="pt-2">
                <button className="w-full group relative px-6 py-3 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <span className="relative z-10 flex items-center justify-center text-white font-semibold text-sm">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}