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


'use client';

import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

// Define the props interface
interface FormStepsProps {
  currentStep: number;           // 0-based index of the current step
  steps: string[];               // Array of step titles/labels
}

// Enhanced FormSteps Component with proper typing
export function FormSteps({ currentStep, steps }: FormStepsProps) {
  const [animatedStep, setAnimatedStep] = useState(0);

  // Animate the progress when currentStep changes
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
                  {/* Glow effect for completed and active steps */}
                  {index <= animatedStep && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  )}

                  {/* Main step circle */}
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 transform ${
                      index < animatedStep
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-blue-500 text-white scale-105 shadow-lg'
                        : index === animatedStep
                        ? 'bg-slate-800 border-blue-500 text-white scale-115 shadow-2xl shadow-blue-500/60 ring-4 ring-blue-500/30'
                        : 'bg-slate-800/50 border-slate-600 text-slate-400 scale-90'
                    }`}
                  >
                    {index < animatedStep ? (
                      <Check className="w-6 h-6" strokeWidth={3} />
                    ) : (
                      <span className="text-lg font-bold">{index + 1}</span>
                    )}
                  </div>
                </div>

                {/* Step label below */}
                <span
                  className={`text-xs mt-3 font-medium text-center absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${
                    index <= animatedStep ? 'text-blue-300 opacity-100' : 'text-slate-500 opacity-70'
                  }`}
                >
                  {step}
                </span>
              </div>

              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 mx-4 relative overflow-hidden">
                  {/* Background line */}
                  <div className="absolute inset-y-0 left-0 right-0 bg-slate-700 rounded-full" />

                  {/* Animated progress line */}
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: index < animatedStep ? '100%' : '0%',
                    }}
                  />

                  {/* Glow effect on completed lines */}
                  {index < animatedStep && (
                    <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-40 animate-pulse" />
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