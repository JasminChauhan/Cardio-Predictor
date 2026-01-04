// 'use client';

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
// import { Progress } from '@/components/ui/progress';
// import { PredictionResponse } from '@/types/prediction';
// import { getRiskLevel, formatProbability } from '@/lib/utils';
// import { AlertCircle, CheckCircle, RefreshCw, Heart, TrendingUp, Shield } from 'lucide-react';

// interface PredictionResultProps {
//   result: PredictionResponse;
//   onReset: () => void;
// }

// export function PredictionResult({ result, onReset }: PredictionResultProps) {
//   const hasDisease = result.prediction === 1;
//   const probability = result.probability || 0;
//   const riskLevel = getRiskLevel(probability);

//   return (
//     <div className="max-w-4xl mx-auto space-y-6">
//       <Card className="shadow-xl border-2">
//         <CardHeader className="text-center pb-4">
//           <div className="flex justify-center mb-4">
//             {hasDisease ? (
//               <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
//                 <AlertCircle className="w-10 h-10 text-red-600" />
//               </div>
//             ) : (
//               <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
//                 <CheckCircle className="w-10 h-10 text-green-600" />
//               </div>
//             )}
//           </div>
//           <CardTitle className="text-3xl mb-2">Assessment Complete</CardTitle>
//           <CardDescription className="text-lg">
//             Your cardiovascular risk assessment results
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="space-y-6">
//           <div className={`rounded-xl border-2 p-6 ${riskLevel.color}`}>
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <h3 className="text-2xl font-bold mb-1">{riskLevel.message}</h3>
//                 <p className="text-sm opacity-80">Risk Probability: {formatProbability(probability)}</p>
//               </div>
//               <Badge variant={hasDisease ? 'destructive' : 'secondary'} className="text-base px-4 py-2">
//                 {hasDisease ? 'Positive' : 'Negative'}
//               </Badge>
//             </div>
//             <Progress value={probability * 100} className="h-3" />
//           </div>

//           <Alert>
//             <Heart className="h-5 w-5" />
//             <AlertTitle className="text-lg font-semibold mb-2">Understanding Your Results</AlertTitle>
//             <AlertDescription className="text-base leading-relaxed">
//               {hasDisease ? (
//                 <>
//                   The assessment indicates potential cardiovascular disease risk. This is based on your 
//                   provided health metrics and lifestyle factors. It's important to consult with a healthcare 
//                   professional for a comprehensive evaluation and personalized care plan.
//                 </>
//               ) : (
//                 <>
//                   The assessment shows a lower likelihood of cardiovascular disease based on your current 
//                   health metrics. Continue maintaining healthy lifestyle choices and regular health checkups 
//                   to preserve your cardiovascular health.
//                 </>
//               )}
//             </AlertDescription>
//           </Alert>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <TrendingUp className="w-5 h-5 text-blue-600" />
//                 Personalized Recommendations
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-3">
//                 {riskLevel.recommendations.map((recommendation, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                       <span className="text-xs font-bold text-blue-600">{index + 1}</span>
//                     </div>
//                     <span className="text-gray-700 leading-relaxed">{recommendation}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
//             <CardContent className="pt-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
//                   <Shield className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-lg mb-2 text-gray-900">Important Notice</h4>
//                   <p className="text-gray-700 leading-relaxed">
//                     This assessment is a screening tool and should not be used as a definitive diagnosis. 
//                     Always consult qualified healthcare professionals for medical advice, diagnosis, and treatment. 
//                     Regular health checkups and monitoring are essential for maintaining cardiovascular health.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <div className="flex gap-4 pt-4">
//             <Button onClick={onReset} className="flex-1" size="lg">
//               <RefreshCw className="w-4 h-4 mr-2" />
//               New Assessment
//             </Button>
//             <Button variant="outline" className="flex-1" size="lg" onClick={() => window.print()}>
//               Save Results
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
import {
  AlertCircle,
  CheckCircle,
  RefreshCw,
  Heart,
  TrendingUp,
  Shield,
  Download,
  Sparkles,
} from 'lucide-react';

// Define the shape of the prediction result from your backend
interface PredictionResultData {
  prediction: number;        // 0 = no disease, 1 = disease
  probability: number;      // value between 0 and 1
}

// Props interface for the component
interface PredictionResultProps {
  result: PredictionResultData;
  onReset: () => void;
}

