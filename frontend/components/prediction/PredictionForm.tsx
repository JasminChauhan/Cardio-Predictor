// 'use client';

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select } from '@/components/ui/select';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { predictionFormSchema, PredictionFormData } from '@/lib/validation';
// import { apiClient, calculateBMI } from '@/lib/api';
// import { PredictionInput, PredictionResponse, PredictionStatus } from '@/types/prediction';
// import { ArrowRight, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
// import { FormSteps } from './FormSteps';
// import { PredictionResult } from './PredictionResult';

// export function PredictionForm() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [predictionStatus, setPredictionStatus] = useState<PredictionStatus>(PredictionStatus.IDLE);
//   const [predictionResult, setPredictionResult] = useState<PredictionResponse | null>(null);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     trigger,
//     formState: { errors },
//   } = useForm<PredictionFormData>({
//     resolver: zodResolver(predictionFormSchema),
//     mode: 'onChange',
//   });

//   const steps = [
//     { title: 'Personal Info', fields: ['gender', 'age', 'height', 'weight'] },
//     { title: 'Vital Signs', fields: ['systolicBP', 'diastolicBP'] },
//     { title: 'Health Markers', fields: ['cholesterol', 'glucose'] },
//     { title: 'Lifestyle', fields: ['smoker', 'alcohol', 'physicalActivity'] },
//   ];

//   const handleNext = async () => {
//     const fields = steps[currentStep].fields as Array<keyof PredictionFormData>;
//     const isValid = await trigger(fields);
//     if (isValid) {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   const onSubmit = async (data: PredictionFormData) => {
//     setPredictionStatus(PredictionStatus.LOADING);

//     try {
//       const height = parseInt(data.height);
//       const weight = parseFloat(data.weight);
//       const bmi = calculateBMI(weight, height);

//       const input: PredictionInput = {
//         gender: parseInt(data.gender),
//         height: height,
//         weight: weight,
//         ap_hi: parseInt(data.systolicBP),
//         ap_lo: parseInt(data.diastolicBP),
//         cholesterol: parseInt(data.cholesterol),
//         gluc: parseInt(data.glucose),
//         smoke: parseInt(data.smoker),
//         alco: parseInt(data.alcohol),
//         active: parseInt(data.physicalActivity),
//         age_years: parseInt(data.age),
//         bmi: bmi,
//       };

//       const result = await apiClient.predict(input);
//       setPredictionResult(result);
//       setPredictionStatus(PredictionStatus.SUCCESS);
//     } catch (error) {
//       setPredictionStatus(PredictionStatus.ERROR);
//       console.error('Prediction error:', error);
//     }
//   };

//   const resetForm = () => {
//     setCurrentStep(0);
//     setPredictionStatus(PredictionStatus.IDLE);
//     setPredictionResult(null);
//   };

//   if (predictionStatus === PredictionStatus.SUCCESS && predictionResult) {
//     return <PredictionResult result={predictionResult} onReset={resetForm} />;
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       <Card className="shadow-xl">
//         <CardHeader>
//           <CardTitle className="text-3xl">Cardiovascular Risk Assessment</CardTitle>
//           <CardDescription className="text-base">
//             Complete all steps to receive your personalized risk assessment
//           </CardDescription>
//         </CardHeader>

//         <CardContent>
//           <FormSteps currentStep={currentStep} steps={steps.map((s) => s.title)} />

//           <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
//             {currentStep === 0 && (
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="gender">Gender *</Label>
//                   <Select {...register('gender')} id="gender">
//                     <option value="">Select gender</option>
//                     <option value="1">Female</option>
//                     <option value="2">Male</option>
//                   </Select>
//                   {errors.gender && (
//                     <p className="text-red-600 text-sm mt-1">{errors.gender.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="age">Age (years) *</Label>
//                   <Input {...register('age')} type="number" id="age" placeholder="35" />
//                   {errors.age && (
//                     <p className="text-red-600 text-sm mt-1">{errors.age.message}</p>
//                   )}
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="height">Height (cm) *</Label>
//                     <Input {...register('height')} type="number" id="height" placeholder="170" />
//                     {errors.height && (
//                       <p className="text-red-600 text-sm mt-1">{errors.height.message}</p>
//                     )}
//                   </div>

