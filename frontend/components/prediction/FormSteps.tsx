// 'use client';

// import { Check } from 'lucide-react';
// import { cn } from '@/lib/utils';

// interface FormStepsProps {
//   currentStep: number;
//   steps: string[];
// }

// export function FormSteps({ currentStep, steps }: FormStepsProps) {
//   return (
//     <div className="w-full py-4">
//       <div className="flex items-center justify-between">
//         {steps.map((step, index) => (
//           <div key={index} className="flex items-center flex-1">
//             <div className="flex flex-col items-center relative">
//               <div
//                 className={cn(
//                   'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300',
//                   index < currentStep
//                     ? 'bg-blue-600 border-blue-600 text-white'
//                     : index === currentStep
//                     ? 'bg-white border-blue-600 text-blue-600'
//                     : 'bg-white border-gray-300 text-gray-400'
//                 )}
//               >
//                 {index < currentStep ? (
//                   <Check className="w-5 h-5" />
//                 ) : (
//                   <span className="text-sm font-semibold">{index + 1}</span>
//                 )}
//               </div>
//               <span
//                 className={cn(
//                   'text-xs mt-2 font-medium text-center absolute top-12 whitespace-nowrap',
//                   index <= currentStep ? 'text-blue-600' : 'text-gray-400'
//                 )}
//               >
//                 {step}
//               </span>
//             </div>
//             {index < steps.length - 1 && (
//               <div
//                 className={cn(
//                   'flex-1 h-0.5 mx-2 transition-all duration-300',
//                   index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
//                 )}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


'use client'
import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, RefreshCw, Heart, TrendingUp, Shield, Check, Download, Sparkles } from 'lucide-react';

// Enhanced FormSteps Component
export function FormSteps({ currentStep, steps }) {
  const [animatedStep, setAnimatedStep] = useState(0);

  useEffect(() => {
    setAnimatedStep(currentStep);
  }, [currentStep]);

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center flex-1 relative">
              {/* Step Circle */}
              <div className="flex flex-col items-center relative z-10">
                <div className="relative">
                  {/* Glow effect for active/completed steps */}
                  {index <= currentStep && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  )}
                  
                  {/* Step circle */}
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 transform ${
                      index < currentStep
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-blue-500 text-white scale-100'
                        : index === currentStep
                        ? 'bg-slate-800 border-blue-500 text-white scale-110 shadow-lg shadow-blue-500/50'
                        : 'bg-slate-800/50 border-slate-600 text-slate-400 scale-90'
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="w-6 h-6 animate-in fade-in zoom-in duration-300" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                </div>
                
                {/* Step label */}
                <span
                  className={`text-xs mt-3 font-medium text-center absolute top-14 whitespace-nowrap transition-all duration-300 ${
                    index <= currentStep ? 'text-blue-300' : 'text-slate-500'
                  }`}
                >
                  {step}
                </span>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 mx-3 relative">
                  {/* Background line */}
                  <div className="absolute inset-0 bg-slate-700 rounded-full"></div>
                  
                  {/* Progress line */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-700 ${
                      index < currentStep
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-full'
                        : 'w-0'
                    }`}
                    style={{
                      width: index < currentStep ? '100%' : '0%',
                    }}
                  ></div>
                  
                  {/* Animated glow on progress */}
                  {index < currentStep && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-50"></div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
