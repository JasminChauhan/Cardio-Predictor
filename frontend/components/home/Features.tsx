// 'use client';

// import { Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// export function Features() {
//   const features = [
//     {
//       icon: Shield,
//       title: 'Privacy First',
//       description: 'Your health data is processed securely and never stored permanently',
//       color: 'bg-blue-100 text-blue-600',
//     },
//     {
//       icon: Clock,
//       title: 'Quick Assessment',
//       description: 'Complete the assessment in under 5 minutes with our streamlined process',
//       color: 'bg-purple-100 text-purple-600',
//     },
//     {
//       icon: CheckCircle,
//       title: 'Evidence-Based',
//       description: 'Predictions based on validated medical research and clinical data',
//       color: 'bg-green-100 text-green-600',
//     },
//     {
//       icon: AlertCircle,
//       title: 'Risk Stratification',
//       description: 'Detailed risk level classification with specific recommendations',
//       color: 'bg-orange-100 text-orange-600',
//     },
//   ];

//   return (
//     <div className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Why Choose Our Assessment Tool?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Cutting-edge technology meets medical expertise to provide you with reliable cardiovascular risk insights
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
//             >
//               <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
//                 <feature.icon className="w-7 h-7" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-3xl font-bold mb-4">
//               Important Disclaimer
//             </h3>
//             <p className="text-lg leading-relaxed opacity-90">
//               This tool is designed to provide educational insights and should not replace professional medical advice. 
//               Always consult with a qualified healthcare provider about your cardiovascular health concerns and before 
//               making any medical decisions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'
import React, { useState, useEffect } from 'react';
import { Shield, Clock, CheckCircle, AlertCircle, Activity, Heart, TrendingUp, ArrowRight } from 'lucide-react';

// Enhanced Features Component
export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your health data is processed securely and never stored permanently',
      gradient: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Clock,
      title: 'Quick Assessment',
      description: 'Complete the assessment in under 5 minutes with our streamlined process',
      gradient: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: CheckCircle,
      title: 'Evidence-Based',
      description: 'Predictions based on validated medical research and clinical data',
      gradient: 'from-emerald-400 to-teal-400',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
    },
    {
      icon: AlertCircle,
      title: 'Risk Stratification',
      description: 'Detailed risk level classification with specific recommendations',
      gradient: 'from-orange-400 to-amber-400',
      bgGradient: 'from-orange-500/10 to-amber-500/10',
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Why Choose Our Assessment Tool?
          </h2>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge technology meets medical expertise to provide you with reliable cardiovascular risk insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 h-full transform group-hover:scale-105 group-hover:-translate-y-2`}>
                {/* Icon container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-500 ${hoveredIndex === index ? 'rotate-12 scale-110' : ''}`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-blue-100/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                {/* <div className={`mt-4 flex items-center text-white/60 transition-all duration-300 ${hoveredIndex === index ? 'translate-x-2 opacity-100' : 'opacity-0'}`}>
                  <span className="text-sm mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer section with glassmorphism */}
        <div className={`mt-20 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Important Disclaimer
              </h3>
              <p className="text-lg leading-relaxed text-blue-100/80">
                This tool is designed to provide educational insights and should not replace professional medical advice. 
                Always consult with a qualified healthcare provider about your cardiovascular health concerns and before 
                making any medical decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