//                   <div>
//                     <Label htmlFor="weight">Weight (kg) *</Label>
//                     <Input {...register('weight')} type="number" step="0.1" id="weight" placeholder="70" />
//                     {errors.weight && (
//                       <p className="text-red-600 text-sm mt-1">{errors.weight.message}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {currentStep === 1 && (
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="systolicBP">Systolic Blood Pressure (mmHg) *</Label>
//                   <Input {...register('systolicBP')} type="number" id="systolicBP" placeholder="120" />
//                   <p className="text-sm text-gray-500 mt-1">Upper number (normal: 90-120)</p>
//                   {errors.systolicBP && (
//                     <p className="text-red-600 text-sm mt-1">{errors.systolicBP.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="diastolicBP">Diastolic Blood Pressure (mmHg) *</Label>
//                   <Input {...register('diastolicBP')} type="number" id="diastolicBP" placeholder="80" />
//                   <p className="text-sm text-gray-500 mt-1">Lower number (normal: 60-80)</p>
//                   {errors.diastolicBP && (
//                     <p className="text-red-600 text-sm mt-1">{errors.diastolicBP.message}</p>
//                   )}
//                 </div>
//               </div>
//             )}

//             {currentStep === 2 && (
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="cholesterol">Cholesterol Level *</Label>
//                   <Select {...register('cholesterol')} id="cholesterol">
//                     <option value="">Select level</option>
//                     <option value="1">Normal</option>
//                     <option value="2">Above Normal</option>
//                     <option value="3">Well Above Normal</option>
//                   </Select>
//                   {errors.cholesterol && (
//                     <p className="text-red-600 text-sm mt-1">{errors.cholesterol.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="glucose">Glucose Level *</Label>
//                   <Select {...register('glucose')} id="glucose">
//                     <option value="">Select level</option>
//                     <option value="1">Normal</option>
//                     <option value="2">Above Normal</option>
//                     <option value="3">Well Above Normal</option>
//                   </Select>
//                   {errors.glucose && (
//                     <p className="text-red-600 text-sm mt-1">{errors.glucose.message}</p>
//                   )}
//                 </div>
//               </div>
//             )}

//             {currentStep === 3 && (
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="smoker">Do you smoke? *</Label>
//                   <Select {...register('smoker')} id="smoker">
//                     <option value="">Select option</option>
//                     <option value="0">No</option>
//                     <option value="1">Yes</option>
//                   </Select>
//                   {errors.smoker && (
//                     <p className="text-red-600 text-sm mt-1">{errors.smoker.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="alcohol">Do you consume alcohol? *</Label>
//                   <Select {...register('alcohol')} id="alcohol">
//                     <option value="">Select option</option>
//                     <option value="0">No</option>
//                     <option value="1">Yes</option>
//                   </Select>
//                   {errors.alcohol && (
//                     <p className="text-red-600 text-sm mt-1">{errors.alcohol.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <Label htmlFor="physicalActivity">Are you physically active? *</Label>
//                   <Select {...register('physicalActivity')} id="physicalActivity">
//                     <option value="">Select option</option>
//                     <option value="0">No</option>
//                     <option value="1">Yes</option>
//                   </Select>
//                   <p className="text-sm text-gray-500 mt-1">
//                     At least 150 minutes of moderate activity per week
//                   </p>
//                   {errors.physicalActivity && (
//                     <p className="text-red-600 text-sm mt-1">{errors.physicalActivity.message}</p>
//                   )}
//                 </div>
//               </div>
//             )}

//             {predictionStatus === PredictionStatus.ERROR && (
//               <Alert variant="destructive">
//                 <AlertCircle className="h-4 w-4" />
//                 <AlertDescription>
//                   Failed to get prediction. Please check your connection and try again.
//                 </AlertDescription>
//               </Alert>
//             )}

//             <div className="flex justify-between pt-6">
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={handlePrevious}
//                 disabled={currentStep === 0 || predictionStatus === PredictionStatus.LOADING}
//               >
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Previous
//               </Button>

