// 'use client';

// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Activity, Heart, TrendingUp } from 'lucide-react';

// export function Hero() {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
//         <div className="text-center">
//           <div className="flex justify-center mb-8">
//             <div className="relative">
//               <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//               <Heart className="w-20 h-20 text-blue-600 relative z-10" />
//             </div>
//           </div>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
//             Cardiovascular
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//               Risk Assessment
//             </span>
//           </h1>

//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Advanced AI-powered prediction system to assess your cardiovascular disease risk. 
//             Get personalized insights and recommendations based on your health profile.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <Link href="/prediction">
//               <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
//                 Start Assessment
//                 <Activity className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>
//             <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
//               Learn More
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
//                 <TrendingUp className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
//               <p className="text-gray-600 text-sm">
//                 Machine learning algorithms trained on extensive medical data
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
//                 <Heart className="w-6 h-6 text-purple-600" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
//               <p className="text-gray-600 text-sm">
//                 Get your cardiovascular risk assessment in seconds
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
//                 <Activity className="w-6 h-6 text-green-600" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
//               <p className="text-gray-600 text-sm">
//                 Personalized recommendations for improving heart health
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'
import React, { useState, useEffect } from 'react';
import { Shield, Clock, CheckCircle, AlertCircle, Activity, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [pulseScale, setPulseScale] = useState(1);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setPulseScale(prev => prev === 1 ? 1.1 : 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      title: 'AI-Powered Analysis',
      description: 'Machine learning algorithms trained on extensive medical data',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Instant Results',
      description: 'Get your cardiovascular risk assessment in seconds',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Activity,
      title: 'Actionable Insights',
      description: 'Personalized recommendations for improving heart health',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
        <div className="text-center">
          {/* Animated heart icon */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div
                className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-3xl transform transition-transform duration-500"
                style={{ transform: `scale(${pulseScale})` }}
              >
                <img
                  src="/logo.png"
                  alt="Human Heart"
                  className="w-20 h-20 object-contain mx-auto"
                />


              </div>
            </div>
          </div>

          {/* Main heading with animation */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-white">Cardiovascular</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
              Risk Assessment
            </span>
          </h1>

          <p className={`text-xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            Advanced AI-powered prediction system to assess your cardiovascular disease risk.
            Get personalized insights and recommendations based on your health profile.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <Link href={'/prediction'} className="group relative w-full sm:w-auto text-lg px-8 py-4 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center text-white font-semibold">
                Start Assessment
                <Activity className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            {/* <button className="group w-full sm:w-auto text-lg px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 font-semibold">
              Learn More
            </button> */}
          </div>

          {/* Feature cards with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {/* Card glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

                {/* Card content */}
                <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 h-full transform group-hover:scale-105 group-hover:-translate-y-2">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-6 mx-auto transform transition-transform duration-500 group-hover:rotate-12`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{stat.title}</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-950 to-transparent"></div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}