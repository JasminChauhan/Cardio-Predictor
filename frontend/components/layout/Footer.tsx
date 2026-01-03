// 'use client';

// import { Heart } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="bg-gray-50 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <Heart className="w-5 h-5 text-white" />
//               </div>
//               <span className="font-bold text-lg text-gray-900">CardioPredict</span>
//             </div>
//             <p className="text-gray-600 mb-4 max-w-md">
//               Advanced AI-powered cardiovascular risk assessment tool designed to help you understand 
//               and monitor your heart health.
//             </p>
//             <p className="text-sm text-gray-500">
//               © 2026 CardioPredict. All rights reserved.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/prediction" className="text-gray-600 hover:text-blue-600 transition-colors">
//                   Start Assessment
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
//                   About Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
//                   Disclaimer
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-8 pt-8 border-t border-gray-200">
//           <p className="text-center text-sm text-gray-500">
//             Medical Disclaimer: This tool is for educational purposes only and should not replace professional medical advice.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client'
import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowRight } from 'lucide-react';

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Start Assessment', path: '/prediction' },
    { name: 'About Us', path: '/about' },
    // { name: 'Contact', path: '/contact' },
  ];

  // const legalLinks = [
  //   { name: 'Privacy Policy', path: '#' },
  //   { name: 'Terms of Service', path: '#' },
  //   { name: 'Disclaimer', path: '#' },
  //   { name: 'HIPAA Compliance', path: '#' },
  // ];

  return (
    <footer className="relative bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 border-t border-white/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl">
                  {/* <Heart className="w-6 h-6 text-white" fill="currentColor" /> */}
                  <img
                src="/logo.png"
                alt="Human Heart"
                className="w-12 h-10 group-hover:scale-110 transition-transform"
              />
                </div>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                CardioPredict
              </span>
            </div>
            <p className="text-blue-100/70 mb-6 max-w-md leading-relaxed">
              Advanced AI-powered cardiovascular risk assessment tool designed to help you understand 
              and monitor your heart health with precision and care.
            </p>
            {/* <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center text-blue-100/50 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center text-blue-100/70 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className={`w-4 h-4 mr-2 transform transition-transform duration-300 ${
                      hoveredLink === `quick-${index}` ? 'translate-x-1' : ''
                    }`} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          {/* <div>
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></div>
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onMouseEnter={() => setHoveredLink(`legal-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center text-blue-100/70 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className={`w-4 h-4 mr-2 transform transition-transform duration-300 ${
                      hoveredLink === `legal-${index}` ? 'translate-x-1' : ''
                    }`} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Divider with gradient */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6">
            <p className="text-center text-sm text-amber-100/80 leading-relaxed">
              <span className="font-semibold text-amber-200">Medical Disclaimer:</span> This tool is for educational purposes only and should not replace professional medical advice. 
              Always consult with a qualified healthcare provider for medical decisions.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5">
          <p className="text-sm text-blue-100/50 mb-4 md:mb-0">
            © 2026 CardioPredict. All rights reserved.
          </p>
          <p className="text-sm text-blue-100/50">
            Built with <span className="text-red-400">❤️</span> for better heart health
          </p>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
    </footer>
  );
}