//               {currentStep < steps.length - 1 ? (
//                 <Button type="button" onClick={handleNext}>
//                   Next
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               ) : (
//                 <Button type="submit" disabled={predictionStatus === PredictionStatus.LOADING}>
//                   {predictionStatus === PredictionStatus.LOADING ? (
//                     <>
//                       <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                       Analyzing...
//                     </>
//                   ) : (
//                     'Get Results'
//                   )}
//                 </Button>
//               )}
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { predictionFormSchema, PredictionFormData } from '@/lib/validation';
import { apiClient, calculateBMI } from '@/lib/api';
import { PredictionInput, PredictionResponse, PredictionStatus } from '@/types/prediction';
import { ArrowRight, ArrowLeft, Loader2, AlertCircle, Heart, Activity, Droplet, Pill, Cigarette, Wine, Dumbbell } from 'lucide-react';
import { FormSteps } from './FormSteps';
import { PredictionResult } from './PredictionResult';

export function PredictionForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [predictionStatus, setPredictionStatus] = useState<PredictionStatus>(PredictionStatus.IDLE);
  const [predictionResult, setPredictionResult] = useState<PredictionResponse | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<PredictionFormData>({
    resolver: zodResolver(predictionFormSchema),
    mode: 'onChange',
  });

  const steps = [
    { title: 'Personal Info', fields: ['gender', 'age', 'height', 'weight'], icon: Heart, gradient: 'from-pink-500 to-rose-500' },
    { title: 'Vital Signs', fields: ['systolicBP', 'diastolicBP'], icon: Activity, gradient: 'from-red-500 to-pink-500' },
    { title: 'Health Markers', fields: ['cholesterol', 'glucose'], icon: Droplet, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Lifestyle', fields: ['smoker', 'alcohol', 'physicalActivity'], icon: Dumbbell, gradient: 'from-green-500 to-emerald-500' },
  ];

  const handleNext = async () => {
    const fields = steps[currentStep].fields as Array<keyof PredictionFormData>;
    const isValid = await trigger(fields);
    if (isValid) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsVisible(true);
      }, 300);
    }
  };

  const handlePrevious = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentStep((prev) => prev - 1);
      setIsVisible(true);
    }, 300);
  };

  const onSubmit = async (data: PredictionFormData) => {
    setPredictionStatus(PredictionStatus.LOADING);

    try {
      const height = parseInt(data.height);
      const weight = parseFloat(data.weight);
      const bmi = calculateBMI(weight, height);

      const input: PredictionInput = {
        gender: parseInt(data.gender),
        height: height,
        weight: weight,
        ap_hi: parseInt(data.systolicBP),
        ap_lo: parseInt(data.diastolicBP),
        cholesterol: parseInt(data.cholesterol),
        gluc: parseInt(data.glucose),
        smoke: parseInt(data.smoker),
        alco: parseInt(data.alcohol),
        active: parseInt(data.physicalActivity),
        age_years: parseInt(data.age),
        bmi: bmi,
      };

      const result = await apiClient.predict(input);
      setPredictionResult(result);
      setPredictionStatus(PredictionStatus.SUCCESS);
    } catch (error) {
      setPredictionStatus(PredictionStatus.ERROR);
      console.error('Prediction error:', error);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setPredictionStatus(PredictionStatus.IDLE);
    setPredictionResult(null);
  };

  // Fixed: Check for both predictionResult and valid probability before rendering result
  if (predictionStatus === PredictionStatus.SUCCESS && predictionResult && predictionResult.probability !== null) {
    return <PredictionResult result={predictionResult as PredictionResponse & { probability: number }} onReset={resetForm} />;
  }

  const StepIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-purple-950 py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Card with glow effect */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          
          <Card className="relative bg-slate-900/60 backdrop-blur-xl border-white/10 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-white/5 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <img
                src="/logo.png"
                alt="Human Heart"
                className="w-12 h-10 group-hover:scale-110 transition-transform"
              />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-3xl text-white">
                    Cardiovascular Risk Assessment
                  </CardTitle>
                  <CardDescription className="text-base text-blue-100/70 mt-1">
                    Complete all steps to receive your personalized risk assessment
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <FormSteps currentStep={currentStep} steps={steps.map((s) => s.title)} />

              <form onSubmit={handleSubmit(onSubmit)} className="p-8">
                {/* Step indicator with icon */}
                <div className={`flex items-center gap-3 mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${steps[currentStep].gradient} flex items-center justify-center shadow-lg`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${steps[currentStep].gradient} rounded-xl blur-lg opacity-50`}></div>
                    <StepIcon className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{steps[currentStep].title}</h3>
                    <p className="text-blue-100/60 text-sm">Step {currentStep + 1} of {steps.length}</p>
                  </div>
                </div>

                <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="gender" className="text-blue-100/90 font-medium">Gender *</Label>
                        <Select {...register('gender')} id="gender" className="mt-2 bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                          <option value="">Select gender</option>
                          <option value="1">Female</option>
                          <option value="2">Male</option>
                        </Select>
                        {errors.gender && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.gender.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="age" className="text-blue-100/90 font-medium">Age (years) *</Label>
                        <Input {...register('age')} type="number" id="age" placeholder="35" className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                        {errors.age && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.age.message}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="height" className="text-blue-100/90 font-medium">Height (cm) *</Label>
                          <Input {...register('height')} type="number" id="height" placeholder="170" className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                          {errors.height && (
                            <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.height.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="weight" className="text-blue-100/90 font-medium">Weight (kg) *</Label>
                          <Input {...register('weight')} type="number" step="0.1" id="weight" placeholder="70" className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                          {errors.weight && (
                            <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.weight.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="systolicBP" className="text-blue-100/90 font-medium flex items-center gap-2">
                          <Activity className="w-4 h-4 text-blue-400" />
                          Systolic Blood Pressure (mmHg) *
                        </Label>
                        <Input {...register('systolicBP')} type="number" id="systolicBP" placeholder="120" className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                        <p className="text-xs text-blue-100/50 mt-2">Upper number (normal: 90-120)</p>
                        {errors.systolicBP && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.systolicBP.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="diastolicBP" className="text-blue-100/90 font-medium flex items-center gap-2">
                          <Activity className="w-4 h-4 text-blue-400" />
                          Diastolic Blood Pressure (mmHg) *
                        </Label>
                        <Input {...register('diastolicBP')} type="number" id="diastolicBP" placeholder="80" className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                        <p className="text-xs text-blue-100/50 mt-2">Lower number (normal: 60-80)</p>
                        {errors.diastolicBP && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.diastolicBP.message}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="cholesterol" className="text-blue-100/90 font-medium flex items-center gap-2">
                          <Droplet className="w-4 h-4 text-blue-400" />
                          Cholesterol Level *
                        </Label>
                        <Select {...register('cholesterol')} id="cholesterol" className="mt-2 bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                          <option value="">Select level</option>
                          <option value="1">Normal</option>
                          <option value="2">Above Normal</option>
                          <option value="3">Well Above Normal</option>
                        </Select>
                        {errors.cholesterol && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.cholesterol.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="glucose" className="text-blue-100/90 font-medium flex items-center gap-2">
                          <Pill className="w-4 h-4 text-blue-400" />
                          Glucose Level *
                        </Label>
                        <Select {...register('glucose')} id="glucose" className="mt-2 bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                          <option value="">Select level</option>
                          <option value="1">Normal</option>
                          <option value="2">Above Normal</option>
                          <option value="3">Well Above Normal</option>
                        </Select>
                        {errors.glucose && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.glucose.message}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="smoker" className="text-blue-100/90 font-medium flex items-center gap-2">
                          <Cigarette className="w-4 h-4 text-blue-400" />
                          Do you smoke? *
                        </Label>
                        <Select {...register('smoker')} id="smoker" className="mt-2 bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                          <option value="">Select option</option>
                          <option value="0">No</option>
                          <option value="1">Yes</option>
                        </Select>
                        {errors.smoker && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.smoker.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="alcohol" className="text-blue-100/90 font-medium flex items-center gap-2">
                          <Wine className="w-4 h-4 text-blue-400" />
                          Do you consume alcohol? *
                        </Label>
                        <Select {...register('alcohol')} id="alcohol" className="mt-2 bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                          <option value="">Select option</option>
                          <option value="0">No</option>
                          <option value="1">Yes</option>
                        </Select>
                        {errors.alcohol && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.alcohol.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="physicalActivity" className="text-blue-100/90 font-medium flex items-center gap-2">
                          <Dumbbell className="w-4 h-4 text-blue-400" />
                          Are you physically active? *
                        </Label>
                        <Select {...register('physicalActivity')} id="physicalActivity" className="mt-2 bg-slate-800/50 border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                          <option value="">Select option</option>
                          <option value="0">No</option>
                          <option value="1">Yes</option>
                        </Select>
                        <p className="text-xs text-blue-100/50 mt-2">
                          At least 150 minutes of moderate activity per week
                        </p>
                        {errors.physicalActivity && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.physicalActivity.message}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {predictionStatus === PredictionStatus.ERROR && (
                  <Alert variant="destructive" className="mt-6 bg-red-900/30 border-red-500/30 backdrop-blur-sm">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-red-200">
                      Failed to get prediction. Please check your connection and try again.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex justify-between pt-8 mt-8 border-t border-white/5">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0 || predictionStatus === PredictionStatus.LOADING}
                    className="bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/30 text-white disabled:bg-slate-800/30 disabled:text-slate-500"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep < steps.length - 1 ? (
                    <Button 
                      type="button" 
                      onClick={handleNext} 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      disabled={predictionStatus === PredictionStatus.LOADING} 
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white disabled:opacity-50"
                    >
                      {predictionStatus === PredictionStatus.LOADING ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        'Get Results'
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-amber-500 rounded-lg blur-lg opacity-30"></div>
                <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Privacy & Security</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Your health data is processed securely and never stored permanently. All information is used solely for generating your risk assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}