// Main component with proper typing
export function PredictionResult({ result, onReset }: PredictionResultProps) {
  const [isVisible, setIsVisible] = useState(false);

  const hasDisease = result.prediction === 1;
  const probability = result.probability ?? 0.75; // fallback only for safety

  // Risk level configuration based on prediction
  const riskLevel = {
    message: hasDisease ? 'Elevated Risk Detected' : 'Low Risk Profile',
    color: hasDisease
      ? 'from-red-900/40 to-orange-900/40'
      : 'from-green-900/40 to-emerald-900/40',
    borderColor: hasDisease ? 'border-red-500/30' : 'border-green-500/30',
    recommendations: hasDisease
      ? [
          'Schedule a comprehensive cardiovascular evaluation with a cardiologist',
          'Adopt a heart-healthy diet rich in fruits, vegetables, and whole grains',
          'Engage in regular physical activity (150 minutes of moderate exercise per week)',
          'Monitor and manage blood pressure, cholesterol, and blood sugar levels',
          'Consider stress management techniques and adequate sleep',
        ]
      : [
          'Continue maintaining a balanced diet and regular exercise routine',
          'Schedule annual health checkups to monitor cardiovascular markers',
          'Stay hydrated and maintain a healthy weight',
          'Avoid smoking and limit alcohol consumption',
          'Practice stress management and prioritize mental health',
        ],
  };

  // Trigger entrance animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-purple-950 py-12 px-4">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Main Result Card with fade-in animation */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative group">
            {/* Outer glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            {/* Card content */}
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="text-center pt-12 pb-6 px-6 border-b border-white/5">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 ${
                        hasDisease ? 'bg-red-500' : 'bg-green-500'
                      } rounded-full blur-2xl opacity-50 animate-pulse`}
                    />
                    <div
                      className={`relative w-24 h-24 rounded-full flex items-center justify-center ${
                        hasDisease
                          ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/30'
                          : 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30'
                      }`}
                    >
                      {hasDisease ? (
                        <AlertCircle className="w-12 h-12 text-red-400" />
                      ) : (
                        <CheckCircle className="w-12 h-12 text-green-400" />
                      )}
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Assessment Complete
                </h2>
                <p className="text-lg text-blue-100/70">
                  Your cardiovascular risk assessment results
                </p>
              </div>

              <div className="p-8 space-y-6">
                {/* Risk Level */}
                <div
                  className={`relative rounded-2xl p-6 bg-gradient-to-br ${riskLevel.color} backdrop-blur-sm border-2 ${riskLevel.borderColor} overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {riskLevel.message}
                        </h3>
                        <p className="text-sm text-blue-100/70">
                          Risk Probability:{' '}
                          <span className="font-semibold text-white">
                            {(probability * 100).toFixed(1)}%
                          </span>
                        </p>
                      </div>
                      <div
                        className={`px-6 py-2 rounded-xl font-semibold ${
                          hasDisease
                            ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                            : 'bg-green-500/20 text-green-300 border border-green-500/30'
                        }`}
                      >
                        {hasDisease ? 'Positive' : 'Negative'}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          hasDisease
                            ? 'bg-gradient-to-r from-red-500 to-orange-500'
                            : 'bg-gradient-to-r from-green-500 to-emerald-500'
                        }`}
                        style={{ width: `${probability * 100}%` }}
                      />
                      <div
                        className={`absolute inset-0 blur-sm ${
                          hasDisease
                            ? 'bg-gradient-to-r from-red-500/50 to-orange-500/50'
                            : 'bg-gradient-to-r from-green-500/50 to-emerald-500/50'
                        }`}
                        style={{ width: `${probability * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Understanding Results */}
                <div className="relative rounded-2xl p-6 bg-blue-900/20 backdrop-blur-sm border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Understanding Your Results
                      </h4>
                      <p className="text-blue-100/80 leading-relaxed">
                        {hasDisease ? (
                          <>
                            The assessment indicates potential cardiovascular disease risk. This is based on your 
                            provided health metrics and lifestyle factors. It's important to consult with a healthcare 
                            professional for a comprehensive evaluation and personalized care plan.
                          </>
                        ) : (
                          <>
                            The assessment shows a lower likelihood of cardiovascular disease based on your current 
                            health metrics. Continue maintaining healthy lifestyle choices and regular health checkups 
                            to preserve your cardiovascular health.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="relative rounded-2xl p-6 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      Personalized Recommendations
                    </h4>
                  </div>

                  <ul className="space-y-4">
                    {riskLevel.recommendations.map((recommendation, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-white">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-blue-100/80 leading-relaxed">
                          {recommendation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Notice */}
                <div className="relative rounded-2xl p-6 bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-sm border-2 border-amber-500/30">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500 rounded-xl blur-lg opacity-50" />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-3 text-white flex items-center gap-2">
                        Important Notice
                        <Sparkles className="w-5 h-5 text-amber-400" />
                      </h4>
                      <p className="text-amber-100/80 leading-relaxed">
                        This assessment is a screening tool and should not be used as a definitive diagnosis. 
                        Always consult qualified healthcare professionals for medical advice, diagnosis, and treatment. 
                        Regular health checkups and monitoring are essential for maintaining cardiovascular health.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={onReset}
                    className="group relative flex-1 py-4 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center text-white font-semibold text-lg">
                      <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                      New Assessment
                    </span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="group flex-1 py-4 rounded-xl bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white font-semibold text-lg"
                  >
                    <span className="flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                      Save Results
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}